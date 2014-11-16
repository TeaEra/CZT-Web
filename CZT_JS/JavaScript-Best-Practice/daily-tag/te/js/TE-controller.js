/**
 * Created by TeaEra @ 2014-10-26.
 */

(function () {
    "use strict";

    // TEController
    window.TEController = window.TEController || {};

    window.TEController.is_in_list = function (list, value) {
        for (var idx in list) {
            if (value === list[idx])
                return true;
        }
        return false;
    };

    window.TEController.mapper_month_to_days = function (year, month) {
        var month_for_human = month + 1;
        var days_31 = [1,3,5,7,8,10,12];
        var days_30 = [4,6,9,11];
        if (month_for_human === 2) {
            return year % 4 === 0 || year % 400 === 0 ? 29 : 28;
        }
        else if (window.TEController.is_in_list(days_30, month_for_human)) {
            return 30;
        }
        else if (window.TEController.is_in_list(days_31, month_for_human)) {
            return 31;
        }
    };

    window.TEController.action_show_navbar = function () {
        $(window.TEIDS.NAVBAR).html(window.TEV.tpl_navbar());
    };

    window.TEController.action_show_title = function () {
        $(window.TEIDS.TITLE).html(window.TETemplate.tpl_title());
    };

    window.TEController.action_show_login = function () {
        $(window.TEIDS.CONTENT).html(window.TETemplate.tpl_login());
    };

    window.TEController.action_show_tag_buttons = function () {
        $(window.TEIDS.CONTENT).html(window.TETemplate.tpl_tag_buttons());
    };

    window.TEController.action_show_am = function () {
        $(window.TEIDS.CONTENT).html(window.TETemplate.tpl_am());
    };

    window.TEController.action_show_pm = function () {
        $(window.TEIDS.CONTENT).html(window.TETemplate.tpl_pm());
    };

    window.TEController.api_check_tagged = function (time_type) {
        $.ajax({
            url: "cgi-bin/api_mysql_is_tagged.py",
            type: "post",
            //
            async: false,
            //
            data: "time_type=" + time_type + "&curr_date=" + window.objs.str_date,
            dataType: "json",
            success: function (data, status, jqxhr) {
                console.log(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

})();