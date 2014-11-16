/**
 * Created by TeaEra @ 2014-11-14
 */

(function () {
    "use strict";

    //
    window.TEV = window.TEV || {};
    //
    window.TEV.get_cols = function (num) {
        return "col-lg-" + num + " col-md-" + num + " col-sm-" + num + " col-xs-" + num;
    };
    //
    window.TEV.get_offset_cols = function (num) {
        return "col-lg-offset-" + num
            + " col-md-offset-" + num
            + " col-sm-offset-" + num
            + " col-xs-offset-" + num;
    };

    //
    window.TEV.tpl_blank = _.template('\
    <!-- -->\
    <%\
    var info = arguments[0];\
    var header = info["header"];\
    var h_title = header["title"];\
    var h_set = header["settings"];\
    var content = info["content"];\
    var c_list = content["list"];\
    var c_set = content["settings"];\
    %>\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-24 col-md-24 col-sm-24 col-xs-24">\
            <!-- Here is title -->\
            <div class="row">\
            <%\
            for (var idx in h_title) {\
            %>\
                <div class="<%=window.TEV.get_cols(h_set[idx]) %>">\
                    <p><%=h_title[idx] %></p>\
                </div>\
            <%\
            }\
            %>\
            </div>\
            <!-- Here is content -->\
            <%\
            for (var idx in c_list) {\
                var each_row = c_list[idx];\
            %>\
                <hr />\
                <div class="row">\
            <%\
                for (var col_idx in each_row) {\
            %>\
                    <div class="<%=window.TEV.get_cols(c_set[col_idx]) %>">\
                        <p><%=each_row[col_idx] %></p>\
                    </div>\
            <%\
                }\
            %>\
                </div>\
            <%\
            }\
            %>\
        </div>\
    </div>\
    ');

    //
    window.TEV.tpl_navbar = _.template('\
    <%\
    %>\
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
                <!--\
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
                <ul class="nav navbar-nav navbar-right">\
                    <li id="id-admin-navbar-btn-inverse"><a href="javascript:void(0);">夜间导航栏</a></li>\
                </ul>\
                -->\
            </div>\
        </div>\
    </nav>\
    ');

    window.TEV.tpl_pager = _.template('\
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