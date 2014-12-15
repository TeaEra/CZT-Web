/**
 * Created by TeaEra @ 2014-11-18.
 */

(function () {
    "use strict";

    // some codes here;
    window.TEC = window.TEC || {};

    /**/
    window.TEC.get_today = function () {
        //
        var today = new Date();
        //
        var y = today.getFullYear();
        var m = today.getMonth() + 1;  // 0-11
        var d = today.getDate();
        var hour = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var str_date =
            y + "-" + m + "-" + d
            + "T" + hour + ":" + min + ":" + sec;
        //
        var res = {
            "obj": today,
            "str": str_date
        };
        //
        return res;
    };

    //
    window.TEC.effect_click_nav_btn = function (nav_btn_list) {
        //
        _.forEach(nav_btn_list, function (id) {
            $(id).bind(
                "click",
                function () {
                    _.forEach(nav_btn_list, function (each_id) {
                        $(each_id).removeClass("active");
                    });
                    $(this).addClass("active");
                }
            );
        });
    };

    /**
     * Effect:
     *   loading while ajax call;
     */
    window.TEC.add_loading_effect = function () {
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

    /**
     * Effect:
     *   scroll to top;
     */
    window.TEC.effect_scroll_top = function () {
        //
        $(window).scroll(function () {
            if ($(this).scrollTop() >= window.screen.availHeight/3) {
                $("#id-btn-scroll-top").fadeIn();
            }
            else {
                $("#id-btn-scroll-top").fadeOut();
            }
        });
        $("#id-btn-scroll-top").bind("click", window.TEC.action_scroll_top);
    };

    /**
     * Action:
     *   action for add_scroll_top_effect;
     */
    window.TEC.action_scroll_top = function () {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    };

})();