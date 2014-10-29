/**
 * Created by chenzhengtong on 2014/10/17.
 */

(function () {

    "use strict";

    // Check localStorage;
    if (window.localStorage.getItem(window.TEIDS.LS_MID)) {
        //
        window.TEController.action_show_user_info();
    }
    else {
        window.open("index.html", "_self");
    }
    

    // Bind loading effect
    window.TEController.add_loading_effect();

})();
