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
})();