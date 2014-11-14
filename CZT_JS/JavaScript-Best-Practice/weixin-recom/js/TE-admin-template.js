/**
 * by chenzhengtong @ 2014.10.28
 */

(function () {
    "use strict";

    // namespace;
    window.TETemplate = window.TETemplate || {};

    //
    window.TETemplate.tpl_admin_navbar = _.template('\
    <!-- -->\
    <nav id="id-admin-navbar-nav" class="navbar navbar-default navbar-fixed-top" role="navigation">\
        <div class="container-fluid">\
            <!-- -->\
            <div class="navbar-header">\
                <button id="id-admin-collapsed-navbar" type="button" \
                        class="navbar-toggle collapsed" data-toggle="collapse" \
                        data-target="#id-admin-detailed-navbar">\
                    <span class="sr-only">Toggle navigation</span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                </button>\
            </div>\
            <!-- -->\
            <div class="collapse navbar-collapse" id="id-admin-detailed-navbar">\
                <ul class="nav navbar-nav">\
                    <li class="dropdown">\
                        <a href="javascript:void(0);" class="dropdown-toggle" \
                                data-toggle="dropdown">\
                                后台系统<span class="caret"></span>\
                        </a>\
                        <ul class="dropdown-menu" role="menu">\
                            <li id="id-admin-btn-verify"><a href="javascript:void(0);">审核管理</a></li>\
                            <li id="id-admin-btn-umis"><a href="javascript:void(0);">精品文章审核</a></li>\
                            <li id="id-admin-btn-category"><a href="javascript:void(0);">类别管理</a></li>\
                            <li id="id-admin-btn-topic-word"><a href="javascript:void(0);">主题词管理</a></li>\
                            <li id="id-admin-btn-key-word"><a href="javascript:void(0);">关键词管理</a></li>\
                            <li id="id-admin-btn-official-account"><a href="javascript:void(0);">公众账号管理</a></li>\
                        </ul>\
                    </li>\
                </ul>\
                <!-- -->\
                <ul class="nav navbar-nav navbar-right">\
                    <li id="id-admin-navbar-btn-inverse"><a href="javascript:void(0);">夜间导航栏</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
    ');

    //
    window.TETemplate.tpl_admin_verify_filter = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
            <!-- -->\
            <div class="row">\
                <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                    <ol class="breadcrumb">\
                        <li><a href="javascript:void(0);">后台系统</a></li>\
                        <li class="active">审核管理</li>\
                    </ol>\
                </div>\
            </div>\
            <div class="row">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h4 class="panel-title"><a id="id-admin-verify-filter-switch" data-toggle="collapse" href="#id-admin-verify-filter">条件查询</a></h4>\
                    </div>\
                    <div class="panel-collapse collapse" id="id-admin-verify-filter">\
                        <div class="panel-body">\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>类别:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <select id="id-admin-verify-filter-channel" class="form-control">\
                                    </select>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>发表时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-pub-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>发表时间结束点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-pub-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>首次审核:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <select id="id-admin-verify-filter-status" class="form-control">\
                                        <option value="-1">无要求</option>\
                                        <option value="0">未审核</option>\
                                        <option value="1">审核通过</option>\
                                        <option value="2">审核不通过</option>\
                                    </select>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>入后台时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-db-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>入后台时间结束点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-db-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>关键词:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-key-word" \
                                        class="form-control" placeholder="多个关键词请以 | 分割" type="text" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>审核时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-verify-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>审核时间结束点</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-verify-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>提交人:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-submitter" \
                                        class="form-control" placeholder="姓名" type="text" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>生效时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-enable-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>生效时间结束点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-enable-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-lg-offset-8 col-md-4 col-md-offset-8 col-sm-4 col-sm-offset-8 col-xs-4 col-xs-offset-8">\
                                    <label>失效时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-disable-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>失效时间结束点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-verify-filter-disable-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <hr />\
                            <div class="row">\
                                <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                                    <div class="btn-group">\
                                        <button type="submit" class="btn btn-default" id="id-admin-verify-filter-btn-reset" class="btn btn-default">恢复默认值</button>\
                                        <button type="submit" class="btn btn-primary" id="id-admin-verify-filter-btn-search" class="btn btn-default">开始查询</button>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplate.tpl_admin_verify_article_list = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
            <div class="row">\
                <div class="pull-left">\
                    <button id="id-admin-verify-btn-batch-verify" \
                        class="btn btn-default" data-toggle="modal" \
                        data-target="#id-admin-batch-verify-modal">\
                        批量审核\
                    </button>\
                    <!-- -->\
                    <div id="id-admin-batch-verify-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-batch-verify-modal-title" aria-hidden="true" >\
                        <div class="modal-dialog modal-md">\
                            <div class="modal-content">\
                                <div class="modal-header">\
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                                    <h4 class="modal-title" id="id-admin-batch-verify-modal-title">批量审核</h4>\
                                </div>\
                                <div class="modal-body">\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <label>已选择数量:</label>\
                                        </div>\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <p><span id="id-admin-verify-batch-verify-num">0</span></p>\
                                        </div>\
                                    </div>\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <label>首次审核:</label>\
                                        </div>\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <select id="id-admin-batch-verify-status" class="form-control">\
                                                <option value="0">未审核</option>\
                                                <option value="1">审核通过</option>\
                                                <option value="2">审核不通过</option>\
                                            </select>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="modal-footer">\
                                    <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                                    <button id="id-admin-batch-verify-commit" type="button" class="btn btn-primary">保存修改</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- -->\
                </div>\
                <div class="pull-right btn-group">\
                    <button id="id-admin-verify-btn-sync" class="btn btn-default">同步</button>\
                    <button id="id-admin-verify-btn-clean-out-dated" class="btn btn-default">清理过期数据</button>\
                </div>\
            </div>\
            <br />\
            <br />\
            <br />\
            <div class="row">\
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>账号</p>\
                </div>\
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
                    <p>标题</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>阅读数</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>类型</p>\
                </div>\
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
                    <p>快速审核</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>关键词</p>\
                </div>\
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                    <p>相同文章数</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>提交人</p>\
                </div>\
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                    <select id="id-admin-verify-select-time">\
                        <option value="0">发表时间</option>\
                        <option value="1">入后台时间</option>\
                        <option value="2">审核时间</option>\
                        <option value="3">生效时间</option>\
                        <option value="4">失效时间</option>\
                    </select>\
                    <!--<p>时间信息</p>-->\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>操作</p>\
                </div>\
            </div>\
            <div id="id-admin-verify-article-list-content">\
            </div>\
        </div>\
    </div>\
    ');
    
    window.TETemplate.tpl_admin_verify_article_list_content = _.template('\
    <!-- -->\
    <%\
    var channel_list = window.objs.types;\
    var articles = arguments[0];\
    for (var art_idx in articles) {\
        var curr_art = articles[art_idx];\
        var uni_id = String(curr_art["id"]);\
        var title = curr_art["title"];\
        var link = curr_art["url"];\
        var img = curr_art["img"];\
        var read_num = curr_art["read_num"];\
        var status = curr_art["status"];\
        var key_word_str = curr_art["keywords"] || "";\
        var key_word_list = key_word_str ? key_word_str.split("|") : new Array();\
        var same_num;\
        var submitter = curr_art["user"] ? curr_art["user"].split("@sogou-inc.com")[0]: "";\
        var channel = curr_art["topic1"] ? curr_art["topic1"] : "NULL";\
        var pub_time = new Date(curr_art["pub_time"]);\
        var pub_time_html = (!curr_art["pub_time"]) ? "" :\
            pub_time.getFullYear() + "-" + (pub_time.getMonth()+1) + "-" + pub_time.getDate();\
        var db_time = new Date(curr_art["create_time"]);\
        var db_time_html = (!curr_art["create_time"]) ? "" :\
            db_time.getFullYear() + "-" + (db_time.getMonth()+1) + "-" + db_time.getDate();\
        var verify_time = new Date(curr_art["modify_time"]);\
        var verify_time_html = (!curr_art["modify_time"]) ? "" :\
            verify_time.getFullYear() + "-" + (verify_time.getMonth()+1) + "-" + verify_time.getDate();\
        var enable_time = new Date(curr_art["start_time"]);\
        var enable_time_html = (!curr_art["start_time"]) ? "" :\
            enable_time.getFullYear() + "-" + (enable_time.getMonth()+1) + "-" + enable_time.getDate();\
        var disable_time = new Date(curr_art["end_time"]);\
        var disable_time_html = (!curr_art["end_time"]) ? "" :\
            disable_time.getFullYear() + "-" + (disable_time.getMonth()+1) + "-" + disable_time.getDate();\
        var account = curr_art["account"] || "";\
        var enable_time_local = window.TEController.get_val_for_dt_local(curr_art["start_time"]);\
        var disable_time_local = window.TEController.get_val_for_dt_local(curr_art["end_time"]);\
    %>\
    <hr />\
    <div class="row">\
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            <input id="id-admin-article-checkbox-<%=art_idx %>" type="checkbox" />\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><span><%=account%></span></p>\
        </div>\
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
            <a href="<%=link %>" target="_blank"><span id="id-admin-article-title-<%=art_idx %>"><%=title %></span><span class="hidden-span"><img class="img-responsive img-thumbnail" src="<%=img%>" alt="image here" /></span></a>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p class="label label-warning"><span id="id-admin-article-readnum-<%=art_idx %>"><%=read_num%></span></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p id="id-admin-article-channel-<%=art_idx %>" class="hover-hand" data-toggle="modal" data-target="#id-admin-channel-modal-<%=art_idx %>"><%=channel %></p>\
            <!-- -->\
            <div id="id-admin-channel-modal-<%=art_idx %>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-channel-modal-title" aria-hidden="true">\
                <div class="modal-dialog modal-md">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                            <h4 class="modal-title" id="id-admin-channel-modal-title">类别修改</h4>\
                        </div>\
                        <div class="modal-body">\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>标题:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <p><span id="id-admin-channel-modal-article-title-<%=art_idx %>"><%=title %></span><p>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>URL:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <a href="<%=link %>" target="_blank"><%=link.substring(0,30) %>...</a>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>类别:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <select id="id-admin-channel-modal-type-<%=art_idx %>" class="form-control">\
                                    <%\
                                    for (var channel_idx in channel_list) {\
                                    %>\
                                        <option value="<%=channel_list[channel_idx] %>" <%=(channel===channel_list[channel_idx]?"selected":"") %>><%=channel_list[channel_idx] %></option>\
                                    <%\
                                    }\
                                    %>\
                                    </select>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                            <button id="id-admin-channel-modal-commit-<%=art_idx %>" type="button" class="btn btn-primary">保存修改</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- -->\
        </div>\
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
            <select id="id-admin-article-status-<%=art_idx %>">\
                <option value="0" <%=(status===0?"selected":"")%>>未审核</option>\
                <option value="1" <%=(status===1?"selected":"")%>>审核通过</option>\
                <option value="2" <%=(status===2?"selected":"")%>>审核不通过</option>\
            </select>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <div id="id-admin-article-keyword-<%=art_idx %>" class="hover-hand" data-toggle="modal" data-target="#id-admin-keyword-modal-<%=art_idx %>">\
            <%\
            for (var key_word_idx in key_word_list) {\
            %>\
            <div class="te-padding-bottom">\
                <span class="label label-default">\
                    <%=key_word_list[key_word_idx] %>\
                </span>\
            </div>\
            <%\
            }\
            if (key_word_list.length === 0) {\
            %>\
                无\
            <%\
            }\
            %>\
            </div>\
            <!-- -->\
            <div id="id-admin-keyword-modal-<%=art_idx %>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-keyword-modal-title" aria-hidden="true">\
                <div class="modal-dialog modal-md">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                            <h4 class="modal-title" id="id-admin-keyword-modal-title">关键词修改</h4>\
                        </div>\
                        <div class="modal-body">\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>标题:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <p><span id="id-admin-keyword-modal-article-title-<%=art_idx %>"><%=title %></span><p>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>URL:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <a href="<%=link %>" target="_blank"><%=link.substring(0,30) %>...</a>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <label>关键词:</label>\
                                </div>\
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <input id="id-admin-keyword-modal-input-<%=art_idx %>" class="form-control" type="text" \
                                        placeholder="多个关键词请以 | 分割" value="<%=key_word_str %>" />\
                                </div>\
                            </div>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                            <button id="id-admin-keyword-modal-commit-<%=art_idx %>" type="button" class="btn btn-primary">保存修改</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- -->\
        </div>\
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            <a href="#">0</a>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=submitter %></p>\
        </div>\
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
            <div class="article-time">\
            <p class="article-time-init">\
                <span id="id-admin-article-time-title-<%=art_idx %>">发表时间</span>\
                <span class="pull-right" id="id-admin-article-time-span-<%=art_idx %>"><%=pub_time_html %></span>\
            <p>\
            <div class="article-time-hover">\
            <p>发表时间:<span class="pull-right"><%=pub_time_html %></span></p>\
            <p>入后台时间:<span class="pull-right"><%=db_time_html %></span></p>\
            <p>审核时间:<span class="pull-right"><%=verify_time_html %></span></p>\
            <p>生效时间:<span class="pull-right"><%=enable_time_html %></span></p>\
            <p>失效时间:<span class="pull-right"><%=disable_time_html %></span></p>\
            </div>\
            </div>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <button id="id-admin-article-btn-modify-<%=art_idx %>" data-toggle="modal" data-target="#id-admin-article-modal-<%=art_idx %>">修改</button>\
            <!-- -->\
            <div id="id-admin-article-modal-<%=art_idx %>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-modal-title" aria-hidden="true">\
                <div class="modal-dialog modal-lg">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                                <h4 class="modal-title" id="id-admin-modal-title">文章信息修改</h4>\
                        </div>\
                        <div class="modal-body">\
                            <div class="row">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">编号:</div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <p class="break-word" title="<%=uni_id %>"><%=uni_id%></p>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">URL:</div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <a class="break-word" href="<%=link %>" target="_blank" title="<%=link %>"><%=link.substring(0,30) %>...</a>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">账号:</div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <p><%=account %></p>\
                                </div>\
                            </div>\
                            <hr />\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">标题:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-article-modal-title-<%=art_idx %>" class="form-control" value="<%=title %>" title="<%=title %>" />\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<label class="control-label">发表时间:</label>-->\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<input class="form-control" type="datetime-local" />-->\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">阅读数:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-article-modal-readnum-<%=art_idx %>" class="form-control" type="number" value="<%=read_num %>" />\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<label class="control-label">入后台时间:</label>-->\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<input class="form-control" type="datetime-local" />-->\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">首次审核:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <select id="id-admin-article-modal-status-<%=art_idx %>" class="form-control">\
                                        <option value="0" <%=(status===0?"selected":"")%>>未审核</option>\
                                        <option value="1" <%=(status===1?"selected":"")%>>审核通过</option>\
                                        <option value="2" <%=(status===2?"selected":"")%>>审核不通过</option>\
                                    </select>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<label class="control-label">审核时间:</label>-->\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <!--<input class="form-control" type="datetime-local" />-->\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">类别:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <select id="id-admin-article-modal-type-<%=art_idx %>" class="form-control">\
                                    <%\
                                    for (var channel_idx in channel_list) {\
                                    %>\
                                        <option value="<%=channel_list[channel_idx] %>" <%=(channel===channel_list[channel_idx]?"selected":"") %>><%=channel_list[channel_idx] %></option>\
                                    <%\
                                    }\
                                    %>\
                                    </select>\
                                    <!--\
                                    <input id="id-admin-article-modal-type-<%=art_idx %>" class="form-control" \
                                        type="text" value="<%=channel %>" />\
                                    -->\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">生效时间:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-article-modal-enable-time-<%=art_idx %>" class="form-control" type="datetime-local" value="<%=enable_time_local %>" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">关键词:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-article-modal-keyword-<%=art_idx %>" class="form-control" type="text" \
                                        placeholder="多个关键词请以 | 分割" value="<%=key_word_str %>" />\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">失效时间:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-article-modal-disable-time-<%=art_idx %>" class="form-control" type="datetime-local" value="<%=disable_time_local %>" />\
                                </div>\
                            </div>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                            <button id="id-admin-article-modal-commit-<%=art_idx %>" type="button" class="btn btn-primary">保存修改</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- -->\
        </div>\
    </div>\
    <%\
    }\
    %>\
    ');
    
    //
    window.TETemplate.tpl_admin_oa_filter = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
            <!-- -->\
            <div class="row">\
                <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                    <ol class="breadcrumb">\
                        <li><a href="javascript:void(0);">后台系统</a></li>\
                        <li class="active">公众账号管理</li>\
                    </ol>\
                </div>\
            </div>\
            <div class="row">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h4 class="panel-title"><a id="id-admin-oa-filter-switch" data-toggle="collapse" href="#id-admin-oa-filter">条件查询</a></h4>\
                    </div>\
                    <div class="panel-collapse collapse" id="id-admin-oa-filter">\
                        <div class="panel-body">\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>ID:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-id" class="form-control" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>账号名称:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-openid" class="form-control" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>主类别:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-main-type" class="form-control" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>从类别:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-sub-type" class="form-control" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>类别等级:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <select id="id-admin-oa-filter-level" class="form-control">\
                                        <option value="-1">无要求</option>\
                                        <option value="0">0</option>\
                                        <option value="1">1</option>\
                                        <option value="2">2</option>\
                                        <option value="3">3</option>\
                                        <option value="4">4</option>\
                                        <option value="5">5</option>\
                                    </select>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom" style="display:none;">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>生效时间起始点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-time-start" \
                                        class="form-control" type="date" />\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <label>生效时间结束点:</label>\
                                </div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <input id="id-admin-oa-filter-time-end" \
                                        class="form-control" type="date" />\
                                </div>\
                            </div>\
                            <hr />\
                            <div class="row">\
                                <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                                    <div class="btn-group">\
                                        <button type="submit" class="btn btn-default" id="id-admin-oa-filter-btn-reset" class="btn btn-default">恢复默认值</button>\
                                        <button type="submit" class="btn btn-primary" id="id-admin-oa-filter-btn-search" class="btn btn-default">开始查询</button>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');
    
    window.TETemplate.tpl_admin_oa_list = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
            <div class="row">\
                <div class="pull-left btn-group">\
                    <button id="id-admin-oa-add-modal-switch" \
                        class="btn btn-default" data-toggle="modal" \
                        data-target="#id-admin-oa-add-modal">\
                        新增\
                    </button>\
                    <!-- -->\
                    <div id="id-admin-oa-add-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-oa-add-modal-title" aria-hidden="true" >\
                        <div class="modal-dialog modal-md">\
                            <div class="modal-content">\
                                <div class="modal-header">\
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                                    <h4 class="modal-title" id="id-admin-oa-add-modal-title">新增</h4>\
                                </div>\
                                <div class="modal-body">\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                                            <textarea id="id-admin-oa-add-modal-openids" rows="8" class="form-control" \
                                                placeholder="输入新增账号ID(批量新增请隔行输入)"></textarea>\
                                        </div>\
                                    </div>\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <label>主类别:</label>\
                                        </div>\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <input id="id-admin-oa-add-modal-main-type" class="form-control" />\
                                        </div>\
                                    </div>\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <label>从类别:</label>\
                                        </div>\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <input id="id-admin-oa-add-modal-sub-type" class="form-control" />\
                                        </div>\
                                    </div>\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <label>类别等级:</label>\
                                        </div>\
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                            <select id="id-admin-oa-add-modal-level" class="form-control">\
                                                <option value="0">0</option>\
                                                <option value="1" selected>1</option>\
                                                <option value="2">2</option>\
                                                <option value="3">3</option>\
                                                <option value="4">4</option>\
                                                <option value="5">5</option>\
                                            </select>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="modal-footer">\
                                    <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                                    <button id="id-admin-oa-add-modal-commit" type="button" class="btn btn-primary">保存修改</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- -->\
                    <button id="id-admin-oa-add-files-switch" class="btn btn-default" data-toggle="modal" data-target="#id-admin-oa-add-files-modal">录入csv文件</button>\
                    <!-- -->\
                    <div id="id-admin-oa-add-files-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-oa-add-files-title" aria-hidden="true">\
                        <div class="modal-dialog modal-md">\
                            <div class="modal-content">\
                                <div class="modal-header">\
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                                    <h4 class="modal-title" id="id-admin-oa-add-files-title">录入csv文件</h4>\
                                </div>\
                                <div class="modal-body">\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                                            <div id="id-admin-oa-file-selector">\
                                                <a class="btn btn-danger"><i class="glyphicon glyphicon-upload"></i> | 选择文件(支持多选)</a>\
                                                <form id="id-admin-oa-file-form"  enctype="multipart/form-data">\
                                                <input name="files" id="id-admin-oa-file-input" type="file" style="position: relative; left: 0px; top: -30px; width: 170px; height: 25px; cursor: pointer; opacity: 0;" />\
                                                </form>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="row te-padding-bottom">\
                                        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
                                            <div id="id-admin-oa-files">\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="modal-footer">\
                                    <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                                    <button id="id-admin-oa-add-files-commit" type="button" class="btn btn-primary">录入</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- -->\
                </div>\
            </div>\
            <br />\
            <br />\
            <br />\
            <div class="row">\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>编号</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>ID</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>公众账号</p>\
                </div>\
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                    <p>是否认证</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>主类别</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>从类别</p>\
                </div>\
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
                    <p>类别等级</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>订阅数</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>状态</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>文章更新频率</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>提交人</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>生效时间</p>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <p>操作</p>\
                </div>\
            </div>\
            <div id="id-admin-oa-article-list-content">\
            </div>\
        </div>\
    </div>\
    ');
    
    window.TETemplate.tpl_admin_oa_list_content = _.template('\
    <%\
    var oas = arguments[0];\
    for (var oa_idx in oas) {\
        var oa = oas[oa_idx];\
        var id = oa["id"];\
        var openid = oa["openid"];\
        var title = oa["title"];\
        var auth = oa["authentication"];\
        var main_type = oa["main_type"];\
        var sub_type = oa["sub_type"];\
        var level = oa["level"];\
        var fans_num = oa["fans_num"];\
        var user_num = "";\
        var update_freq = oa["update_freq"];\
        var operator = oa["operator"];\
        var time = oa["deat_time"];\
        var status = oa["status"];\
    %>\
    <div class="te-one-row">\
    <hr />\
    <div class="row">\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=id %></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <a href="<%=window.objs.OA_URL_PREFIX + openid %>" target="_blank" class="break-word"><%=openid %></a>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=title %></p>\
        </div>\
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            <p><%=auth %></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p>\
            <span id="id-admin-oa-content-main-type-<%=oa_idx %>"><%=main_type %></span>\
            </p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p>\
            <span id="id-admin-oa-content-sub-type-<%=oa_idx %>"><%=sub_type %></span>\
            </p>\
        </div>\
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\
            <p>\
            <span id="id-admin-oa-content-level-<%=oa_idx %>"><%=level %></span>\
            </p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><span><%=fans_num %></span></p>\
            <p><span><%=user_num %></span></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p>\
            <span id="id-admin-oa-content-status-<%=oa_idx %>"><%=status %></span>\
            </p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=update_freq %></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=operator %></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <p><%=time %></p>\
        </div>\
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
            <button id="id-admin-oa-btn-modify-<%=oa_idx %>" \
                data-toggle="modal" \
                data-target="#id-admin-oa-modal-<%=oa_idx %>">\
            修改\
            </button>\
            <!-- -->\
            <div id="id-admin-oa-modal-<%=oa_idx %>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="id-admin-oa-modal-title" aria-hidden="true">\
                <div class="modal-dialog modal-lg">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                                <h4 class="modal-title" id="id-admin-oa-modal-title">公共账号信息修改</h4>\
                        </div>\
                        <div class="modal-body">\
                            <div class="row">\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">编号:</div>\
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                    <p class="break-word">\
                                        <span>\
                                        <%=id %>\
                                        </span>\
                                    </p>\
                                </div>\
                            </div>\
                            <hr />\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">主类型:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-oa-modal-main-type-<%=oa_idx %>" class="form-control" value="<%=main_type %>" />\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">从类型:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <input id="id-admin-oa-modal-sub-type-<%=oa_idx %>" class="form-control" value="<%=sub_type %>" />\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">等级:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <select id="id-admin-oa-modal-level-<%=oa_idx %>" class="form-control">\
                                        <option value="0">0</option>\
                                        <option value="1">1</option>\
                                        <option value="2">2</option>\
                                        <option value="3">3</option>\
                                        <option value="4">4</option>\
                                        <option value="5">5</option>\
                                    </select>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <label class="control-label">状态:</label>\
                                </div>\
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
                                    <select id="id-admin-oa-modal-status-<%=oa_idx %>" class="form-control">\
                                        <option value="0">0</option>\
                                        <option value="1">1</option>\
                                        <option value="2">2</option>\
                                    </select>\
                                </div>\
                            </div>\
                            <div class="row te-padding-bottom">\
                            </div>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">放弃操作</button>\
                            <button id="id-admin-oa-modal-commit-<%=oa_idx %>" type="button" class="btn btn-primary">保存修改</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <button id="id-admin-oa-btn-delete-<%=oa_idx %>" class="btn-danger">删除</button>\
        </div>\
    </div>\
    </div>\
    <%\
    }\
    %>\
    ');
    
    window.TETemplate.tpl_admin_pager = _.template('\
    <%\
    var info = arguments[0];\
    var curr_num = info["curr_num"];\
    var page_num = info["page_num"];\
    %>\
    <!-- -->\
    <div class="container">\
        <hr />\
        <div class="row text-center">\
            <nav>\
                <ul class="pager">\
                <%\
                if (curr_num != 0) {\
                %>\
                    <li id="id-admin-pager-previous"><a href="javascript:void(0);">上一页</a></li>\
                <%\
                }\
                %>\
                    <li>\
                    &nbsp;&nbsp;&nbsp;\
                    <div class="label-info" style="display: inline; font-size: 1.2em;">\
                        <!--<span id="id-admin-pager-curr-num"><%=curr_num+1 %></span> / <%=page_num+1 %>-->\
                        <input type="number" id="id-admin-pager-curr-num" value="<%=curr_num+1 %>" /> / <%=page_num+1 %>\
                    </div>\
                    &nbsp;&nbsp;&nbsp;\
                    </li>\
                <%\
                if (curr_num != page_num) {\
                %>\
                    <li id="id-admin-pager-next"><a href="javascript:void(0);">下一页</a></li>\
                <%\
                }\
                %>\
                </ul>\
            </nav>\
        </div>\
    </div>\
    ');

})();
