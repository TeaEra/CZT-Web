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
        window.TEController.action_refresh(
            mid, 
            window.TEController.action_success_after_refresh
        );
        //
        // Step 3. set timer;
        window.TEController.action_set_timer(
            window.objs.timer_min, 
            window.objs.timer_sec
        );
        //
        // Step 4. add event to button 'refresh';
        $(window.TEIDS.BTN_REFRESH).bind("click", function () {
            //
            // every time or should exclude the first login?
            window.TEController.action_api_channel(
                window.TEController.action_success_after_api_channel
            );
            //
            window.TEController.action_refresh(
                window.localStorage.getItem('mid'), 
                window.TEController.action_success_after_refresh
            );
        });
        //
        // Step 5. add event to button 'logout';
        $(window.TEIDS.BTN_LOGOUT).bind("click", function () {
            window.TEController.action_logout();
        });
        //
        // Step 6. add event to button 'scroll-top';
        $(window).scroll(function () {
            if ($(this).scrollTop() >= window.screen.availHeight/3) {
                $(window.TEIDS.BTN_SCROLL_TOP).fadeIn();
            }
            else {
                $(window.TEIDS.BTN_SCROLL_TOP).fadeOut();
            }
        });
        $(window.TEIDS.BTN_SCROLL_TOP).bind("click", function () {
            window.TEController.action_scroll_top();
        });
        // Step 7. load user info;
        $(window.TEIDS.LABEL_USER).bind("click", function () {
            window.open("user.html", "_blank");
        });
    };

    /**
     * [channel]
     * Getter:
     *   request data for actin_api_channel;
     */
    window.TEController.get_request_data_for_channel = function () {
        var mid = window.localStorage.getItem('mid');
        var channel_list = window.TEController.get_joined_channels(
            window.TEController.get_selected_channels()
        );
        return "mid=" + mid + "&channel_list=" + channel_list;
    };

    /**
     * [channel]
     * Action:
     *   success action after action_api_channel;
     */
    window.TEController.action_success_after_api_channel = function (data) {
        console.log("API_CHANNEL");
    };

    /**
     * [channel]
     * API:
     *   ajax call api 'cgi-bin/api_channel.py';
     */
    window.TEController.action_api_channel = function (success_function) {
        //
        $.ajax({
            url: "cgi-bin/api_channel.py",
            type: "post",
            data: window.TEController.get_request_data_for_channel(),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_function(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * [data]
     * Action:
     *   success action after action_refresh;
     */
    window.TEController.action_success_after_refresh = function (data) {
        var json_data = JSON.parse(data)["result"];
        if (! ('error' in json_data)) {
            var channels = json_data["channel_list"];
            var articles = json_data["article_list"];
            //
            // Save data to window.objs
            window.objs.channels = channels;
            window.objs.articles = articles;
            //
            window.TEController.action_process_channels(channels);
            window.TEController.action_process_articles(articles);
            //
            window.TEController.action_process_verify_status();
            //
            $(window.TEIDS.BTN_REFRESH).disabled = false;
            //
            window.TEController.action_set_timer(window.objs.timer_min, window.objs.timer_sec);
        }
        else {
            alert(data['error']);
        }
    };


    /**
     * Action:
     *   get selected channels;
     */
    window.TEController.get_joined_selected_channels = function () {
    };

    /**
     * [data]
     * Action:
     *   event for button 'refresh';
     * API:
     *   ajax call api 'cgi-bin/api_data.py';
     */
    window.TEController.action_refresh = function (mid, success_function) {
        console.log(">>> Refresh starts:");
        $(window.TEIDS.BTN_REFRESH).disabled = true;
        $.ajax({
            url: "cgi-bin/api_data.py",
            type: "post",
            /*contentType: "multipart/form-data",*/
            //data: "mid=" + mid,
            data: "mid=" + mid + "&channel_list=" 
                + window.TEController.get_joined_channels(
                    window.TEController.get_selected_channels()
                ),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_function(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Action:
     *   show articles;
     */
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
                for (var keyword_idx in keyword_list) {
                    keyword_html += "<p><label class=\"label label-default\">" + keyword_list[keyword_idx] + "</label></p>"
                }
            }
            var img = article['img_list'][0] || "";
            var reason = article['tag'];
            var reason_name = window.TEController.get_tag_name(reason) ? window.TEController.get_tag_name(reason) : "";
            var is_favored = (reason === 3);
            var new_reason_field = article['reason'];
            content += "<tr>"
                + "<td class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"><a target=\"_blank\" href=\"" + link + "\" id=\"btn-read-" + idx + "\">" + title + "</a></td>"
                + "<td class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">" + category + "</td>"
                + "<td class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"><img class=\"col-xs-12 img-responsive img-thumbnail\" src=\"" + img + "\" /></td>"
                + "<td class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">" + keyword_html + "</td>"
                + "<td class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\"><p class=\"break-word label label-default\">" + new_reason_field + "</p></td>"
                + "<td class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\"><p id=\"id-index-article-readnum-" + idx + "\" class=\"break-word label label-warning\">" + "通过（未完成）" +  "</p></td>"
                + "<td class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\"><p id=\"id-index-article-is-public-" + idx + "\" class=\"break-word label label-info\">" + "通过（未完成）" +  "</p></td>"
                + "<td class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">" 
                + (is_favored ? "<p><a class=\"btn btn-default \" id=\"btn-favor-" + idx + "\" disabled=\"disabled\">已收藏</a></p>" : "<p><a class=\"btn btn-primary\" id=\"btn-favor-" + idx + "\">收藏</a></p>")
                + "<p><a class=\"btn btn-primary\" id=\"btn-share-" + idx + "\">分享</a></p>"
                + "<p><a class=\"btn btn-primary\" id=\"btn-unlike-" + idx + "\">不感兴趣</a></p>"
                + "</td>"
                + "</tr>";
        }
        container.html(content);
        //
        for (var idx in articles) {
            //
            $("#btn-read-" + idx).bind("click", window.TEController.action_read_article);
            $("#btn-favor-" + idx).bind("click", window.TEController.action_favor_article);
            $("#btn-share-" + idx).bind("click", window.TEController.action_share_article);
            $("#btn-unlike-" + idx).bind("click", window.TEController.action_unlike_article);
        }
    };

    /**
     * Action:
     *   show channel tags;
     */
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
     * Action:
     *   get 'verify' status;
     */
    window.TEController.action_process_verify_status = function () {
        var array_url = Array();
        for (var idx in window.objs.articles) {
            array_url.push(window.objs.articles[idx]['link']);
        }
        window.TEController.action_api_pymongo_article(
            array_url, 
            window.TEController.action_index_pymongo_article_success
        );
    };


    /**
     * Action:
     */
    window.TEController.action_index_pymongo_article_success = function (data) {
        //
        var curr_all_articles = data['articles'];
        console.log(curr_all_articles);
        //
        //id-index-article-is-public-
        for (var idx in curr_all_articles) {
            var curr_article = curr_all_articles[idx];
            if ('is_public' in curr_article) {
                $("#id-index-article-is-public-" + idx).html(
                    curr_article['is_public'] ? "通过审核" : "未通过"
                );
            }
            else {
                $("#id-index-article-is-public-" + idx).html("未审核");
            }
            //
            if ('read_num' in curr_article) {
                $("#id-index-article-readnum-" + idx).html(
                    curr_article['read_num']
                );
            }
            else {
                $("#id-index-article-readnum-" + idx).html("");
            }
        }
    };

    /**
     * Set timer;
     */
    window.TEController.action_set_timer = function (timer_min, timer_sec) {
        var count = 60 * timer_min + timer_sec;
        document.getElementById("id-timer").innerHTML = timer_min + ":" + timer_sec;
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

    /**
     * Action:
     *   select channel tag;
     */
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
        //
        // Update data in windows.objs
        var curr_idx = $(this).prop("id").split("id-channel-")[1];
        window.objs.channels[parseInt(curr_idx)]["selected"] = 1;
    };

    /**
     * Action:
     *   remove channel tag;
     */
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
        //
        // Update data in windows.objs
        var curr_idx = $(this).prop("id").split("id-channel-")[1];
        window.objs.channels[parseInt(curr_idx)]["selected"] = 0;
    };

    /**
     * Action:
     *   get all selected channels from window.objs.channels
     */
    window.TEController.get_selected_channels = function () {
        return _.filter(window.objs.channels, function (channel) {
            return channel["selected"] == 1;
        });
    };

    /**
     * Action:
     *   get all unselected channels from window.objs.channels
     */
    window.TEController.get_unselected_channels = function () {
        return _.filter(window.objs.channels, function (channel) {
            return channel["selected"] == 0;
        });
    };

    /**
     * Action:
     *   join the channels to string;
     */
    window.TEController.get_joined_channels = function (channels) {
        var res = "";
        if ((!channels) || channels.length === 0) {
            return "推荐";
        }
        for (var idx in channels) {
            var curr_channel = channels[idx];
            res += curr_channel["name"] + "|";
        }
        return res.substring(0, res.length-1);
    };
    
    /**
     * Action:
     *   event for button 'read';
     */
    window.TEController.action_read_article = function () {
        var curr_idx = parseInt($(this).prop("id").split("btn-read-")[1]);
        //
        var action = 6;  // 6 for read
        window.TEController.action_api_useract(
            window.objs.articles[curr_idx], 
            action,
            window.TEController.action_success_after_api_useract
        );
    };
    
    /**
     * Action:
     *   event for button 'favor';
     */
    window.TEController.action_favor_article = function () {
        var curr_idx = parseInt($(this).prop("id").split("btn-favor-")[1]);
        //
        var action = 3;  // 3 for favor
        window.TEController.action_api_useract(
            window.objs.articles[curr_idx], 
            action,
            window.TEController.action_success_after_api_useract
        );
        //
        $(this).attr("disabled", true);
    };
    
    /**
     * Action:
     *   event for button 'share';
     */
    window.TEController.action_share_article = function () {
        var curr_idx = parseInt($(this).prop("id").split("btn-share-")[1]);
        //
        var action = 5;  // 5 for share
        window.TEController.action_api_useract(
            window.objs.articles[curr_idx], 
            action,
            window.TEController.action_success_after_api_useract
        );
    };
    
    /**
     * Action:
     *   event for button 'unlike';
     */
    window.TEController.action_unlike_article = function () {
        var curr_idx = parseInt($(this).prop("id").split("btn-unlike-")[1]);
        //
        var action = 4;  // 4 for unlike;
        window.TEController.action_api_useract(
            window.objs.articles[curr_idx], 
            action,
            window.TEController.action_success_after_api_useract
        );
        //
        //
        $(this).attr("disabled", true);
    };

    /**
     * [useract]
     * Getter:
     *   request data for action_api_useract;
     */
    window.TEController.get_request_data_for_useract = function (article, action) {
        //
        var mid = window.localStorage.getItem('mid');
        var action = action;  //
        var link = article['link'];
        var title = article['title'];
        var appendix = article['appendix'];
        var channel = appendix.split('|')[0] || "|";
        var img_list = article['img_list'];
        var pub_source = article['pub_source'];
        //
        var req_data = "";
        req_data += "mid=" + mid;
        req_data += "&action=" + action;
        req_data += "&link=" + encodeURIComponent(link);
        req_data += "&title=" + title;
        req_data += "&channel=" + channel;
        req_data += "&pub_source=" + pub_source;
        req_data += "&appendix=" + appendix;
        for (var idx in img_list) {
            req_data += "&img=" + encodeURIComponent(img_list[idx]);
        }/**/
        return req_data;
    };

    /**
     * [useract]
     * Action:
     *   success action after action_api_useract;
     */
    window.TEController.action_success_after_api_useract = function (data, action) {
        //
        if (action === 5) {
            alert(window.TEController.get_action_name(action) + " done");
        }
        console.log(window.TEController.get_action_name(action) + " done");
    };

    /**
     * [useract]
     * API:
     *   ajax call api 'cgi-bin/api_useract.py';
     */
    window.TEController.action_api_useract = function (article, action, success_function) {
        $.ajax({
            url: "cgi-bin/api_useract.py",
            type: "post",
            data: window.TEController.get_request_data_for_useract(article, action), 
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_function(data, action);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Mapper
     */
    window.TEController.get_action_name = function (action) {
        if (action === 3) {
            return "收藏(favor)";
        }
        else if (action === 4) {
            return "不感兴趣(unlike)";
        }
        else if (action === 5) {
            return "分享(share)";
        }
        else if (action === 6) {
            return "已阅读(read)";
        }
        return "";
    };
    
    /**
     * Mapper
     */
    window.TEController.get_tag_name = function (tag) {
        if (tag === 1) {
            return "热门";
        }
        else if (tag === 2) {
            return "推荐";
        }
        else if (tag === 3) {
            return "已收藏";
        }
        return null;
    };

    /**
     * Action:
     *   log out 'mid', then jump to the login page;
     */
    window.TEController.action_logout = function () {
        window.localStorage.removeItem('mid');
        // ???
        window.location.href = 'http://10.11.206.38:8000/';
    };

    /**
     * Action:
     *   action for add_scroll_top_effect;
     */
    window.TEController.action_scroll_top = function () {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    };

    /**
     * Effect:
     *   scroll to top;
     */
    window.TEController.add_scroll_top_effect = function () {
        //
        $(window).scroll(function () {
            if ($(this).scrollTop() >= window.screen.availHeight/3) {
                $(window.TEIDS.BTN_SCROLL_TOP).fadeIn();
            }
            else {
                $(window.TEIDS.BTN_SCROLL_TOP).fadeOut();
            }
        });
        $(window.TEIDS.BTN_SCROLL_TOP).bind("click", window.TEController.action_scroll_top);
    };

    /**
     * Effect:
     *   loading while ajax call;
     */
    window.TEController.add_loading_effect = function () {
        //
        // Spin settings;
        var opts = {
          lines: 13, // The number of lines to draw
          length: 20, // The length of each line
          width: 10, // The line thickness
          radius: 30, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: '#000', // #rgb or #rrggbb or array of colors
          speed: 1, // Rounds per second
          trail: 60, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: '50%', // Top position relative to parent
          left: '50%' // Left position relative to parent
        };
        var spin_target = document.getElementsByTagName('body')[0];
        var spinner = new Spinner(opts);
        // 
        // Add ajax loading effect;
        $(document).on({
            ajaxStart: function() {
                $("#id-div-mask").addClass("display-block");
                spinner.spin(spin_target);
            },
            ajaxStop: function() {
                spinner.spin();
                $("#id-div-mask").removeClass("display-block");
            }    
        });
    };

    /*************************************************************************/

    /**
     * [mongodb - user_info]
     * API:
     *   ajax call 'cgi-bin/api_pymongo_user_info.py';
     */
    window.TEController.action_api_user_info = function () {
        $.ajax({
            url: "cgi-bin/api_pymongo_user_info.py",
            type: "post",
            data: "mid=" + window.localStorage.getItem('mid'),
            dataType: "json",
            success: function (data, status, jqxhr) {
                window.objs.user_info = data;
                //
                $(window.TEIDS.USER_BTN_CLICK).click();
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Action:
     *   load 'user.html';
     */
    window.TEController.action_show_user_info = function () {
        //
        $(window.TEIDS.USER_MAIN_CONTENT).html(
            window.TETemplate.tpl_user_init()
        );
        //
        window.TEController.add_scroll_top_effect();
        //
        $(window.TEIDS.USER_BTN_CLICK).bind(
            "click", 
            window.TEController.action_user_tab
        );
        $(window.TEIDS.USER_BTN_FAVOR).bind(
            "click", 
            window.TEController.action_user_tab
        );
        $(window.TEIDS.USER_BTN_CHANNEL).bind(
            "click", 
            window.TEController.action_user_tab
        );
        $(window.TEIDS.USER_BTN_RELOAD).bind(
            "click", 
            window.TEController.action_api_user_info
        );
        //
        window.TEController.action_api_user_info();
    };

    /**
     * Action:
     *   select tab-buttons in 'user.html';
     *
     */
    window.TEController.action_user_tab = function() {
        var active_class = "btn-danger";
        var inactive_class = "btn-default";
        //
        $(window.objs.user_curr_btn).removeClass(active_class);
        $(window.objs.user_curr_btn).addClass(inactive_class);
        //
        $(this).removeClass(inactive_class);
        $(this).addClass(active_class);
        //
        window.objs.user_curr_btn = "#" + $(this).prop("id");
        //
        window.TEController.action_show_content_list();
    };

    /**
     * Action:
     *   event for buttons in 'user.html' to control content list;
     */
    window.TEController.action_show_content_list = function () {
        var tab = window.objs.user_curr_btn.split("#id-user-btn-")[1];
        //
        if (tab === "click") {
            $(window.TEIDS.USER_CONTENT_LIST).html(
                window.TETemplate.tpl_click_list(
                    window.objs.user_info['click_list']
                )
            );
        }
        else if (tab === "favor") {
            $(window.TEIDS.USER_CONTENT_LIST).html(
                window.TETemplate.tpl_favor_list(
                    window.objs.user_info['favor_list']
                )
            );
        }
        else if (tab === "channel") {
            $(window.TEIDS.USER_CONTENT_LIST).html(
                window.TETemplate.tpl_channel_list(
                    window.objs.user_info['selected_channels']
                )
            );
        }
    };

    /**
     */
    window.TEController.action_show_click_list = function () {
        //
        var click_list = window.objs.user_info['click_list'];
        var url_array  = new Array();
        for (var click_list_idx in click_list) {
            var curr_click = click_list[click_list_idx];
            url_array.push(curr_click['url']);
        }
    };

    /**************************************************************************/
    
    // TODO: for potential common use
    window.TEController.get_joined_urls = function (array_urls, key_word) {
        var key_word = key_word || "url";
        var joined_urls = "";
        for (var idx in array_urls) {
            joined_urls += key_word + "=" + encodeURIComponent(array_urls[idx]) + "&";
        }
        return joined_urls.substring(0, joined_urls.length-1);
    };

    /**
     * Action:
     */
    window.TEController.action_umis_show_articles = function (articles) {
        $(window.TEIDS.UMIS_ARTICLE_LIST).html(
            window.TETemplate.tpl_umis_article_list(articles)
        );
    };

    /**
     * [mongodb - weixin_articles]
     * API:
     *   ajax call api 'cgi-bin/api_pymongo_article.py';
     */
    window.TEController.action_api_pymongo_article = function (array_urls, success_function) {
        $.ajax({
            url: "cgi-bin/api_pymongo_article.py",
            type: "post",
            data: window.TEController.get_joined_urls(array_urls),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_function(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * [umis]
     * Action:
     *   success action after api_umis;
     */
    window.TEController.action_success_after_api_umis = function (data) {
        //console.log(data);
        //
        window.objs.umis_articles = data['articles'];
        window.TEController.action_umis_show_articles(data['articles']);
        //
        // Bind events;
        window.TEController.action_umis_bind_pass_and_reject();
    };

    /**
     * [umis]
     * API:
     *   ajax call api 'cgi-bin/api_umis.py';
     */
    window.TEController.action_api_umis = function (channel) {
        $.ajax({
            url: "cgi-bin/api_umis.py",
            type: "post",
            data: "channel=" + channel,
            dataType: "json",
            success: function (data, status, jqxhr) {
                window.objs.umis_data = JSON.parse(data);
                //
                // API
                window.TEController.action_api_pymongo_article(
                    window.objs.umis_data[channel], 
                    window.TEController.action_success_after_api_umis
                );
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Action:
     */
    window.TEController.action_init_umis_header_part = function () {
        $(window.TEIDS.UMIS_MAIN_CONTENT).html(
            window.TETemplate.tpl_umis_header_part(
                window.objs.CATEGORIES
            )
        );
    };

    /**
     * Action:
     */
    window.TEController.action_umis_btn_channel = function () {
        //
        var channel = $(this).html().trim();
        console.log(channel);
        var id = $(this).prop("id");
        console.log(id);
        //
        $(window.objs.umis_curr_btn).removeClass("btn-danger");
        $(window.objs.umis_curr_btn).addClass("btn-default");
        //
        $(this).removeClass("btn-default");
        $(this).addClass("btn-danger");
        //
        window.objs.umis_curr_btn = "#" + id;
        //
        // API
        window.TEController.action_api_umis(channel);
    };

    /** 
     * Action:
     */
    window.TEController.action_init_umis = function () {
        //
        // Step 1.
        window.TEController.action_init_umis_header_part();
        //
        // Step 2.
        _.forEach($('button[id^="id-umis-btn-channel-"]'), function (each_button) {
            $(each_button).bind("click", window.TEController.action_umis_btn_channel);
        });
        //
        // Step 3.
        $("#id-umis-category-0").click();
        // Step 4.
        window.TEController.add_scroll_top_effect();
    };

    /** 
     * Action:
     *   bind event to buttons: 'pass' and 'reject';
     */
    window.TEController.action_umis_bind_pass_and_reject = function () {
        //
        _.forEach($('a[id^="id-umis-btn-pass-"]'), function (each_pass) {
            $(each_pass).bind("click", window.TEController.action_umis_pass_verify);
        });
        //
        _.forEach($('a[id^="id-umis-btn-reject-"]'), function (each_reject) {
            $(each_reject).bind("click", window.TEController.action_umis_reject_verify);
        });
    };

    /**
     * Action:
     *   for button 'pass';
     */
    window.TEController.action_umis_pass_verify = function () {
        //
        var idx = $(this).prop("id").split("id-umis-btn-pass-")[1];
        var curr_url = window.objs.umis_articles[parseInt(idx)]['url'];
        console.log(curr_url);
        //
        window.TEController.action_api_pymongo_article_verify(
            curr_url, "True", idx,
            window.TEController.action_success_after_api_pymongo_article_verify
        );
    };

    /**
     * Action:
     *   for button 'reject';
     */
    window.TEController.action_umis_reject_verify = function () {
        //
        var idx = $(this).prop("id").split("id-umis-btn-reject-")[1];
        var curr_url = window.objs.umis_articles[parseInt(idx)]['url'];
        console.log(curr_url);
        //
        window.TEController.action_api_pymongo_article_verify(
            curr_url, "False", idx,
            window.TEController.action_success_after_api_pymongo_article_verify
        );
    };

    /**
     * [mongodb - weixin_articles - verify]
     * Action:
     *   success action after action_api_pymongo_article_verify;
     */
    window.TEController.action_success_after_api_pymongo_article_verify 
            = function (data, verify_res, idx) {
        console.log(data);
        window.TEController.action_umis_refresh_is_public(verify_res, idx);
    };

    /**
     * [mongodb - weixin_articles - verify]
     * API:
     *
     */
    window.TEController.action_api_pymongo_article_verify 
            = function (url, verify_res, idx, success_function) {
        $.ajax({
            url: "cgi-bin/api_pymongo_article_verify.py",
            type: "post",
            //data: "url=" + encodeURIComponent(url) + "&verify_res=" + verify_res,
            data: "url=" + encodeURIComponent(window.TEController.special_process_for_url(url)) + "&verify_res=" + verify_res,
            dataType: "json",
            success: function(data, status, jqxhr) {
                success_function(data, verify_res, idx);
            },
            error: function(jqxhr, status, error){
                alert(error);
            }
        });
    };

    /**
     * Action:
     *   very ugly solution!!!
     */
    window.TEController.special_process_for_url = function (url) {
        return url.replace(/&/g, "______");
    };

    /**
     * Action:
     *   refresh verify status after pass/reject;
     */
    window.TEController.action_umis_refresh_is_public = function (verify_res, idx) {
        $("#id-umis-label-is-public-" + idx).html(
            verify_res == "True" ? "通过审核" : "未通过"
        );
    };

})();
