/**
 * Created by TeaEra @ 2014-10-26.
 */

(function () {
    "use strict";

    //
    var today = new Date();
    var curr_year = today.getFullYear();
    var curr_month = today.getMonth();  // 0-11
    var curr_day = today.getDay();  // 0-6
    var day_list = new Array();
    for (var idx=0; idx<curr_day; day_list.push({}), ++idx);
    var curr_month_days = window.TEController.mapper_month_to_days(curr_year, curr_month);
    for (var idx=1; idx<=curr_month_days; ++idx) {
        day_list.push(new Date(curr_year, curr_month, idx));
    }
    console.log(day_list.length);

    //
    window.TEController.action_show_title();
    //window.TEController.action_show_login();
    //window.TEController.action_show_tag_buttons();

})();