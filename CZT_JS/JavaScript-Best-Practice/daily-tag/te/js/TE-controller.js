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

    window.TEController.action_show_today = function () {
        //
        $(window.TEIDS.CONTENT).html(window.TETemplate.tpl_today());
        //
        var settings = {
            minuteStep: 1,
            showSeconds: false,
            showMeridian: false,
            defaultTime: false
        };
        $(window.TEIDS.INPUT_TIME_1).timepicker(settings);
        $(window.TEIDS.INPUT_TIME_2).timepicker(settings);
        $(window.TEIDS.INPUT_TIME_3).timepicker(settings);
        $(window.TEIDS.INPUT_TIME_4).timepicker(settings);
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
                //console.log(data);
                //
                var res = data["res"];
                if (res.length === 0) {
                    window.objs.is_tagged_list[time_type] = false;
                }
                else {
                    window.objs.is_tagged_list[time_type] = true;
                }
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    window.TEController.api_tag = function (time_type, user) {
        $.ajax({
            url: "cgi-bin/api_mysql_tag.py",
            type: "post",
            data: window.TEController.data_for_api_tag(time_type, user),
            dataType: "json",
            success: function (data, status, jqxhr) {
                //
                if (time_type === 1) {
                    $(window.TEIDS.TIME_1).attr("disabled", "disabled");
                    $(window.TEIDS.TIME_1).toggleClass("btn-info");
                    $(window.TEIDS.TIME_1).toggleClass("btn-default");
                }
                else if (time_type === 2) {
                    $(window.TEIDS.TIME_2).attr("disabled", "disabled");
                    $(window.TEIDS.TIME_2).toggleClass("btn-primary");
                    $(window.TEIDS.TIME_2).toggleClass("btn-default");
                }
                else if (time_type === 3) {
                    $(window.TEIDS.TIME_3).attr("disabled", "disabled");
                    $(window.TEIDS.TIME_3).toggleClass("btn-warning");
                    $(window.TEIDS.TIME_3).toggleClass("btn-default");
                }
                else if (time_type === 4) {
                    $(window.TEIDS.TIME_4).attr("disabled", "disabled");
                    $(window.TEIDS.TIME_4).toggleClass("btn-success");
                    $(window.TEIDS.TIME_4).toggleClass("btn-default");
                }
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    window.TEController.data_for_api_tag = function (time_type, user) {
        //
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth() + 1;  // 0-11
        var d = today.getDate();
        var hour = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var str_date =
            y + "-" + m + "-" + d
            + "T" + hour + ":" + min + ":" + sec;
        return "time_type=" + time_type
            + "&user=teaera" + "&curr_date=" + str_date;
    };

    /**
     * Check 4 kinds of time
     */
    window.TEController.check_tagged = function () {
        //
        window.TEController.api_check_tagged(1);
        window.TEController.api_check_tagged(2);
        window.TEController.api_check_tagged(3);
        window.TEController.api_check_tagged(4);
    };

    /**
     *
     */
    window.TEController.init_index = function () {
        //
        window.TEController.action_show_navbar();
        //
        window.TEController.add_loading_effect();
        //
        window.TEController.check_tagged();
        if (window.objs.today["hour"] < 12) {
            window.TEController.action_show_am();
            if (window.objs.is_tagged_list[1] === false) {
                //
                $(window.TEIDS.TIME_1).bind(
                    "click",
                    function () {
                        window.TEController.api_tag(1, "teaera");
                    }
                );
            }
            if (window.objs.is_tagged_list[2] === false) {
                //
                $(window.TEIDS.TIME_2).bind(
                    "click",
                    function () {
                        window.TEController.api_tag(2, "teaera");
                    }
                );
            }
        }
        else {
            window.TEController.action_show_pm();
            if (window.objs.is_tagged_list[3] === false) {
                //
                $(window.TEIDS.TIME_3).bind(
                    "click",
                    function () {
                        console.log(3);
                        window.TEController.api_tag(3, "teaera");
                    }
                );
            }
            if (window.objs.is_tagged_list[4] === false) {
                //
                $(window.TEIDS.TIME_4).bind(
                    "click",
                    function () {
                        console.log(4);
                        window.TEController.api_tag(4, "teaera");
                    }
                );
            }
        }
    };

})();
