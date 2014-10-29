/**
 * Created by chenzhengtong on 2014/10/17.
 */

(function () {

    "use strict";

    /*
    window.TEIDS = window.TEIDS || {};
    window.TEIDS.MAIN_CONTENT = "#id-main-content";
    window.TEIDS.INPUT_MID = "#id-input-mid";
    window.TEIDS.BTN_LOGIN = "#id-btn-login";
    window.TEIDS.ARTICLE_LIST = "#id-article-list";
    window.TEIDS.BTN_REFRESH = "#id-btn-refresh";
    window.TEIDS.BTN_LOGOUT = "#id-btn-logout";
    window.TEIDS.BTN_SCROLL_TOP = "#id-btn-scroll-top";
    window.TEIDS.LABEL_USER = "#id-label-user";
    //
    window.TEIDS.LS_MID = "mid";
    //
    window.TEIDS.CHANNEL_SELECTED = "#id-channel-selected";
    window.TEIDS.CHANNEL_UNSELECTED = "#id-channel-unselected";
    //
    window.channel_selected = [];
    window.channel_unselected = [];
    

    // Save data
    window.objs = window.objs || {};
    */

    // Check localStorage;
    if (window.localStorage.getItem(window.TEIDS.LS_MID)) {
        window.TEController.action_login(
            {
                'mid': window.localStorage.getItem(window.TEIDS.LS_MID)
            }
        );
    }
    else {
        $(window.TEIDS.MAIN_CONTENT).html(window.TETemplate.tpl_init());

        $(window.TEIDS.BTN_LOGIN).bind("click", function () {
            var data = {};
            data['mid'] = $(window.TEIDS.INPUT_MID).val();
            //
            window.TEController.action_login(data);
        });
    }

    // Bind loading effect
    window.TEController.add_loading_effect();

})();
