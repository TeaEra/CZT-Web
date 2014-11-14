/**
 * Created by TeaEra @ 2014-11-14
 */

(function () {
    "use strict";

    //
    window.TEC = window.TEC || {};

    /**************************************************************************/
    /**
     * navbar
     */
    window.TEC.show_navbar = function () {
        //
        var target_id = "#id-navbar";
        //
        $(target_id).html(
            window.TEV.tpl_navbar()
        );
    };

    /**
     * pager
     */
    window.TEC.show_pager = function (info) {
        //
        var target_id = "#id-pager";
        //
        $(target_id).html(
            window.TEV.tpl_pager(info)
        );
    };

    /**
     */
    /*window.TEController.action_pager_prev = function (info, goto_func) {
        //
        var new_info = {
            "curr_num": info["curr_num"] - 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };*/

    /**
     */
    /*window.TEController.action_pager_next = function (info, goto_func) {
        //
        var new_info = {
            "curr_num": info["curr_num"] + 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };*/

    /**
     */
    /*window.TEController.action_pager_num = function (cn, info, goto_func) {
        //
        var new_info = {
            "curr_num": cn - 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };*/

    /**
     */
    /*window.TEController.action_pager_goto = function (new_info, goto_func) {
        //
        var curr_num = new_info["curr_num"];
        var page_num = new_info["page_num"];
        var per_page = new_info["per_page"];
        //
        // new offset
        var page_info = {
            "offset": curr_num * per_page,
            "per_page": per_page
        };

        //
        goto_func(page_info);

        //
        window.TEController.show_pager(new_info, goto_func);
    };*/

    /**
     */
    /*window.TEController.clear_pager = function () {
        $(window.TEIDS.ADMIN_PAGER).html("");
    };*/

    /**************************************************************************/
    //
    window.TEC.ajax_call =
            function (url, type, req_data, success_func, compose_func) {
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
        var target_id = "#id-main-content";
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
    (function () {
        //
        window.TEC.show_navbar();
        //
        window.TEC.action_call();
        //
        window.TEC.show_pager({"curr_num": 0, "page_num": 2});
    })();
})();