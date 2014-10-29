/**
 * Created by chenzhengtong on 2014/10/17.
 */

(function () {

    "use strict";

    window.TETemplate = window.TETemplate || {};


    window.TETemplate.tpl_main_content = _.template('\
    <%\
        var mid = window.localStorage.getItem("mid");\
    %>\
    <!-- nav bar -->\
    <nav class="navbar navbar-default navbar-fixed-top">\
        <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <label class="label label-info" id="id-label-user">用户名：<%=mid%></label>\
            <label class="label label-danger">刷新倒计时：<span id="id-timer"></span></label>\
            <span class="pull-right">\
                <a class="btn btn-danger btn-sm" id="id-btn-logout">退出此次登录</a>\
            <span>\
        </div>\
        </div>\
    </nav>\
    <!--  -->\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <p>\
                    冷启：\
                        <span id="id-channel-selected">\
                            <a class="btn btn-success" role="button">A</a>\
                            <a class="btn btn-primary" role="button">B</a>\
                            <a class="btn btn-danger" role="button">C</a>\
                            <a class="btn btn-default" role="button">D</a>\
                            <a class="btn btn-default" role="button">E</a>\
                            <a class="btn btn-default" role="button">F</a>\
                            <a class="btn btn-default" role="button">G</a>\
                            <a class="btn btn-default" role="button">H</a>\
                            <a class="btn btn-default" role="button">I</a>\
                            <a class="btn btn-default" role="button">J</a>\
                            <a class="btn btn-default" role="button">K</a>\
                            <a class="btn btn-default" role="button">L</a>\
                            <a class="btn btn-default" role="button">M</a>\
                            <a class="btn btn-default" role="button">N</a>\
                        </span>\
                    </p>\
                    <p>\
                    补充：\
                        <span id="id-channel-unselected">\
                            <a class="btn btn-default" role="button">a</a>\
                            <a class="btn btn-default" role="button">b</a>\
                            <a class="btn btn-default" role="button">c</a>\
                            <a class="btn btn-default" role="button">d</a>\
                            <a class="btn btn-default" role="button">e</a>\
                            <a class="btn btn-default" role="button">f</a>\
                            <a class="btn btn-default" role="button">g</a>\
                            <a class="btn btn-default" role="button">h</a>\
                            <a class="btn btn-default" role="button">i</a>\
                            <a class="btn btn-default" role="button">j</a>\
                            <a class="btn btn-default" role="button">k</a>\
                            <a class="btn btn-default" role="button">l</a>\
                            <a class="btn btn-default" role="button">m</a>\
                            <a class="btn btn-default" role="button">n</a>\
                        </span>\
                    </p>\
                    <hr />\
                    <p>\
                        <a class="btn btn-primary" role="button" id="id-btn-refresh">刷新</a>\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="table-responsive">\
                <table class="table table-fixed-layout">\
                    <thead>\
                        <tr>\
                            <td>标题</td>\
                            <td>类别</td>\
                            <td>图片</td>\
                            <td>关键词</td>\
                            <td>理由</td>\
                            <td>阅读数</td>\
                            <td>二次审核</td>\
                            <td>操作</td>\
                        </tr>\
                    </thead>\
                    <tbody id="id-article-list">\
                        \
                    </tbody>\
                </table>\
            </div>\
        </div>\
    </div>\
    <!-- -->\
    <div id="id-btn-scroll-top" class="scroll-top">\
        <i class="glyphicon glyphicon-chevron-up"></i>\
    </div>\
    ');

    window.TETemplate.tpl_init = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <fieldset>\
                        <div class="form-group">\
                            <input class="form-control" placeholder="MID" id="id-input-mid" type="text">\
                        </div>\
                        <input class="btn btn-lg btn-success btn-block" type="submit" value="LOGIN" \
                        id="id-btn-login">\
                    </fieldset>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplate.tpl_user_init = _.template('\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="btn-group">\
                <button class="btn btn-primary btn-lg" id="id-user-btn-reload">刷新数据</button>\
            </div>\
            <br />\
            <br />\
            <div class="text-center">\
                <div class="btn-group">\
                    <button class="btn btn-danger" id="id-user-btn-click">阅读列表</button>\
                    <button class="btn btn-default" id="id-user-btn-favor">收藏列表</button>\
                    <button class="btn btn-default" id="id-user-btn-channel">已选频道</button>\
                </div>\
            </div>\
        </div>\
    </div>\
    <br />\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="id-user-content-list">\
        </div>\
    </div>\
    <!-- -->\
    <div id="id-btn-scroll-top" class="scroll-top">\
        <i class="glyphicon glyphicon-chevron-up"></i>\
    </div>\
    ');

    window.TETemplate.tpl_click_list = _.template('\
    <%\
    var click_list = arguments[0];\
    for (var idx in click_list) {\
        var each_click = click_list[idx];\
        var url = each_click["url"];\
        var type = each_click["type"] || "";\
        var topic_keywords = each_click["topic_keywords"];\
    %>\
        <div class="row">\
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                <p style="word-wrap: break-word;">\
                    <a href="<%=url %>" target="_blank"><%=url %></a>\
                </p>\
            </div>\
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><%=type %></div>\
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
            <% for (var topic_idx in topic_keywords) { %>\
                <p><span class="label label-default"><%=topic_keywords[topic_idx] %></span></p>\
            <% } %>\
            </div>\
        </div>\
    <%\
        if (idx != click_list.length -1) {\
    %>\
            <hr />\
    <%\
        }\
    }\
    %>\
    ');

    window.TETemplate.tpl_favor_list = _.template('\
    <%\
    var favor_list = arguments[0];\
    for (var idx in favor_list) {\
        var each_favor = favor_list[idx];\
        var favor_time = each_favor["favor_time"];\
        var img_list = each_favor["img_list"];\
        var link = each_favor["link"];\
        var pub_channel = each_favor["pub_channel"];\
        var pub_source = each_favor["pub_source"];\
        var title = each_favor["title"];\
    %>\
        <div class="row">\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p class="break-word">\
                    <a href="<%=link %>" target="_blank"><%=title %></a>\
                </p>\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p class="break-word"><%=pub_source %></p>\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p class="break-word"><%=pub_channel %></p>\
            </div>\
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                <img class="img-responsive img-thumbnail" src="<%=img_list %>" />\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p class="break-word"><%=new Date(favor_time) %></p>\
            </div>\
        </div>\
    <%\
    }\
    %>\
    ');

    window.TETemplate.tpl_channel_list = _.template('\
    <h3>已选择频道:</h3>\
    <div>\
        <div style="display: inline; font-size: 2em;">\
            <span class="label label-default" style="padding-left: 1.05em; padding-right: 1.05em;">推荐</span>&nbsp;&nbsp;\
        </div>\
    <%\
    var channel_list = arguments[0];\
    for (var idx in channel_list) {\
        var each_channel = channel_list[idx];\
    %>\
        <div style="display: inline; font-size: 2em;">\
            <span class="label label-success"><%=each_channel %></span>&nbsp;&nbsp;\
        </div>\
    <%\
    }\
    %>\
    </div>\
    ');

    window.TETemplate.tpl_umis_header_part = _.template('\
    <%\
    var all_categories = arguments[0];\
    var category_list = Array();\
    var channels_list = Array();\
    for (var idx in all_categories) {\
        var curr_category = all_categories[idx];\
        category_list.push(curr_category["category"]);\
        channels_list.push(curr_category["channels"]);\
    }\
    %>\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <!-- nav tabs -->\
            <ul class="nav nav-tabs" role="tablist">\
            <%\
            for (var idx in category_list) {\
            %>\
                <li><a id="id-umis-category-<%=idx %>" href="#id-umis-channels-<%=idx %>" role="tab" data-toggle="tab">\
                <%=category_list[idx] %>\
                </a></li>\
            <%\
            }\
            %>\
            </ul>\
            <br />\
            <!-- tab panes -->\
            <div class="tab-content">\
            <%\
            var curr_channel_idx = 0;\
            for (var idx in channels_list) {\
                var channels = channels_list[idx];\
            %>\
                <div class="tab-pane" id="id-umis-channels-<%=idx %>">\
                    <div class="btn-group">\
                    <%\
                    for (var channel_idx in channels) {\
                        var curr_channel = channels[channel_idx];\
                    %>\
                        <button class="btn btn-default" id="id-umis-btn-channel-<%=curr_channel_idx %>">\
                            <%=curr_channel %>\
                        </button>\
                    <%\
                        curr_channel_idx += 1;\
                    }\
                    %>\
                    </div>\
                </div>\
            <%\
            }\
            %>\
            </div>\
        </div>\
    </div>\
    <!-- -->\
    <br />\
    <br />\
    <div class="container" id="id-umis-article-list">\
    </div>\
    <!-- -->\
    <div id="id-btn-scroll-top" class="scroll-top">\
        <i class="glyphicon glyphicon-chevron-up"></i>\
    </div>\
    ');
    
    window.TETemplate.tpl_umis_article_list = _.template('\
    <%\
    var articles = arguments[0];\
    %>\
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
        <div class="row">\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            标题\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            账号\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            阅读数\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            图片\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            主题词\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            状态\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            二次审核\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            操作\
            </div>\
        </div>\
    <%\
    for (var idx in articles) {\
        var article = articles[idx];\
        if ($.isEmptyObject(article)) {continue;}\
        var title = article["title"];\
        var link = article["url"];\
        var topic1 = article["topic1"];\
        var topic2 = article["topic2"];\
        var topic3 = article["topic3"];\
        var topic_list = Array();\
        topic1 ? topic_list.push(topic1) : topic1;\
        topic2 ? topic_list.push(topic2) : topic2;\
        topic3 ? topic_list.push(topic3) : topic3;\
        var account = article["account"];\
        var img_list = article["img_list"];\
        var img_url = img_list && img_list.length>0 ? img_list[0] : "";\
        var read_num = article["read_num"];\
        var status = article["status"];\
        var is_public;\
        if ("is_public" in article) {\
            is_public = article["is_public"] ? "通过审核" : "未通过";\
        }\
        else {\
            is_public = "未审核";\
        }\
    %>\
        <hr />\
        <div class="row">\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <a href="<%=link %>" target="_blank"><%=title %></a>\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                <p class="text-center break-word"><%=account %></p>\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p><span class="label label-warning"><%=read_num %></span></p>\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <img class="img-responsive img-thumbnail" src="<%=img_url %>" />\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                <%\
                for (var topic_idx in topic_list) {\
                %>\
                    <p><span class="label label-default"><%=topic_list[topic_idx] %></span></p>\
                <%\
                }\
                %>\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                <p><span class="label label-default"><%=status %></span></p>\
            </div>\
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                <p><span class="label label-info" id="id-umis-label-is-public-<%=idx %>"><%=is_public %></span></p>\
            </div>\
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                <p><a class="btn btn-primary" id="id-umis-btn-pass-<%=idx %>" data-article-link="<%=link%>">通过</a></p>\
                <p><a class="btn btn-danger" id="id-umis-btn-reject-<%=idx %>" data-article-link="<%=link%>">不通过</a></p>\
            </div>\
        </div>\
    <%\
    }\
    %>\
    </div>\
    ');
    
})();
