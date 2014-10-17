/**
 * Created by chenzhengtong on 2014/10/17.
 */

(function () {

    "use strict";

    window.TEController = window.TEController || {};

    window.TEController.action_login = function (data) {
        var mid = data["mid"];
        window.localStorage.setItem("mid", mid);
        //
        // Step 1. load content;
        $(window.TEIDS.MAIN_CONTENT).html(window.TETemplate.tpl_main_content());
        //
        // Step 2. display content; ajax call for the first login;
        window.TEController.action_refresh(mid);
        //
        // Step 3. set timer;
        window.TEController.action_set_timer();
        //
        // Step 4. add event to button 'refresh';
        $(window.TEIDS.BTN_REFRESH).bind("click", function () {
            window.TEController.action_refresh(window.localStorage.getItem('mid'));
        });

        //
        // test:
    };

    window.TEController.action_refresh = function (mid) {
        console.log(">>> Refresh starts:");
        $(window.TEIDS.BTN_REFRESH).disabled = true;
        $.ajax({
            url: "cgi-bin/api_data.py",
            type: "post",
            /*contentType: "multipart/form-data",*/
            data: 'mid='+mid,
            dataType: "json",
            success: function (data, status, jqxhr) {
                var json_data = JSON.parse(data)["result"];
                var channels = json_data["channel_list"];
                var articles = json_data["article_list"];
                //
                window.TEController.action_process_channels(channels);
                window.TEController.action_process_articles(articles);
                //
                $(window.TEIDS.BTN_REFRESH).disabled = false;
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
        //
        window.TEController.action_set_timer();
    };

    window.TEController.action_process_articles = function (articles) {
        var container = $(window.TEIDS.ARTICLE_LIST);
        var content = "";
        for (var idx in articles) {
            var article = articles[idx];
            var link = article['link'];
            var title = article['title'];
            var appendix_list = article['appendix'].split('|');
            var category = appendix_list[0];
            var keywords = appendix_list[1];
            var keyword_list = [];
            var keyword_html = "";
            if (keywords) {
                keyword_list = keywords.split(",");
                for (var idx in keyword_list) {
                    keyword_html += "<p><label class=\"label label-default\">" + keyword_list[idx] + "</label></p>"
                }
            }
            var img = article['img_list'][0] || "";
            var reason = article['tag'];
            content += "<tr>"
                + "<td class=\"col-md-2\"><a target=\"_blank\" href=\"" + link + "\">" + link/*.substring(0, 30)*/ + "</a></td>"
                + "<td class=\"col-md-2\"><h5>" + title + "</h5></td>"
                + "<td class=\"col-md-1\">" + category + "</td>"
                + "<td class=\"col-md-4\"><img class=\"img-thumbnail img-responsive\" src=\"" + img + "\" /></td>"
                + "<td class=\"col-md-1\">" + keyword_html + "</td>"
                + "<td class=\"col-md-1\"><p><label class=\"label label-default\">" + reason + "</p></label></td>"
                + "<td class=\"col-md-1\">" + "通过（未完成）" +  "</td>"
                + "</tr>";
        }
        container.html(content);
    };

    window.TEController.action_process_channels = function (channels) {
        //
        $(window.TEIDS.CHANNEL_SELECTED).html("");
        $(window.TEIDS.CHANNEL_UNSELECTED).html("");
        //
        _.forEach(channels, function(channel, idx) {
            var temp_id = "id-channel-" + idx;
            //
            if (channel['selected']) {
                $(window.TEIDS.CHANNEL_SELECTED).append(
                    "<a class=\"btn btn-success\" role=\"button\" id=\"" + temp_id + "\">"
                    + channel['name']
                    + "</a>"
                );
                $("#" + temp_id).bind("click", window.TEController.action_remove_channel);
            }
            else {
                $(window.TEIDS.CHANNEL_UNSELECTED).append(
                    "<a class=\"btn btn-default\" role=\"button\" id=\"" + temp_id + "\">"
                    + channel['name']
                    + "</a>"
                );
                $("#" + temp_id).bind("click", window.TEController.action_select_channel);
            }
        });
    };

    /**
     * Set timer;
     */
    window.TEController.action_set_timer = function () {
        var count = 60;
        document.getElementById("id-timer").innerHTML = "1:00";
        if (window.timer_interval) {
            window.clearInterval(window.timer_interval);
        }
        window.timer_interval = window.setInterval(function(){
            count -= 1;
            var min = parseInt(count/60);
            var sec = count % 60;
            document.getElementById("id-timer").innerHTML = min + ":" + sec;
            //
            if (count == 0) {
                window.timer_interval = window.clearInterval(window.timer_interval);
            }
        }, 1000);
    };

    window.TEController.action_select_channel = function () {
        //
        $(this).addClass("btn-success");
        $(this).removeClass("btn-default");
        //
        $(this).remove();
        $(window.TEIDS.CHANNEL_SELECTED).append($(this));
        //
        $(this).unbind("click", window.TEController.action_select_channel);
        $(this).bind("click", window.TEController.action_remove_channel);
    };

    window.TEController.action_remove_channel = function () {
        //
        $(this).removeClass("btn-success");
        $(this).addClass("btn-default");
        //
        $(this).remove();
        $(window.TEIDS.CHANNEL_UNSELECTED).append($(this));
        //
        $(this).unbind("click", window.TEController.action_remove_channel);
        $(this).bind("click", window.TEController.action_select_channel);
    };

})();
