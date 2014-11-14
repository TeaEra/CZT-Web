
/**
 * Created by chenzhengtong on 2014/10/21.
 */

(function () {

    "use strict";

    //
    window.TEIDS = window.TEIDS || {};
    //
    // localStorage
    window.TEIDS.LS_MID = "mid";
    //
    // 'index.html'
    window.TEIDS.MAIN_CONTENT = "#id-main-content";
    window.TEIDS.INPUT_MID = "#id-input-mid";
    window.TEIDS.BTN_LOGIN = "#id-btn-login";
    window.TEIDS.ARTICLE_LIST = "#id-article-list";
    window.TEIDS.BTN_REFRESH = "#id-btn-refresh";
    window.TEIDS.BTN_LOGOUT = "#id-btn-logout";
    window.TEIDS.BTN_SCROLL_TOP = "#id-btn-scroll-top";
    window.TEIDS.LABEL_USER = "#id-label-user";
    window.TEIDS.CHANNEL_SELECTED = "#id-channel-selected";
    window.TEIDS.CHANNEL_UNSELECTED = "#id-channel-unselected";
    //
    // 'user.html'
    window.TEIDS.USER_MAIN_CONTENT = "#id-user-main-content";
    window.TEIDS.USER_BTN_CLICK = "#id-user-btn-click";
    window.TEIDS.USER_BTN_FAVOR = "#id-user-btn-favor";
    window.TEIDS.USER_BTN_CHANNEL = "#id-user-btn-channel";
    window.TEIDS.USER_CONTENT_LIST = "#id-user-content-list";
    window.TEIDS.USER_BTN_RELOAD = "#id-user-btn-reload";
    // "umis.html"
    window.TEIDS.UMIS_MAIN_CONTENT = "#id-umis-main-content";
    window.TEIDS.UMIS_ARTICLE_LIST = "#id-umis-article-list";

    /**************************************************************************/
    // Save data
    window.objs = window.objs || {};
    //
    window.objs.timer_min = 1;
    window.objs.timer_sec = 0;
    //
    // TODO: for 'user.html'; maybe, should be moved to 'TE-init-user.js';
    window.objs.user_curr_btn = window.TEIDS.USER_BTN_CLICK;
    //
    window.objs.default_filter_conditions = {
        "channel": "HOT",
        "status": "",
        "key_wor_list": "",
        "submitter": "",
        //
        "pub_time_start": "",
        "pub_time_end": "",
        "db_time_start": "",
        "db_time_end": "",
        "verify_time_start": "",
        "verify_time_end": "",
        "enable_time_start": "",
        "enable_time_end": "",
        "disable_time_start": "",
        "disable_time_end": ""
    };
    //
    // Categories and corresponding channesl;
    window.objs.CATEGORIES = [
        {
            category: "热门",
            channels: ["HOT"]
        },
        {
            category: "点赞党",
            channels: ["心灵鸡汤", "涨姿势", "正能量"]
        },
        {
            category: "段子手",
            channels: ["搞笑", "段子"]
        },
        {
            category: "时政控",
            channels: ["军事", "新闻", "深度"]
        },
        {
            category: "科技咖",
            channels: ["互联网", "科技"]
        },
        {
            category: "八卦精",
            channels: ["娱乐"]
        },
        {
            category: "财经迷",
            channels: ["财经", "理财", "房产"]
        },
        {
            category: "旅行家",
            channels: ["旅游", "摄影"]
        },
        {
            category: "万人迷",
            channels: ["时尚", "美容"]
        },
        {
            category: "白骨精",
            channels: ["创业", "职场"]
        },
        {
            category: "养生堂",
            channels: ["健康"]
        },
        {
            category: "私房话",
            channels: ["情感"]
        },
        {
            category: "汽车迷",
            channels: ["汽车"]
        },
        {
            category: "美食家",
            channels: ["美食"]
        },
        {
            category: "星座控",
            channels: ["星座"]
        },
        {
            category: "体育迷",
            channels: ["体育"]
        },
        {
            category: "考证党",
            channels: ["教育"]
        },
        {
            category: "古今通",
            channels: ["人文历史"]
        },
        {
            category: "宝宝控",
            channels: ["育儿"]
        },
        {
            category: "百事通",
            channels: ["家居", "生活百科"]
        }
    ];

})();
