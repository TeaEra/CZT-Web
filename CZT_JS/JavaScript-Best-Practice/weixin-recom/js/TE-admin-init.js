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
    window.TEIDS.ADMIN_BTN_PUBLIC_ACCOUNT = "#id-admin-official-account";
    //
    window.TEIDS.ADMIN_COLLAPSED_NAVBAR = "#id-admin-collapsed-navbar";
    window.TEIDS.ADMIN_DETAILED_NAVBAR = "#id-admin-detailed-navbar";
    //
    window.TEIDS.ADMIN_VERIFY_FILTER = "#id-admin-verify-filter";
    window.TEIDS.ADMIN_VERIFY_ARTICLE_LIST_CONTENT
        = "#id-admin-verify-article-list-content";

    $(window.TEIDS.ADMIN_NAVBAR).html(window.TETemplate.tpl_admin_navbar());
    $(window.TEIDS.ADMIN_MAIN_CONTENT).html(
        window.TETemplate.tpl_admin_verify_filter()
        + window.TETemplate.tpl_admin_verify_article_list()
    );

    var get_all_channels = function () {
        window.objs.channels = new Array();
        var from_list = window.objs.CATEGORIES;
        for (var category_idx in from_list) {
            for (var channel_idx in from_list[category_idx]) {
                window.objs.channels.push(from_list[category_idx][channel_idx]);
            }
        }
    };

})();
