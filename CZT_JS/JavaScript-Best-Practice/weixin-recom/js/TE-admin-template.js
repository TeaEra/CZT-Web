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
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\
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
                            <li id="id-admin-btn-article"><a href="javascript:void(0);">精品文章审核</a></li>\
                            <li id="id-admin-btn-category"><a href="javascript:void(0);">类别管理</a></li>\
                            <li id="id-admin-btn-topic-word"><a href="javascript:void(0);">主题词管理</a></li>\
                            <li id="id-admin-btn-key-word"><a href="javascript:void(0);">关键词管理</a></li>\
                            <li id="id-admin-btn-public-account"><a href="javascript:void(0);">公众账号管理</a></li>\
                        </ul>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
    ');

    //
    window.TETemplate.tpl_admin_verify_filter = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="row">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h4 class="panel-title"><a data-toggle="collapse" href="#id-admin-verify-filter">Filter</a></h4>\
                    </div>\
                    <div class="panel-collapse collapse" id="id-admin-verify-filter">\
                        <div class="panel-body">\
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\
                                <div class="form-group">\
                                    <label>category</label>\
                                    <select class="form-control"></select>\
                                </div>\
                                <div class="form-group">\
                                    <label>verify_status</label>\
                                    <select class="form-control"></select>\
                                </div>\
                                <div class="form-group">\
                                    <label>key_word</label>\
                                    <input class="form-control" placeholder="key_word" type="text" />\
                                </div>\
                                <div class="form-group">\
                                    <label>submiter</label>\
                                    <input class="form-control" placeholder="submitter" type="text" />\
                                </div>\
                            </div>\
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">\
                                <div class="row">\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>pub_time_start</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>pub_time_end</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>db_time_start</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>db_time_end</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>verify_time_start</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>verify_time_end</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>enable_time_start</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>enable_time_end</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>disable_time_start</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">\
                                        <div class="form-group">\
                                            <label>disable_time_end</label>\
                                            <input class="form-control" type="date" />\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <hr />\
                            <div class="row">\
                                <div class="btn-group">\
                                    <button>btn-1</button>\
                                    <button>btn-2</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

})();
