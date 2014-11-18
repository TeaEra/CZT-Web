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

})();