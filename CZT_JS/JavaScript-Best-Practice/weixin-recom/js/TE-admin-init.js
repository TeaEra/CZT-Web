/**
 * by chenzhengtong @ 2014.10.28
 */

(function () {
    "use strict";

    //
    window.TEIDS = window.TEIDS || {};

    /*************************************************************************/
    /*** admin ***/
    //
    window.TEIDS.ADMIN_NAVBAR = "#id-admin-navbar";
    window.TEIDS.ADMIN_NAVBAR_NAV = "#id-admin-navbar-nav";
    //
    window.TEIDS.ADMIN_BTN_VERIFY = "#id-admin-btn-verify";
    window.TEIDS.ADMIN_BTN_UMIS = "#id-admin-btn-umis";
    window.TEIDS.ADMIN_BTN_CATEGORY = "#id-admin-btn-category";
    window.TEIDS.ADMIN_BTN_TOPIC_WORD = "#id-admin-btn-topic-word";
    window.TEIDS.ADMIN_BTN_KEY_WORD = "#id-admin-btn-key-word";
    window.TEIDS.ADMIN_BTN_OFFICIAL_ACCOUNT = "#id-admin-btn-official-account";
    //
    window.TEIDS.ADMIN_NAVBAR_INVERSE = "#id-admin-navbar-btn-inverse";
    //
    window.TEIDS.ADMIN_MAIN_CONTENT = "#id-admin-main-content";
    //
    window.TEIDS.ADMIN_PAGER = "#id-admin-pager";
    window.TEIDS.ADMIN_PAGER_PREV = "#id-admin-pager-previous";
    window.TEIDS.ADMIN_PAGER_NEXT = "#id-admin-pager-next";
    window.TEIDS.ADMIN_PAGER_CURR_NUM = "#id-admin-pager-curr-num";
    /*************************************************************************/
    

    /*************************************************************************/
    /*** verify ***/
    //
    window.TEIDS.ADMIN_COLLAPSED_NAVBAR = "#id-admin-collapsed-navbar";
    window.TEIDS.ADMIN_DETAILED_NAVBAR = "#id-admin-detailed-navbar";
    //
    // filter;
    window.TEIDS.ADMIN_VERIFY_FILTER_SWITCH = "#id-admin-verify-filter-switch";
    window.TEIDS.ADMIN_VERIFY_FILTER = "#id-admin-verify-filter";
    window.TEIDS.ADMIN_VERIFY_FILTER_BTN_SEARCH = "#id-admin-verify-filter-btn-search";
    window.TEIDS.ADMIN_VERIFY_FILTER_BTN_RESET = "#id-admin-verify-filter-btn-reset";
    //
    window.TEIDS.ADMIN_BATCH_VERIFY_MODAL = "#id-admin-batch-verify-modal";
    window.TEIDS.ADMIN_VERIFY_BTN_BATCH_VERIFY = "#id-admin-verify-btn-batch-verify";
    window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_NUM = "#id-admin-verify-batch-verify-num";
    window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_STATUS = "#id-admin-batch-verify-status";
    window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_COMMIT = "#id-admin-batch-verify-commit";
    //
    window.TEIDS.ADMIN_VERIFY_SELECT_TIME = "#id-admin-verify-select-time";
    //
    window.TEIDS.ADMIN_VERIFY_FILTER_CHANNEL = "#id-admin-verify-filter-channel";
    window.TEIDS.ADMIN_VERIFY_FILTER_STATUS = "#id-admin-verify-filter-status";
    window.TEIDS.ADMIN_VERIFY_FILTER_KEY_WORD = "#id-admin-verify-filter-key-word";
    window.TEIDS.ADMIN_VERIFY_FILTER_SUBMITTER = "#id-admin-verify-filter-submitter";
    window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_START = "#id-admin-verify-filter-pub-time-start";
    window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_END = "#id-admin-verify-filter-pub-time-end";
    window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_START = "#id-admin-verify-filter-db-time-start";
    window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_END = "#id-admin-verify-filter-db-time-end";
    window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_START = "#id-admin-verify-filter-verify-time-start";
    window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_END = "#id-admin-verify-filter-verify-time-end";
    window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_START = "#id-admin-verify-filter-enable-time-start";
    window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_END = "#id-admin-verify-filter-enable-time-end";
    window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_START = "#id-admin-verify-filter-disable-time-start";
    window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_END = "#id-admin-verify-filter-disable-time-end";
    //
    // article list;
    window.TEIDS.ADMIN_VERIFY_ARTICLE_LIST_CONTENT
        = "#id-admin-verify-article-list-content";
    /*************************************************************************/

    /*************************************************************************/
    /*** OA ***/
    //
    window.objs.OA_URL_PREFIX = "http://weixin.sogou.com/gzh?openid=";
    //
    window.TEIDS.ADMIN_OA_FILTER = "#id-admin-oa-filter";
    window.TEIDS.ADMIN_OA_FILTER_SWITCH = "#id-admin-oa-filter-switch";
    window.TEIDS.ADMIN_OA_FILTER_BTN_SEARCH = "#id-admin-oa-filter-btn-search";
    window.TEIDS.ADMIN_OA_FILTER_BTN_RESET = "#id-admin-oa-filter-btn-reset";
    //
    window.TEIDS.ADMIN_OA_FILTER_ID = "#id-admin-oa-filter-id";
    window.TEIDS.ADMIN_OA_FILTER_OPENID = "#id-admin-oa-filter-openid";
    window.TEIDS.ADMIN_OA_FILTER_MAIN_TYPE = "#id-admin-oa-filter-main-type";
    window.TEIDS.ADMIN_OA_FILTER_SUB_TYPE = "#id-admin-oa-filter-sub-type";
    window.TEIDS.ADMIN_OA_FILTER_LEVEL = "#id-admin-oa-filter-level";
    window.TEIDS.ADMIN_OA_FILTER_TIME_START = "#id-admin-oa-filter-time-start";
    window.TEIDS.ADMIN_OA_FILTER_TIME_END = "#id-admin-oa-filter-time-end";
    //
    window.TEIDS.ADMIN_OA_LIST_CONTENT = "#id-admin-oa-article-list-content";
    //
    window.TEIDS.ADMIN_OA_ADD_MODAL_SWITCH = "#id-admin-oa-add-modal-switch";
    window.TEIDS.ADMIN_OA_ADD_MODAL = "#id-admin-oa-add-modal";
    window.TEIDS.ADMIN_OA_ADD_MODAL_OPENIDS = "#id-admin-oa-add-modal-openids";
    window.TEIDS.ADMIN_OA_ADD_MODAL_MAIN_TYPE = "#id-admin-oa-add-modal-main-type";
    window.TEIDS.ADMIN_OA_ADD_MODAL_SUB_TYPE = "#id-admin-oa-add-modal-sub-type";
    window.TEIDS.ADMIN_OA_ADD_MODAL_LEVEL = "#id-admin-oa-add-modal-level";
    window.TEIDS.ADMIN_OA_ADD_MODAL_COMMIT = "#id-admin-oa-add-modal-commit";
    //
    window.TEIDS.ADMIN_OA_ADD_FILES_SWITCH = "#id-admin-oa-add-files-switch";
    window.TEIDS.ADMIN_OA_ADD_FILES_MODAL = "#id-admin-oa-add-files-modal";
    window.TEIDS.ADMIN_OA_FILE_FORM = "#id-admin-oa-file-form";
    window.TEIDS.ADMIN_OA_FILE_INPUT = "#id-admin-oa-file-input";
    window.TEIDS.ADMIN_OA_FILES = "#id-admin-oa-files";
    window.TEIDS.ADMIN_OA_ADD_FILES_COMMIT = "#id-admin-oa-add-files-commit";
    /*************************************************************************/

    //
    // Init:
    window.TEController.action_init_navbar();
    //
    window.TEController.action_init_verify();

})();
