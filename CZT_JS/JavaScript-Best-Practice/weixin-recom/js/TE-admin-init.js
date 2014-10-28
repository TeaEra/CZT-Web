/**
 * by chenzhengtong @ 2014.10.28
 */

(function () {
    "use strict";

    //
    window.TEIDS = window.TEIDS || {};
    //
    window.TEIDS.ADMIN_NAVBAR = "#id-admin-navbar";
    window.TEIDS.ADMIN_MAIN_CONTENT = "#id-admin-main-content";
    //
    window.TEIDS.ADMIN_BTN_VERIFY = "#id-admin-btn-verify";
    window.TEIDS.ADMIN_BTN_ARTICLE = "#id-admin-btn-article";
    window.TEIDS.ADMIN_BTN_CATEGORY = "#id-admin-btn-category";
    window.TEIDS.ADMIN_BTN_TOPIC_WORD = "#id-admin-btn-topic-word";
    window.TEIDS.ADMIN_BTN_KEY_WORD = "#id-admin-btn-key-word";
    window.TEIDS.ADMIN_BTN_PUBLIC_ACCOUNT = "#id-admin-public-account";

    $(window.TEIDS.ADMIN_NAVBAR).html(window.TETemplate.tpl_admin_navbar());
    $(window.TEIDS.ADMIN_MAIN_CONTENT).html(window.TETemplate.tpl_admin_verify_filter());
})();
