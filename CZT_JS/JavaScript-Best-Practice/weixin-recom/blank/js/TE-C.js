/**
 * Created by TeaEra @ 2014-11-14
 */

(function () {
    "use strict";

    //
    window.TEC = window.TEC || {};

    //
    window.TEC.ajax_call = function (url, type, req_data, success_func, compose_func) {
        $.ajax({
            url: url,
            type: type,
            data: req_data,
            dataType: "json",
            success: function (data, status, jqxhr) {
                //
                success_func(data, compose_func);
            },
            error: function (jqxhr, status, error) {
                //
                alert(error);
            }
        });
    };
    //
    window.TEC.sa_for_ajax = function (data, compose_func) {
        //
        var composed_data = compose_func(data);
        var target_id = "#id-admin-main-content";
        //
        window.TEC.show_data(
            target_id,
            composed_data
        );
    };
    //
    window.TEC.show_data = function (target_id, data) {
        $(target_id).html(
            window.TEV.tpl_blank(data)
        );
    };

    //
    window.TEC.action_call = function () {
        //
        // TODO: url;
        //var url = "";
        var url = "js/test.json";
        var type = "post";
        var req_data = "";
        var sa_func = window.TEC.sa_for_ajax;
        var compose_func = window.TEC.compose_data;
        //
        window.TEC.ajax_call(
            url,
            type,
            req_data,
            sa_func,
            compose_func
        );
    };

    //
    window.TEC.compose_data = function (data) {
        //
        var return_data;
        //
        // TODO: ...
        // demo:
        console.log(data);
        return_data = data;
        //
        return return_data;
    };

    //
    window.TEC.action_call();
})();