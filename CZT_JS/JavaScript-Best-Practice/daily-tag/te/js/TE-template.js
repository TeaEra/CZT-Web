/**
 * Created by TeaEra @ 2014-10-26.
 */

(function () {
    "use strict";

    // TETemplate
    window.TETemplate = window.TETemplate || {};

    window.TETemplate.tpl_title = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-7">\
            <h1 class="text-center"><span class="label label-info">Daily Tag</span></h1>\
        </div>\
    </div>\
    <br />\
    ');

    window.TETemplate.tpl_login = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">\
            <div class="form-group">\
                <label>ID</label>\
                <input class="form-control" type="text" placeholder="id" />\
            </div>\
            <div class="form-group">\
		         <label>PASSWORD</label>\
                <input class="form-control" type="password" placeholder="password" />\
            </div>\
            <br />\
            <input class="btn btn-lg btn-info btn-block" type="submit" value="Login"/>\
        </div>\
    </div>\
    <br />\
    ');

    window.TETemplate.tpl_tag_buttons = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">\
            <div class="row">\
                <button class="btn-block btn btn-warning" type="button">Morning Tag</button>\
                <button class="btn-block btn btn-success" type="button">Evening Tag</button>\
            </div>\
        </div>\
    </div>\
    <br />\
    ');

    window.TETemplate.tpl_am = _.template('\
    <%\
    var is_show_1 = (window.objs.is_tagged_list[1] === false);\
    var is_show_2 = (window.objs.is_tagged_list[2] === false);\
    %>\
    <!-- -->\
    <div class="container">\
        <div class="<%=window.TEV.get_cols(5) %> <%=window.TEV.get_offset_cols(1) %>">\
            <div class="row">\
                <button id="id-btn-time-1" \
                    class="btn <%=is_show_1?"btn-info":"btn-default" %> fs3 w100 pad-style-1" \
                    type="button" \
                    <%=(is_show_1?"":"disabled") %>>\
                    出门了\
                </button>\
            </div>\
            <br />\
            <div class="row">\
                <button id="id-btn-time-2" \
                    class="btn <%=is_show_2?"btn-primary":"btn-default" %> fs3 w100 pad-style-1" \
                    type="button" \
                    <%=(is_show_2?"":"disabled") %>>\
                    到工位\
                </button>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplate.tpl_pm = _.template('\
    <%\
    var is_show_3 = (window.objs.is_tagged_list[3] === false);\
    var is_show_4 = (window.objs.is_tagged_list[4] === false);\
    %>\
    <!-- -->\
    <div class="container">\
        <div class="<%=window.TEV.get_cols(5) %> <%=window.TEV.get_offset_cols(1) %>">\
            <div class="row">\
                <button id="id-btn-time-3" \
                    class="btn <%=is_show_3?"btn-warning":"btn-default" %> fs3 w100 pad-style-1" \
                    type="button" \
                    <%=(is_show_3?"":"disabled") %>>\
                    下班了\
                </button>\
            </div>\
            <br />\
            <div class="row">\
                <button id="id-btn-time-4" \
                    class="btn <%=is_show_4?"btn-success":"btn-default" %> fs3 w100 pad-style-1" \
                    type="button" \
                    <%=(is_show_4?"":"disabled") %>>\
                    到家了\
                </button>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplate.tpl_today = _.template('\
    <%\
    %>\
    <!-- -->\
    <div class="container">\
        <div class="<%=window.TEV.get_cols(7) %>">\
            <div class="row">\
                <div class="form-group">\
                    <label class="fs3 label label-info control-label \
                        <%=window.TEV.get_cols(3) %>">\
                        出门</label>\
                    <div class="<%=window.TEV.get_cols(4) %>">\
                        <input id="id-input-time-1" class="form-control big-input" \
                            type="text" />\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="form-group">\
                    <label class="fs3 label label-primary control-label \
                        <%=window.TEV.get_cols(3) %>">\
                        就位</label>\
                    <div class="<%=window.TEV.get_cols(4) %>">\
                        <input id="id-input-time-2" class="form-control big-input" \
                            type="text" />\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="form-group">\
                    <label class="fs3 label label-warning control-label \
                        <%=window.TEV.get_cols(3) %>">\
                        下班</label>\
                    <div class="<%=window.TEV.get_cols(4) %>">\
                        <input id="id-input-time-3" class="form-control big-input" \
                            type="text" />\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="form-group">\
                    <label class="fs3 label label-success control-label \
                        <%=window.TEV.get_cols(3) %>">\
                        到家</label>\
                    <div class="<%=window.TEV.get_cols(4) %>">\
                        <input id="id-input-time-4" class="form-control big-input" \
                            type="text" />\
                    </div>\
                </div>\
            </div>\
            <hr />\
            <div class="row">\
                <div class="<%=window.TEV.get_cols(5) %> <%=window.TEV.get_offset_cols(1) %>">\
                    <button class="btn btn-danger fs3 full-height form-control">\
                        是这样滴\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

})();
