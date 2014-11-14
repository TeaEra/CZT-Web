/**
 * by chenzhengtong @ 2014-10-29
 */

(function () {
    "use strict";

    window.TEController = window.TEController || {};

    /**
     * Action:
     *   init navbar;
     */
    window.TEController.action_init_navbar = function () {
        //
        window.TEController.action_show_admin_navbar();
        //
        window.TEController.action_bind_admin_navbar();
        //
        // Other effects:
        window.TEController.add_loading_effect();
        window.TEController.add_scroll_top_effect();
    };

    /**
     * Action:
     *   show admin navbar;
     */
    window.TEController.action_show_admin_navbar = function () {
        $(window.TEIDS.ADMIN_NAVBAR).html(window.TETemplate.tpl_admin_navbar());
    };

    /**
     * Action:
     *   bind every button in navbar;
     */
    window.TEController.action_bind_admin_navbar = function () {
        //
        // 1st:
        $(window.TEIDS.ADMIN_BTN_VERIFY).bind(
            "click", 
            window.TEController.action_init_verify
        );
        //
        // 2nd:
        $(window.TEIDS.ADMIN_BTN_UMIS).bind(
            "click",
            window.TEController.action_init_umis
        );
        //
        // 6th:
        $(window.TEIDS.ADMIN_BTN_OFFICIAL_ACCOUNT).bind(
            "click", 
            window.TEController.action_init_official_account
        );
        //
        // Others:
        //
        // inverse
        $(window.TEIDS.ADMIN_NAVBAR_INVERSE).bind(
            "click",
            window.TEController.action_navbar_inverse
        );
    };

    /**
     */
    window.TEController.action_navbar_inverse = function () {
        $(window.TEIDS.ADMIN_NAVBAR_NAV).toggleClass("navbar-inverse");
        $(this).toggleClass("active");
    };

    /*************************************************************************/
    /*** verify START ***/

    /**
     * Action:
     *   init 'verify';
     *   the 1st module;
     */
    window.TEController.action_init_verify = function () {
        //
        window.objs.arts_offset = 0;
        window.objs.arts_per_page = 20;
        //
        // main-content of 'veriry'
        window.TEController.action_show_admin_main_content();
        //
        window.TEController.show_all_channels();
        //
        $(window.TEIDS.ADMIN_VERIFY_FILTER_BTN_SEARCH).bind(
            "click", 
            window.TEController.search_all_filter_conditions
        );
        //
        // First fetch when login;
        // Maybe should be disabled for effect;
        /*window.objs.admin_curr_channel = "HOT";
        window.TEController.action_api_umis_for_admin(
            window.objs.admin_curr_channel,
            window.TEController.sa_for_api_mysql_article_select
        );*/
        //
        // Clear pager:
        window.TEController.clear_pager();
    };

    /**
     * Action:
     *   show admin main content;
     */
    window.TEController.action_show_admin_main_content = function () {
        $(window.TEIDS.ADMIN_MAIN_CONTENT).html(
            window.TETemplate.tpl_admin_verify_filter()
            + window.TETemplate.tpl_admin_verify_article_list()
        );
        //
        $(window.TEIDS.ADMIN_VERIFY_FILTER_BTN_RESET).bind(
            "click", 
            window.TEController.action_reset_verify_filter
        );
        //
        $(window.TEIDS.ADMIN_VERIFY_BTN_BATCH_VERIFY).bind(
            "click",
            window.TEController.action_show_selected_num
        );
    };


    /**
     * Setter:
     *   show all channels in filter;
     */
    window.TEController.show_all_channels = function () {
        if (!window.objs.types) {
            window.TEController.action_api_mysql_get_all_types(
                window.TEController.action_success_get_all_types
            );
        }
        else {
            // No cache-way!!!
            window.TEController.action_api_mysql_get_all_types(
                window.TEController.action_success_get_all_types
            );
        }
    };

    /**
     * Action:
     *   get data from verify filter;
     */
    window.TEController.data_from_verify_filter = function () {
        //
        var channel =$(window.TEIDS.ADMIN_VERIFY_FILTER_CHANNEL).val();
        var status = $(window.TEIDS.ADMIN_VERIFY_FILTER_STATUS).val();
        var keywords = $(window.TEIDS.ADMIN_VERIFY_FILTER_KEY_WORD).val();
        var submitter = $(window.TEIDS.ADMIN_VERIFY_FILTER_SUBMITTER).val();
        var pub_time_start = $(window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_START).val();
        var pub_time_end = $(window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_END).val();
        var db_time_start = $(window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_START).val();
        var db_time_end = $(window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_END).val();
        var verify_time_start = $(window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_START).val();
        var verify_time_end = $(window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_END).val();
        var enable_time_start = $(window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_START).val();
        var enable_time_end = $(window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_END).val();
        var disable_time_start = $(window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_START).val();
        var disable_time_end = $(window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_END).val();
        //
        var info = {
            "channel": channel,
            "status": status,
            "keywords": keywords,
            "submitter": submitter,
            //
            "pub_time_start": pub_time_start,
            "pub_time_end": pub_time_end,
            "create_time_start": db_time_start,
            "create_time_end": db_time_end,
            "modify_time_start": verify_time_start,
            "modify_time_end": verify_time_end,
            "start_time_start": enable_time_start,
            "start_time_end": enable_time_end,
            "end_time_start": disable_time_start,
            "end_time_end": disable_time_end
        };
        //
        return info;
    };

    /**
     * Action:
     *   search all filter conditions;
     */
    window.TEController.search_all_filter_conditions = function () {
        //
        var info = window.TEController.data_from_verify_filter();
        var page_info = {
            "offset": 0,
            "per_page": window.objs.arts_per_page
        };
        //
        // select
        window.TEController.action_api_umis_for_admin(
            info,
            page_info,
            window.TEController.sa_for_api_mysql_article_select
        );
        //
        // count
        window.TEController.api_mysql_article_count(
            info,
            window.TEController.sa_for_api_mysql_article_count
        );
        //
        $(window.TEIDS.ADMIN_VERIFY_FILTER_SWITCH).click();
    };

    /**
     * Setter:
     *   reset filter conditions;
     */
    window.TEController.action_reset_verify_filter = function () {
        var channel_first_option = $(window.TEIDS.ADMIN_VERIFY_FILTER_CHANNEL + " option:first").val();
        $(window.TEIDS.ADMIN_VERIFY_FILTER_CHANNEL).val(channel_first_option);
        var status_first_option = $(window.TEIDS.ADMIN_VERIFY_FILTER_STATUS + " option:first").val();
        $(window.TEIDS.ADMIN_VERIFY_FILTER_STATUS).val(status_first_option);
        //
        $(window.TEIDS.ADMIN_VERIFY_FILTER_KEY_WORD).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_SUBMITTER).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_START).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_PUB_TIME_END).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_START).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_DB_TIME_END).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_START).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_VERIFY_TIME_END).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_START).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_ENABLE_TIME_END).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_START).val("");
        $(window.TEIDS.ADMIN_VERIFY_FILTER_DISABLE_TIME_END).val("");
    };

    /**
     * [umis]
     * API:
     *   ajax call api 'cgi-bin/api_umis.py';
     */
    window.TEController.action_api_umis_for_admin 
            = function (info, page_info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_select.py",
            type: "post",
            data: window.TEController.data_for_api_umis_for_admin(info, page_info),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };
    
    /**
     * Getter:
     */
    window.TEController.data_for_api_umis_for_admin = function (info, page_info) {
        //
        var type = info["channel"];
        var status = info["status"];
        var keywords= info["keywords"];
        var submitter = info["submitter"];
        var pub_time_start = info["pub_time_start"];
        var pub_time_end = info["pub_time_end"];
        var create_time_start = info["create_time_start"];
        var create_time_end = info["create_time_end"];
        var modify_time_start = info["modify_time_start"];
        var modify_time_end = info["modify_time_end"];
        var start_time_start = info["start_time_start"];
        var start_time_end = info["start_time_end"];
        var end_time_start = info["end_time_start"];
        var end_time_end = info["end_time_end"];
        //
        // compose data;
        var req_data_list = new Array();
        //
        req_data_list.push("type=" + type);
        status && parseInt(status)!==-1 ? req_data_list.push("status=" + status) : "";
        keywords ? req_data_list.push("keywords=" + keywords) : "";
        submitter ? req_data_list.push("submitter=" + submitter) : "";
        pub_time_start ? req_data_list.push("pub_time_start=" + pub_time_start) : "";
        pub_time_end ? req_data_list.push("pub_time_end=" + pub_time_end) : "";
        create_time_start ? req_data_list.push("create_time_start=" + create_time_start) : "";
        create_time_end ? req_data_list.push("create_time_end=" + create_time_end) : "";
        modify_time_start ? req_data_list.push("modify_time_start=" + modify_time_start) : "";
        modify_time_end ? req_data_list.push("modify_time_end=" + modify_time_end) : "";
        start_time_start ? req_data_list.push("start_time_start=" + start_time_start) : "";
        start_time_end ? req_data_list.push("start_time_end=" + start_time_end) : "";
        end_time_start ? req_data_list.push("end_time_start=" + end_time_start) : "";
        end_time_end ? req_data_list.push("end_time_end=" + end_time_end) : "";
        //
        // 2 fixed parameters
        if (Object.keys(page_info).length != 0) {
            req_data_list.push("arts_offset=" + page_info["offset"]);
            req_data_list.push("arts_num=" + page_info["per_page"]);
        }
        //
        var req_data = req_data_list.join("&");
        return req_data;
    };

    /**
     * SA:
     *   success function after action_api_umis_for_admin;
     */
    window.TEController.sa_for_api_mysql_article_select = function (data) {
        //
        window.objs.admin_articles = data["articles"];
        //
        window.TEController.action_show_admin_articles();
        //
        if ($(window.TEIDS.ADMIN_VERIFY_FILTER).hasClass("in")) {
            $(window.TEIDS.ADMIN_VERIFY_FILTER_SWITCH).click();
        }
        //
        // Scroll to top;
        window.scrollTo(0,0);
    };

    /**
     */
    window.TEController.admin_art_goto_func = function (page_info) {
        //
        var filter_conditions = window.TEController.data_from_verify_filter();
        //
        // select
        window.TEController.action_api_umis_for_admin(
            filter_conditions,
            page_info,
            window.TEController.sa_for_api_mysql_article_select
        );
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_article_count = function (data) {
        //
        window.objs.arts_curr_num = 0;
        window.objs.arts_total_num = data["count"][0]["total_num"];
        if (window.objs.arts_total_num > 0) {
            window.objs.arts_page_num = Math.ceil(
                window.objs.arts_total_num / window.objs.arts_per_page
            ) - 1;
        }
        else {
            window.objs.arts_page_num = 0;
        }
        //
        var info = {
            "curr_num": window.objs.arts_curr_num,
            "page_num": window.objs.arts_page_num,
            "per_page": window.objs.arts_per_page
        };
        //
        window.TEController.show_pager(
            info, 
            window.TEController.admin_art_goto_func
        );
    };

    /**
     * API:
     */
    window.TEController.api_mysql_article_count = function (info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_count.py",
            type: "post",
            data: window.TEController.data_for_api_umis_for_admin(info, {}),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };


    /**
     * Action:
     *   filter results according to conditions;
     */
    window.TEController.action_filter_detailed_articles = function (articles) {
        //
        var filtered_res = articles;
        //
        // TODO: by channel?
        //
        // by status;
        filtered_res = _.filter(filtered_res, function (each_res) {
            if (window.objs.filter_conditions["status"] === -1) {
                return true;
            }
            else if (window.objs.filter_conditions["status"] === 0) {
                return each_res["status"] === 0;
            }
            else if (window.objs.filter_conditions["status"] === 1) {
                return each_res["status"] === 1;
            }
            else if (window.objs.filter_conditions["status"] === 2) {
                return each_res["status"] === 2;
            }
            else {
                return false;
            }
        });
        //
        // by key_word_list;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var cond_key_word_list = window.objs.filter_conditions["key_word_list"];
            if (cond_key_word_list.length === 0) {
                return true;
            }
            var art_key_word_list = new Array();
            each_res["topic1"] ? art_key_word_list.push(each_res["topic1"]) : "";
            each_res["topic2"] ? art_key_word_list.push(each_res["topic2"]) : "";
            each_res["topic3"] ? art_key_word_list.push(each_res["topic3"]) : "";
            //
            // Strategy: at least one art-key-word in condition-key-word-list;
            for (var key_word_idx in art_key_word_list) {
                var temp_key_word = art_key_word_list[key_word_idx];
                if (_.indexOf(cond_key_word_list, temp_key_word) !== -1) {
                    return true;
                }
                continue;
            }
            return false;
        });
        //
        // by submitter;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var submitter = window.objs.filter_conditions["submitter"];
            if (!submitter) {
                return true;
            }
            if (each_res["user"]) {
                return each_res["user"].split("@sogou-inc.com")[0] === submitter;
            }
            return false;
        });
        //
        // by pub_time_start;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var pub_time_start = window.objs.filter_conditions["pub_time_start"];
            if (!pub_time_start) {
                return true;
            }
            if (each_res["pub_time"]) {
                return (new Date(each_res["pub_time"]).valueOf() >= new Date(pub_time_start).valueOf());
            }
            return false;
        });
        //
        // by pub_time_end;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var pub_time_end = window.objs.filter_conditions["pub_time_end"];
            if (!pub_time_end) {
                return true;
            }
            if (each_res["pub_time"]) {
                return (new Date(each_res["pub_time"]).valueOf() <= new Date(pub_time_end).valueOf());
            }
            return false;
        });
        //
        // by db_time_start;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var db_time_start = window.objs.filter_conditions["db_time_start"];
            if (!db_time_start) {
                return true;
            }
            if (each_res["create_time"]) {
                return (new Date(each_res["create_time"]).valueOf() >= new Date(db_time_start).valueOf());
            }
            return false;
        });
        //
        // by db_time_end;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var db_time_end = window.objs.filter_conditions["db_time_end"];
            if (!db_time_end) {
                return true;
            }
            if (each_res["create_time"]) {
                return (new Date(each_res["create_time"]).valueOf() <= new Date(db_time_end).valueOf());
            }
            return false;
        });
        //
        // by verify_time_start;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var verify_time_start = window.objs.filter_conditions["verify_time_start"];
            if (!verify_time_start) {
                return true;
            }
            if (each_res["modify_time"]) {
                return (new Date(each_res["modify_time"]).valueOf() >= new Date(verify_time_start).valueOf());
            }
            return false;
        });
        //
        // by verify_time_end;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var verify_time_end = window.objs.filter_conditions["verify_time_end"];
            if (!verify_time_end) {
                return true;
            }
            if (each_res["modify_time"]) {
                return (new Date(each_res["modify_time"]).valueOf() <= new Date(verify_time_end).valueOf());
            }
            return false;
        });
        //
        // by enable_time_start;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var enable_time_start = window.objs.filter_conditions["enable_time_start"];
            if (!enable_time_start) {
                return true;
            }
            if (each_res["start_time"]) {
                return (new Date(each_res["start_time"]).valueOf() >= new Date(enable_time_start).valueOf());
            }
            return false;
        });
        //
        // by enable_time_end;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var enable_time_end = window.objs.filter_conditions["enable_time_end"];
            if (!enable_time_end) {
                return true;
            }
            if (each_res["start_time"]) {
                return (new Date(each_res["start_time"]).valueOf() <= new Date(enable_time_end).valueOf());
            }
            return false;
        });
        //
        // by disable_time_start;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var disable_time_start = window.objs.filter_conditions["disable_time_start"];
            if (!disable_time_start) {
                return true;
            }
            if (each_res["end_time"]) {
                return (new Date(each_res["end_time"]).valueOf() >= new Date(disable_time_start).valueOf());
            }
            return false;
        });
        //
        // by disable_time_end;
        filtered_res = _.filter(filtered_res, function (each_res) {
            var disable_time_end = window.objs.filter_conditions["disable_time_end"];
            if (!disable_time_end) {
                return true;
            }
            if (each_res["end_time"]) {
                return (new Date(each_res["end_time"]).valueOf() <= new Date(disable_time_end).valueOf());
            }
            return false;
        });
        //
        return filtered_res;
    };

    /**
     * Action:
     *   show admin articles;
     */
    window.TEController.action_show_admin_articles = function () {
        //
        window.objs.filtered_articles = window.objs.admin_articles;
        //
        $(window.TEIDS.ADMIN_VERIFY_ARTICLE_LIST_CONTENT).html(
            window.TETemplate.tpl_admin_verify_article_list_content(
                window.objs.admin_articles
            )
        );
        //
        window.TEController.action_bind_all_checkbox();
        //
        $(window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_COMMIT).bind(
            "click", 
            window.TEController.action_click_batch_verify
        );
        //
        $("select[id^='id-admin-article-status-']").bind(
            "change",
            window.TEController.action_quick_verify_article
        );
        //
        window.TEController.action_bind_all_admin_channel_modal_commit();
        //
        //window.TEController.action_bind_all_admin_article_keyword();
        window.TEController.action_bind_all_admin_keyword_modal_commit();
        //
        window.TEController.action_bind_all_amdin_article_btn_modify();
        window.TEController.action_bind_all_admin_article_modal_commit();
        //
        $(window.TEIDS.ADMIN_VERIFY_SELECT_TIME).val("0");  // ???
        $(window.TEIDS.ADMIN_VERIFY_SELECT_TIME).bind(
            "change",
            window.TEController.action_select_article_time_type
        );
    };

    /**
     * Action:
     *   record every selected checkbox;
     */
    window.TEController.action_bind_all_checkbox = function () {
        //
        window.objs.checked_idx = new Array();
        _.forEach($("input[id^='id-admin-article-checkbox-']"), function (each_checkbox) {
            $(each_checkbox).bind("click", window.TEController.action_click_checkbox);
        });
    };

    /**
     * Action:
     *   record checkbox;
     */
    window.TEController.action_click_checkbox = function () {
        var curr_id = $(this).prop("id");
        var curr_idx = curr_id.split("id-admin-article-checkbox-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var index_of = _.indexOf(window.objs.checked_idx, curr_idx);
        if (index_of === -1) {
            window.objs.checked_idx.push(curr_idx);
        }
        else {
            window.objs.checked_idx.splice(index_of, 1);
        }
        console.log(window.objs.checked_idx);
    };

    /**
     * Setter:
     *   set the selected num;
     */
    window.TEController.action_show_selected_num = function () {
        if (window.objs.checked_idx) {
            //
            $(window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_NUM).html(window.objs.checked_idx.length);
        }
    };

    /**
     */
    window.TEController.get_data_for_api_mysql_article_verify = function (status, urls) {
        var str_data = "status=" + status;
        for (var url_idx in urls) {
            str_data += "&url=" + encodeURIComponent(urls[url_idx]);
        }
        return str_data;
    };

    /**
     * Success action:
     */
    window.TEController.sa_api_mysql_article_verify = function (status, idx_list) {
        //
        if ($(window.TEIDS.ADMIN_BATCH_VERIFY_MODAL).hasClass("in")) {
            $(window.TEIDS.ADMIN_VERIFY_BTN_BATCH_VERIFY).click();
        }
        //
        _.forEach(idx_list, function (idx) {
            $("#id-admin-article-status-" + idx).val(status);
            //
            // [very important]
            //   update data in front-end
            window.objs.admin_articles[idx]["status"] = parseInt(status);
        });
    };

    /**
     * API:
     *   batch updating status according to selected indexes;
     *   or quick updating according to the select-input;
     */
    window.TEController.action_api_mysql_article_verify = function (verify_status, urls, idx_list, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_verify.py",
            type: "post",
            data: window.TEController.get_data_for_api_mysql_article_verify(verify_status, urls),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(verify_status, idx_list);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Getter:
     *   prepare data;
     */
    window.TEController.get_data_for_api_mysql_article_type = function (type, urls) {
        var str_data = "type=" + type;
        for (var url_idx in urls) {
            str_data += "&url=" + encodeURIComponent(urls[url_idx]);
        }
        return str_data;
    };

    /**
     * Success action:
     */
    window.TEController.sa_api_mysql_article_type = function (type, idx_list) {
        //
        _.forEach(idx_list, function (idx) {
            //
            if ($("#id-admin-channel-modal-" + idx).hasClass("in")) {
                $("#id-admin-article-channel-" + idx).click();
            }
            //
            window.TEController.update_frontend_article_type(type, idx);
        });
    };

    /**
     * API:
     */
    window.TEController.action_api_mysql_article_type = function (type, urls, idx_list, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_topic1.py",
            type: "post",
            data: window.TEController.get_data_for_api_mysql_article_type(type, urls),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(type, idx_list);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Getter:
     *   prepare data;
     */
    window.TEController.get_data_for_api_mysql_article_keyword = function (keywords, urls) {
        var str_data = "keywords=" + (keywords == "" ? "NULL" : keywords);
        for (var url_idx in urls) {
            str_data += "&url=" + encodeURIComponent(urls[url_idx]);
        }
        return str_data;
    };

    /**
     * Success action:
     */
    window.TEController.sa_api_mysql_article_keyword = function (keywords, idx_list) {
        //
        _.forEach(idx_list, function (idx) {
            //
            if ($("#id-admin-keyword-modal-" + idx).hasClass("in")) {
                $("#id-admin-article-keyword-" + idx).click();
            }
            //
            window.TEController.update_frontend_article_keyword(keywords, idx);
        });
    };

    /**
     * API:
     */
    window.TEController.action_api_mysql_article_keyword = function (keywords, urls, idx_list, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_keywords.py",
            type: "post",
            data: window.TEController.get_data_for_api_mysql_article_keyword(keywords, urls),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(keywords, idx_list);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Getter:
     */
    window.TEController.get_data_for_api_mysql_article_modify = function (info_obj, urls) {
        var enable_time = info_obj["enable_time"];
        var disable_time = info_obj["disable_time"];
        var title = info_obj["title"];
        var readnum = info_obj["readnum"];
        var status = info_obj["status"];
        var type = info_obj["type"];
        var keywords = info_obj["keywords"];
        //
        var str_data = "";
        str_data += "title=" + title;
        str_data += "&readnum=" + readnum;
        str_data += "&status=" + status;
        str_data += "&type=" + type;
        str_data += "&keywords=" + keywords;
        //
        str_data += "&enable_time=" + enable_time;
        str_data += "&disable_time=" + disable_time;
        for (var url_idx in urls) {
            str_data += "&url=" + encodeURIComponent(urls[url_idx]);
        }
        return str_data;
    };

    /**
     * Success action:
     */
    window.TEController.sa_api_mysql_article_modify = function (info_obj, idx_list, data) {
        //
        _.forEach(idx_list, function (idx) {
            //
            if ($("#id-admin-article-modal-" + idx).hasClass("in")) {
                $("#id-admin-article-btn-modify-" + idx).click();
            }
            //
            // UPDATE
            var start_time = data["appendix"]["start_time"];
            var end_time = data["appendix"]["end_time"];
            var modify_time = data["appendix"]["modify_time"];
            window.objs.filtered_articles[idx]["start_time"] = start_time;
            window.objs.filtered_articles[idx]["end_time"] = end_time;
            window.objs.filtered_articles[idx]["modify_time"] = modify_time;
            //
            window.TEController.update_frontend_article(info_obj, idx, data);
        });
    };

    /**
     * API:
     */
    window.TEController.action_api_mysql_article_modify = function (info_obj, urls, idx_list, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_modify.py",
            type: "post",
            data: window.TEController.get_data_for_api_mysql_article_modify(info_obj, urls),
            dataType: "json",
            success: function (data, status, jqxhr) {
                if (data["status"] === 1) {
                    success_func(info_obj, idx_list, data);
                }
                else {
                    alert(data["message"]);
                }
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**************************************************************************/

    window.TEController.update_frontend_article_type = function (type, idx) {
        //
        $("#id-admin-article-channel-" + idx).html(type);
        //
        // [very important]
        //   update data in front-end
        _.forEach(window.objs.admin_articles, function (each_art) {
            if (each_art["id"] === window.objs.filtered_articles[idx]["id"]) {
                each_art["type"] = type;
            }
        });
    };

    window.TEController.update_frontend_article_keyword = function (keywords, idx) {
        //
        var keyword_html = "";
        var keyword_list = keywords ? keywords.split("|") : new Array();
        var keyword_valid_list = new Array();
        for (var keyword_idx in keyword_list) {
            var curr_keyword = keyword_list[keyword_idx];
            if (curr_keyword != "NULL") {
                keyword_html += '<div class="te-padding-bottom"><span class="label label-default">'
                    + keyword_list[keyword_idx]
                    + '</span></div>';
                //
                keyword_valid_list.push(curr_keyword);
            }
        }
        $("#id-admin-article-keyword-" + idx).html(keyword_list.length > 0 ? keyword_html : "无");
        //
        // [very important]
        //   update data in front-end
        window.objs.admin_articles[idx]["keywords"] = keywords;
        //
        $("#id-admin-keyword-modal-input-" + idx).val(keywords);
    };

    /**
     * Action:
     *   update status;
     */
    window.TEController.update_frontend_article_status = function (status, idx) {
        //
        $("#id-admin-article-status-" + idx).val(status);
        //
        // UPDATE
        window.objs.filtered_articles[idx]["status"] = parseInt(status);
    };

    window.TEController.update_frontend_article_title = function (title, idx) {
        //
        $("#id-admin-article-title-" + idx).html(title);
        $("#id-admin-keyword-modal-article-title-" + idx).html(title);
        $("#id-admin-channel-modal-article-title-" + idx).html(title);
        //
        // UPDATE
        window.objs.filtered_articles[idx]["title"] = title;
    };

    window.TEController.update_frontend_article_readnum = function (readnum, idx) {
        //
        $("#id-admin-article-readnum-" + idx).html(readnum);
        //
        // UPDATE
        window.objs.filtered_articles[idx]["read_num"] = parseInt(readnum);
    };

    window.TEController.update_frontend_article_time = function (curr_val, idx) {
        var title;
        var span;
        if (curr_val === "2") {
            title = "审核时间";
            span = window.TEController.get_time_for_html(
                new Date(window.objs.filtered_articles[idx]["modify_time"])
            );
        }
        else if (curr_val === "3") {
            title = "生效时间";
            span = window.TEController.get_time_for_html(
                new Date(window.objs.filtered_articles[idx]["start_time"])
            );
        }
        else if (curr_val === "4") {
            title = "失效时间";
            span = window.TEController.get_time_for_html(
                new Date(window.objs.filtered_articles[idx]["end_time"])
            );
        }
        $("#id-admin-article-time-title-" + idx).html(title);
        $("#id-admin-article-time-span-" + idx).html(span);
    };

    /**
     */
    window.TEController.update_frontend_article = function (info_obj, idx) {
        //
        var enable_time = info_obj["enable_time"];
        var disable_time = info_obj["disable_time"];
        var title = info_obj["title"];
        var readnum = info_obj["readnum"];
        var status = info_obj["status"];
        var type = info_obj["type"];
        var keywords = info_obj["keywords"];
        //
        window.TEController.update_frontend_article_type(type, idx);
        //
        window.TEController.update_frontend_article_keyword(keywords, idx);
        //
        window.TEController.update_frontend_article_status(status, idx);
        //
        window.TEController.update_frontend_article_title(title, idx);
        //
        window.TEController.update_frontend_article_readnum(readnum, idx);
        //
        var curr_val = $("#id-admin-verify-select-time").val();
        window.TEController.update_frontend_article_time(curr_val, idx);
    };

    /**************************************************************************/

    /**
     * Action:
     *   batch verify;
     */
    window.TEController.action_click_batch_verify = function () {
        //
        var status = $(window.TEIDS.ADMIN_VERIFY_BATCH_VERIFY_STATUS).val();
        var idx_list = window.objs.checked_idx;
        var urls = new Array();
        for (var idx_for_idx_list in idx_list) {
            var curr_idx = idx_list[idx_for_idx_list];
            urls.push(window.objs.filtered_articles[curr_idx]["url"]);
        }
        //
        window.TEController.action_api_mysql_article_verify(
            status,
            urls,
            idx_list,
            window.TEController.sa_api_mysql_article_verify
        );
    };

    /**
     * Action:
     *   single verify;
     */
    window.TEController.action_quick_verify_article = function () {
        //
        var status = $(this).val();
        var idx_list = new Array();
        var curr_idx = parseInt($(this).prop("id").split("id-admin-article-status-")[1]);
        idx_list.push(curr_idx);
        var urls = new Array();
        urls.push(window.objs.filtered_articles[curr_idx]["url"]);
        //
        window.TEController.action_api_mysql_article_verify(
            status,
            urls,
            idx_list,
            window.TEController.sa_api_mysql_article_verify
        );
    };

    /**
     * [channel/type modal]
     * Action:
     *   bind channel-modal-commit;
     */
    window.TEController.action_bind_all_admin_channel_modal_commit = function () {
        //
        _.forEach($("button[id^='id-admin-channel-modal-commit-']"), function (each_commit) {
            $(each_commit).bind("click", window.TEController.action_click_type_commit);
        });
    };

    /**
     * [channel/type modal]
     * Action:
     */
    window.TEController.action_click_type_commit = function () {
        var curr_idx = $(this).prop("id").split("id-admin-channel-modal-commit-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var type = $("#id-admin-channel-modal-type-" + curr_idx).val();
        var idx_list = new Array();
        idx_list.push(curr_idx);
        var urls = new Array();
        urls.push(window.objs.filtered_articles[curr_idx]["url"]);
        //
        window.TEController.action_api_mysql_article_type(
            type,
            urls,
            idx_list,
            window.TEController.sa_api_mysql_article_type
        );
    };

    /**
     * [keyword modal]
     * 
     */
    window.TEController.action_bind_all_admin_article_keyword = function () {
        //
        _.forEach($("#div[id^='id-admin-article-keyword-']"), function (each_keyword) {
            $(each_keyword).bind(
                "click",
                window.TEController.action_click_admin_article_keyword
            );
        });
    };

    /**
     * [keyword modal]
     */
    window.TEController.action_click_admin_article_keyword = function () {
        var curr_idx = $(this).prop("id").split("id-admin-article-keyword-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var art = window.objs.filtered_articles[curr_idx];
        var topic1 = art["topic1"] || "";
        var topic2 = art["topic2"] || "";
        var topic3 = art["topic3"] || "";
        var keyword_list = new Array();
        topic1 && topic1!="NULL" ? keyword_list.push(topic1) : "";
        topic2 && topic2!="NULL" ? keyword_list.push(topic2) : "";
        topic3 && topic3!="NULL" ? keyword_list.push(topic3) : "";
        var keyword_text = keyword_list.join("|");
        //
        $("#id-admin-keyword-modal-input-" + curr_idx).val(keyword_text);
    };


    /**
     * [keyword modal]
     * Action:
     */
    window.TEController.action_bind_all_admin_keyword_modal_commit = function () {
        //
        _.forEach($("button[id^='id-admin-keyword-modal-commit-']"), function (each_commit) {
            $(each_commit).bind("click", window.TEController.action_click_keyword_commit);
        });
    };

    /**
     * [keyword modal]
     * Action:
     */
    window.TEController.action_click_keyword_commit = function () {
        var curr_idx = $(this).prop("id").split("id-admin-keyword-modal-commit-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var keyword_text = $("#id-admin-keyword-modal-input-" + curr_idx).val();
        //
        var idx_list = new Array();
        idx_list.push(curr_idx);
        //
        var urls = new Array();
        urls.push(window.objs.filtered_articles[curr_idx]["url"]);
        //
        window.TEController.action_api_mysql_article_keyword(
            keyword_text,
            urls,
            idx_list,
            window.TEController.sa_api_mysql_article_keyword
        );
    };

    /**
     * [article modal]
     *   bind all;
     *   btn modify;
     */
    window.TEController.action_bind_all_amdin_article_btn_modify = function () {
        //
        _.forEach($("button[id^='id-admin-article-btn-modify-']"), function (each_btn) {
            $(each_btn).bind("click", window.TEController.action_click_article_btn);
        });
    };

    /**
     * [article modal]
     *   single;
     *   btn modify;
     */
    window.TEController.action_click_article_btn = function () {
        var curr_idx = $(this).prop("id").split("id-admin-article-btn-modify-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var art = window.objs.filtered_articles[curr_idx];
        //
        var status = String(art["status"]);
        var type = art["topic1"] === "" ? "NULL" : art["topic1"];
        var keywords = art["keywords"];
        //
        $("#id-admin-article-modal-status-" + curr_idx).val(status);
        $("#id-admin-article-modal-type-" + curr_idx).val(type);
        $("#id-admin-article-modal-keyword-" + curr_idx).val(keywords);
    };

    /**
     * [article modal]
     * Action:
     */
    window.TEController.action_bind_all_admin_article_modal_commit = function () {
        //
        _.forEach($("button[id^='id-admin-article-modal-commit-']"), function (each_commit) {
            $(each_commit).bind("click", window.TEController.action_click_article_commit);
        });
    };

    /**
     * [article modal]
     * Action:
     */
    window.TEController.action_click_article_commit = function () {
        var curr_idx = $(this).prop("id").split("id-admin-article-modal-commit-")[1];
        curr_idx = parseInt(curr_idx);
        //
        var enable_time = $("#id-admin-article-modal-enable-time-" + curr_idx).val();
        var disable_time = $("#id-admin-article-modal-disable-time-" + curr_idx).val();
        var title = $("#id-admin-article-modal-title-" + curr_idx).val();
        var readnum = $("#id-admin-article-modal-readnum-" + curr_idx).val();
        var status = $("#id-admin-article-modal-status-" + curr_idx).val();
        var type = $("#id-admin-article-modal-type-" + curr_idx).val();
        var keywords = $("#id-admin-article-modal-keyword-" + curr_idx).val();
        //
        var info_obj = {};
        info_obj["enable_time"] = enable_time ? new Date(enable_time).valueOf() : new Date().valueOf();
        info_obj["disable_time"] = disable_time ? new Date(disable_time).valueOf() : new Date().valueOf();
        // TODO: Date.UTC() ready to be used???
        info_obj["title"] = title;
        info_obj["readnum"] = parseInt(readnum);
        info_obj["status"] = parseInt(status);
        info_obj["type"] = (type === "" ? "NULL": type);
        info_obj["keywords"] = keywords;
        //
        var idx_list = new Array();
        idx_list.push(curr_idx);
        //
        var urls = new Array();
        urls.push(window.objs.filtered_articles[curr_idx]["url"]);
        //
        window.TEController.action_api_mysql_article_modify(
            info_obj, 
            urls, 
            idx_list, 
            window.TEController.sa_api_mysql_article_modify
        );
    };

    /**
     * Getter:
     *   get all status from selects, ready for sync;
     */

    /**
     * Action:
     *   sync all selected status;
     */

    /**
     * Action:
     *   clean out-dated data;
     */

    /**
     * [mysql]
     * SA:
     *   success action after api_mysql_get_all_types;
     */
    window.TEController.action_success_get_all_types = function (data) {
        //
        var all_types = data["all_types"];
        //
        var valid_types = new Array();
        for (var idx in all_types) {
            //
            var curr_type = all_types[idx]["topic1"];
            //
            // '' is also valid type;
            valid_types.push(curr_type === "" ? "NULL" : curr_type);
        }
        //
        window.objs.types = valid_types;
        //
        var from_list = window.objs.types;
        var out_html = "";
        //
        out_html += "<option value=\"-1\">all</option>";
        //
        for (var idx in from_list) {
            out_html += "<option value=\"" + from_list[idx] + "\">" + from_list[idx] + "</option>";
        }
        //
        $(window.TEIDS.ADMIN_VERIFY_FILTER_CHANNEL).html(out_html);
    };

    /**
     * [mysql]
     * API:
     *   ajax call api api_mysql_get_all_types;
     */
    window.TEController.action_api_mysql_get_all_types = function (success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_art_all_types.py",
            type: "post",
            data: "",
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Action:
     *   which type of time to be displayed;
     */
    window.TEController.action_select_article_time_type = function () {
        var curr_val = $(this).val();
        var curr_text = $("#"  + $(this).prop("id") + " option:selected").html();
        console.log(curr_val);
        console.log(curr_text);
        var time_title_prefix = "#id-admin-article-time-title-";
        var time_span_prefix = "#id-admin-article-time-span-";
        //
        _.forEach(window.objs.filtered_articles, function (each_art, idx) {
            //
            $(time_title_prefix + idx).html(curr_text);
            //
            var time;
            if (curr_val === "0") {
                time = each_art["pub_time"] ? new Date(each_art["pub_time"]) : "";
            }
            else if (curr_val === "1") {
                time = each_art["create_time"] ? new Date(each_art["create_time"]) : "";
            }
            else if (curr_val === "2") {
                time = each_art["modify_time"] ? new Date(each_art["modify_time"]) : "";
            }
            else if (curr_val === "3") {
                time = each_art["start_time"] ? new Date(each_art["start_time"]) : "";
            }
            else if (curr_val === "4") {
                time = each_art["end_time"] ? new Date(each_art["end_time"]) : "";
            }
            var time_html = time ? time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate() : "";
            $(time_span_prefix + idx).html(time_html);
        });
    };

    /**
     * Action:
     */
    window.TEController.get_val_for_dt_local = function (dt) {
        //
        var dt_obj = dt ? new Date(dt) : new Date();
        var year = dt_obj.getFullYear();
        var month = dt_obj.getMonth() + 1;
        var day = dt_obj.getDate();
        var hour = dt_obj.getHours();
        var min = dt_obj.getMinutes();
        //
        return year + "-" + (month<10 ? "0"+month : month) + "-" + (day<10 ? "0"+day : day) + "T" + (hour<10 ? "0"+hour : hour) + ":" + (min<10 ? "0"+min : min);
    };
    
    /**
     */
    window.TEController.get_time_for_html = function (time) {
        var time_html = time ? time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() : "";
        return time_html;
    };

    /*** verify END ***/
    /**************************************************************************/

    /**************************************************************************/
    /*** UMIS start ***/

    /**
     * Action:
     *   init 'UMIS';
     *   the 2nd module;
     */
    window.TEController.action_init_umis = function () {
        //
        // some settings;
        //
        // main-content;
        window.TEController.show_mc_umis();
        //
        // Clear pager;
        window.TEController.clear_pager();
    };

    /**
     * Show:
     *   main-content for umis;
     */
    window.TEController.show_mc_umis = function () {
        //
        $(window.TEIDS.ADMIN_MAIN_CONTENT).html(
            ""
        );
        //
        // Bind events;
    };

    /*** UMIS end ***/
    /**************************************************************************/

    /**************************************************************************/
    /*** official account START ***/

    /**
     * Action:
     *   init 'official account' management;
     *   the 6th module;
     */
    window.TEController.action_init_official_account = function () {
        //
        window.objs.oas_offset = 0;
        window.objs.oas_per_page = 20;
        //
        // mc for 'main-content'
        window.TEController.show_mc_official_account();
        //
        // Clear pager:
        window.TEController.clear_pager();
    };

    /**
     */
    window.TEController.show_mc_official_account = function () {
        $(window.TEIDS.ADMIN_MAIN_CONTENT).html(
            window.TETemplate.tpl_admin_oa_filter()
            + window.TETemplate.tpl_admin_oa_list()
        );
        //
        // Bind search;
        $(window.TEIDS.ADMIN_OA_FILTER_BTN_SEARCH).bind(
            "click",
            window.TEController.action_search_oa
        );
        //
        // Bind reset;
        $(window.TEIDS.ADMIN_OA_FILTER_BTN_RESET).bind(
            "click",
            window.TEController.action_reset_oa_filter
        );
        //
        // Bind add;
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_SWITCH).bind(
            "click",
            window.TEController.action_open_oa_add_modal
        );
        //
        // Bind add commit;
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_COMMIT).bind(
            "click",
            window.TEController.action_commit_oa_add_modal
        );
        //
        // Open add-files-modal;
        $(window.TEIDS.ADMIN_OA_ADD_FILES_SWITCH).bind(
            "click",
            window.TEController.action_open_add_files_modal
        );
        //
        // Bind add-files;
        $(window.TEIDS.ADMIN_OA_FILE_INPUT).bind(
            "change",
            window.TEController.action_oa_add_files
        );
        //
        // Bind add-files-commit;
        $(window.TEIDS.ADMIN_OA_ADD_FILES_COMMIT).bind(
            "click",
            window.TEController.action_oa_add_files_commit
        );
    };
    
    /**
     * Action:
     *   add modal;
     */
    window.TEController.action_open_oa_add_modal = function () {
        // 
        // Clear content;
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_OPENIDS).val("");
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_MAIN_TYPE).val("");
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_SUB_TYPE).val("");
        $(window.TEIDS.ADMIN_OA_ADD_MODAL_LEVEL).val("1");
    };
    
    /**
     * Action:
     *   commit add modal;
     */
    window.TEController.action_commit_oa_add_modal = function () {
        //
        var insert_data = window.TEController.data_from_oa_add_modal();
        if (insert_data === false || insert_data["openid_list"].length === 0) {
            alert("something wrong with openids");
        }
        else {
            if (
                window.TEController.action_oa_check_duplicate(
                    insert_data["openid_list"]
                )
                    ) {
                // 
                // Call api;
                window.TEController.api_mysql_oa_insert(
                    insert_data,
                    window.TEController.sa_for_api_mysql_oa_insert
                );
            }
        }
    };

    /**
     * Getter:
     *   data from oa-add-modal;
     */
    window.TEController.data_from_oa_add_modal = function () {
        //
        var openids = $(window.TEIDS.ADMIN_OA_ADD_MODAL_OPENIDS).val();
        var main_type = $(window.TEIDS.ADMIN_OA_ADD_MODAL_MAIN_TYPE).val();
        var sub_type = $(window.TEIDS.ADMIN_OA_ADD_MODAL_SUB_TYPE).val();
        var level = $(window.TEIDS.ADMIN_OA_ADD_MODAL_LEVEL).val();
        //
        if (openids === "") {
            return false;
        }
        else {
            var oi_in_list = openids.split("\n");
            var oi_list = new Array();
            for (var oi_idx in oi_in_list) {
                var oi = oi_in_list[oi_idx];
                if (oi !== "" 
                        && oi.slice(0, window.objs.OA_URL_PREFIX.length) == window.objs.OA_URL_PREFIX) {
                    oi_list.push(oi.split(window.objs.OA_URL_PREFIX)[1]);
                }
            }
            //
            var info = {
                "openid_list": oi_list,
                "main_type": main_type,
                "sub_type": sub_type,
                "level": level
            };
            return info;
        }
    };

    /**
     * Action:
     */
    window.TEController.action_search_oa = function () {
        //
        var filter_conditions = window.TEController.data_from_oa_filter();
        var page_info = {
            "offset": 0,
            "per_page": window.objs.oas_per_page
        };
        //
        // select
        window.TEController.api_mysql_oa_select(
            filter_conditions,
            page_info,
            window.TEController.sa_for_api_mysql_oa_select
        );
        //
        // count
        window.TEController.api_mysql_oa_count(
            filter_conditions,
            window.TEController.sa_for_api_mysql_oa_count
        );
    };

    /**
     * Action:
     */
    window.TEController.action_reset_oa_filter = function () {
        $(window.TEIDS.ADMIN_OA_FILTER_ID).val("");
        $(window.TEIDS.ADMIN_OA_FILTER_OPENID).val("");
        $(window.TEIDS.ADMIN_OA_FILTER_MAIN_TYPE).val("");
        $(window.TEIDS.ADMIN_OA_FILTER_SUB_TYPE).val("");
        $(window.TEIDS.ADMIN_OA_FILTER_LEVEL).val("-1");
        $(window.TEIDS.ADMIN_OA_FILTER_TIME_START).val("");
        $(window.TEIDS.ADMIN_OA_FILTER_TIME_END).val("");
    };

    /**
     * Show:
     */
    window.TEController.show_oas = function () {
        $(window.TEIDS.ADMIN_OA_LIST_CONTENT).html(
            window.TETemplate.tpl_admin_oa_list_content(
                window.objs.oas
            )
        );
        //
        // Bind all btn modify;
        window.TEController.action_bind_all_btn_modify();
        //
        // Bind all modify commit;
        window.TEController.action_bind_all_oa_modify_commit();
        //
        // Bind all btn delete;
        window.TEController.action_bind_all_btn_delete();
    };
    
    /**
     * OA filter;
     */
    window.TEController.data_from_oa_filter = function () {
        //
        var id = $(window.TEIDS.ADMIN_OA_FILTER_ID).val();
        var title = $(window.TEIDS.ADMIN_OA_FILTER_OPENID).val();
        var main_type = $(window.TEIDS.ADMIN_OA_FILTER_MAIN_TYPE).val();
        var sub_type = $(window.TEIDS.ADMIN_OA_FILTER_SUB_TYPE).val();
        var level = $(window.TEIDS.ADMIN_OA_FILTER_LEVEL).val();
        var time_start = $(window.TEIDS.ADMIN_OA_FILTER_TIME_START).val();
        var time_end = $(window.TEIDS.ADMIN_OA_FILTER_TIME_END).val();
        //
        var res = {
            "id": id,
            "title": title,
            "main_type": main_type,
            "sub_type": sub_type,
            "level": level,
            "time_start": time_start,
            "time_end": time_end
        };
        //
        return res;
    };

    /**
     * Getter:
     */
    window.TEController.data_for_api_mysql_oa_select 
            = function (filter_conditions, page_info) {
        //
        var id = filter_conditions["id"] 
        var title = filter_conditions["title"];
        var main_type = filter_conditions["main_type"];
        var sub_type = filter_conditions["sub_type"];
        var level = filter_conditions["level"];
        var time_start = filter_conditions["time_start"];
        var time_end = filter_conditions["time_end"];
        //
        // Compose the form-data for ajax;
        var req_data_list = new Array();
        id ? req_data_list.push("openid="+id) : "";
        title ? req_data_list.push("title="+title) : "";
        main_type ? req_data_list.push("main_type="+main_type) : "";
        sub_type ? req_data_list.push("sub_type="+sub_type) : "";
        level && level !== "-1" ? req_data_list.push("level="+level) : "";
        //
        // 2 fixed parameters
        if (Object.keys(page_info).length !== 0) {
            req_data_list.push("oas_offset=" + page_info["offset"]);
            req_data_list.push("oas_per_page=" + page_info["per_page"]);
        }
        //
        var req_data = req_data_list.join("&");
        //
        return req_data ? req_data : "me=me";  // Be quiet...
    };

    /**
     * SA
     */
    window.TEController.sa_for_api_mysql_oa_select = function (data) {
        //
        window.objs.oas = data["oas"];
        //
        window.TEController.show_oas();
        //
        if ($(window.TEIDS.ADMIN_OA_FILTER).hasClass("in")) {
            $(window.TEIDS.ADMIN_OA_FILTER_SWITCH).click();
        }
        //
        // Scroll to top;
        window.scrollTo(0,0);
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_select = 
            function (filter_conditions, page_info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_select.py",
            type: "post",
            data: window.TEController.data_for_api_mysql_oa_select(filter_conditions, page_info),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     */
    window.TEController.action_bind_all_btn_delete = function () {
        //
        //id-admin-oa-btn-delete-
        _.forEach(
            $("button[id^='id-admin-oa-btn-delete-']"),
            function (each_btn) {
                $(each_btn).bind(
                    "click",
                    window.TEController.action_click_btn_delete
                );
            }
        );
    };

    /**
     */
    window.TEController.action_click_btn_delete = function () {
        //
        //
        var curr_idx = $(this).prop("id").split("id-admin-oa-btn-delete-")[1];
        curr_idx = parseInt(curr_idx);
        var openid = window.objs.oas[curr_idx]["openid"];
        //
        var is_confirm = confirm("Sure to delete " + openid + " ?");
        //
        if (is_confirm == true) {
            //
            var info = {
                "idx": curr_idx,
                "openid": openid
            };
            //
            window.TEController.api_mysql_oa_delete(
                info,
                window.TEController.sa_for_api_mysql_oa_delete
            );
        }
    };

    /**
     */
    window.TEController.action_bind_all_btn_modify = function () {
        //
        //id-admin-oa-btn-modify-
        _.forEach(
            $("button[id^='id-admin-oa-btn-modify-']"), 
            function (each_btn) {
                $(each_btn).bind(
                    "click",
                    window.TEController.action_click_btn_modify
                );
            }
        );
    };

    /**
     */
    window.TEController.action_click_btn_modify = function () {
        //
        //
        var curr_idx = $(this).prop("id").split("id-admin-oa-btn-modify-")[1];
        curr_idx = parseInt(curr_idx);
        //
        window.TEController.show_oa_modal(curr_idx);
    };

    /**
     * Show:
     *   - OA modal
     */
    window.TEController.show_oa_modal = function (idx) {
        //
        var oa = window.objs.oas[idx];
        var main_type = oa["main_type"];
        var sub_type = oa["sub_type"];
        var level = String(oa["level"]);
        var status = String(oa["status"]);
        //
        $("#id-admin-oa-modal-main-type-" + idx).val(main_type);
        $("#id-admin-oa-modal-sub-type-" + idx).val(sub_type);
        $("#id-admin-oa-modal-level-" + idx).val(level);
        $("#id-admin-oa-modal-status-" + idx).val(status);
    };

    /**
     * Show:
     *   - OA content
     */
    window.TEController.show_oa_content = function (idx, data) {
        //
        $("#id-admin-oa-content-main-type-" + idx).html(data["main_type"]);
        $("#id-admin-oa-content-sub-type-" + idx).html(data["sub_type"]);
        $("#id-admin-oa-content-level-" + idx).html(data["level"]);
        $("#id-admin-oa-content-status-" + idx).html(data["status"]);
    };

    /**
     * Show:
     *   - pager;
     *   - bind events;
     */
    window.TEController.show_pager = function (info, goto_func) {
        //
        var curr_num = info["curr_num"];
        var page_num = info["page_num"];
        var per_page = info["per_page"];
        //
        $(window.TEIDS.ADMIN_PAGER).html(window.TETemplate.tpl_admin_pager(info));
        //
        $(window.TEIDS.ADMIN_PAGER_PREV).bind(
            "click",
            function () {
                window.TEController.action_pager_prev(info, goto_func);
            }
        );
        $(window.TEIDS.ADMIN_PAGER_NEXT).bind(
            "click",
            function () {
                window.TEController.action_pager_next(info, goto_func);
            }
        );
        //
        $(window.TEIDS.ADMIN_PAGER_CURR_NUM).bind(
            "keyup",
            function (e) {
                var code = e.keyCode || e.which;
                if (code == 13) {
                    var cn = parseInt($(this).val());
                    if (cn >= 1 && cn <= page_num + 1) {
                        window.TEController.action_pager_num(cn, info, goto_func);
                    }
                    else {
                        alert("wrong page number");
                    }
                }
            }
        );
    };

    /**
     */
    window.TEController.action_bind_all_oa_modify_commit = function () {
        //
        //id-admin-oa-modal-commit-
        _.forEach(
            $("button[id^='id-admin-oa-modal-commit-']"), 
            function (each_btn) {
                $(each_btn).bind(
                    "click",
                    window.TEController.action_click_oa_modify_commit
                );
            }
        );
    };

    /**
     */
    window.TEController.action_click_oa_modify_commit = function () {
        //
        //
        var curr_idx = $(this).prop("id").split("id-admin-oa-modal-commit-")[1];
        curr_idx = parseInt(curr_idx);
        //
        window.TEController.api_mysql_oa_update(
            curr_idx,
            window.TEController.data_from_oa_modal_modify(curr_idx),
            window.TEController.sa_for_api_mysql_oa_update
        );
    };

    /**
     * Getter:
     */
    window.TEController.data_for_api_mysql_oa_delete = function (info) {
        //
        var openid = info["openid"];
        //
        var res = "";
        res += "openid=" + openid;
        //
        return res;
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_delete = function (data, info) {
        //
        var idx = info["idx"];
        //
        $("#id-admin-oa-btn-delete-" + idx).closest("div.te-one-row").remove();
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_delete = function (info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_delete.py",
            type: "post",
            data: window.TEController.data_for_api_mysql_oa_delete(info),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data, info);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Getter:
     */
    window.TEController.data_for_api_mysql_oa_insert = function (info) {
        //
        var oi_list = info["openid_list"];
        var main_type = info["main_type"];
        var sub_type = info["sub_type"];
        var level = info["level"];
        //
        var res = "";
        for (var oi_idx in oi_list) {
            var oi = oi_list[oi_idx];
            res += "&openid=" + oi;
        }
        res += "&main_type=" + main_type;
        res += "&sub_type=" + sub_type;
        res += "&level=" + level;
        //
        return res;
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_insert = function (data) {
        //
        if ($(window.TEIDS.ADMIN_OA_ADD_MODAL).hasClass("in")) {
            $(window.TEIDS.ADMIN_OA_ADD_MODAL_SWITCH).click();
        }
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_insert = function (info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_insert.py",
            type: "post",
            data: window.TEController.data_for_api_mysql_oa_insert(info),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * Getter:
     */
    window.TEController.data_for_api_mysql_oa_update_type = function () {
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_update_type = function () {
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_update_type = function () {
    };

    /**
     * Pre-getter;
     */
    window.TEController.data_from_oa_modal_modify = function (idx) {
        var main_type = $("#id-admin-oa-modal-main-type-" + idx).val();
        var sub_type = $("#id-admin-oa-modal-sub-type-" + idx).val();
        var level = $("#id-admin-oa-modal-level-" + idx).val();
        var status = $("#id-admin-oa-modal-status-" + idx).val();
        //
        var res = {
            "main_type": main_type,
            "sub_type": sub_type,
            "level": level,
            "status": status
        };
        return res;
    };

    /**
     * Getter:
     */
    window.TEController.data_for_api_mysql_oa_update = function (idx, modal_data) {
        //
        var oa = window.objs.oas[idx];
        var id = oa["id"];
        //
        var main_type = modal_data["main_type"];
        var sub_type = modal_data["sub_type"];
        var level = modal_data["level"];
        var status = modal_data["status"];
        //
        var res = "";
        res += "&id=" + (id ? id : "NULL");
        res += "&main_type=" + (main_type ? main_type : "NULL");
        res += "&sub_type=" + (sub_type ? sub_type : "NULL");
        res += "&level=" + (level ? level : "NULL");
        res += "&status=" + (status ? status : "NULL");
        //
        return res.substring(1, res.length);
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_update = function (idx, modal_data) {
        //
        // Close modal
        if ($("#id-admin-oa-modal-" + idx).hasClass("in")) {
            $("#id-admin-oa-btn-modify-" + idx).click();
        }
        //
        // Only update in window.obj.oas
        window.objs.oas[idx]["main_type"] = modal_data["main_type"];
        window.objs.oas[idx]["sub_type"] = modal_data["sub_type"];
        window.objs.oas[idx]["level"] = parseInt(modal_data["level"]);
        window.objs.oas[idx]["status"] = parseInt(modal_data["status"]);
        // 
        // Need some action to update the html in content???
        window.TEController.show_oa_content(idx, modal_data);
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_update = function (idx, modal_data, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_update.py",
            type: "post",
            data: window.TEController.data_for_api_mysql_oa_update(idx, modal_data),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(idx, modal_data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_count = function (data) {
        //
        window.objs.oas_curr_num = 0;
        window.objs.oas_total_num = data["count"][0]["total_num"];
        if (window.objs.oas_total_num > 0) {
            window.objs.oas_page_num = Math.ceil(
                window.objs.oas_total_num / window.objs.oas_per_page
            ) - 1;
        }
        else {
            window.objs.oas_page_num = 0;
        }
        //
        var info = {
            "curr_num": window.objs.oas_curr_num,
            "page_num": window.objs.oas_page_num,
            "per_page": window.objs.oas_per_page
        };
        //
        window.TEController.show_pager(
            info, 
            window.TEController.admin_oa_goto_func
        );
    };

    /**
     * API:
     *   count;
     */
    window.TEController.api_mysql_oa_count = 
            function (filter_conditions, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_count.py",
            type: "post",
            data: window.TEController.data_for_api_mysql_oa_select(filter_conditions, {}),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     */
    window.TEController.admin_oa_goto_func = function (page_info) {
        //
        var filter_conditions = window.TEController.data_from_oa_filter();
        //
        // select
        window.TEController.api_mysql_oa_select(
            filter_conditions,
            page_info,
            window.TEController.sa_for_api_mysql_oa_select
        );
    };

    /**
     * SA
     */
    window.TEController.sa_for_api_mysql_oa_check_duplicate 
            = function (data, info) {
        //
        var dup_check = data["count"][0]["dup_check"];
        dup_check = parseInt(dup_check);
        //
        if (dup_check !== 0) {
            var openid = info["openid"];
            window.objs.res_check_duplicate.push(openid);
        }
    };

    /**
     * API
     */
    window.TEController.api_mysql_oa_check_duplicate 
            = function (info, success_func) {
        $.ajax({
            url: "cgi-bin/api_mysql_oa_check_duplicate.py",
            type: "post",
            //
            // Not async
            async: false,
            //
            // PAT: fortunatelly, this could be re-used here;
            data: window.TEController.data_for_api_mysql_oa_delete(info),
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data, info);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
    };

    /**
     */
    window.TEController.action_oa_check_duplicate = function (openid_list) {
        //
        window.objs.res_check_duplicate = new Array();
        //
        for (var oi_idx in openid_list) {
            //
            var temp_info = {
                "openid": openid_list[oi_idx]
            };
            //
            window.TEController.api_mysql_oa_check_duplicate(
                temp_info,
                window.TEController.sa_for_api_mysql_oa_check_duplicate
            );
        }
        //
        if (window.objs.res_check_duplicate.length > 0) {
            var res = "";
            for (var res_idx in window.objs.res_check_duplicate) {
                var oi = window.objs.res_check_duplicate[res_idx];
                res += oi + "\n";
            }
            alert("Duplicate(s):\n" + res);
            return false;
        }
        return true;
    };

    /**
     */
    window.TEController.action_open_add_files_modal = function () {
        //
        // Reset input-with-type-file;
        $(window.TEIDS.ADMIN_OA_FILE_INPUT).val("");
        //
        // Clear file-name;
        $(window.TEIDS.ADMIN_OA_FILES).html("");
    };


    /**
     */
    window.TEController.action_oa_add_files = function () {
        //
        //console.log($(window.TEIDS.ADMIN_OA_FILE_INPUT)[0].files);
        //
        var files = $(window.TEIDS.ADMIN_OA_FILE_INPUT)[0].files;
        for (var file_idx = 0; file_idx < files.length; ++file_idx) {
            var file = files[file_idx];
            $(window.TEIDS.ADMIN_OA_FILES).append(files[file_idx]["name"] + "<br />");
        }
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_file_insert = function (data) {
        //
        // Close modal
        if ($(window.TEIDS.ADMIN_OA_ADD_FILES_MODAL).hasClass("in")) {
            $(window.TEIDS.ADMIN_OA_ADD_FILES_SWITCH).click();
        }
        //
        // TODO: update html and cache???
    };
    
    /**
     * API:
     */
    window.TEController.api_mysql_oa_file_insert = function (success_func) {
        //
        $.ajax({
            url: "cgi-bin/api_mysql_oa_file_insert.py",
            type: "post",
            data: "",
            dataType: "json",
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {}
        });
    };

    /**
     * Action:
     */
    window.TEController.action_oa_add_files_commit = function () {
        //
        var formData = window.TEController.data_from_input_file();
        //
        window.TEController.action_file_cdup(
            formData
        );
        //
        var is_confirm = confirm("Duplicate nums: " + window.objs.file_dup_num + ", sure to load?");
        if (is_confirm == true) {
            //
            window.TEController.api_mysql_oa_file_insert(
                window.TEController.sa_for_api_mysql_oa_file_insert
            );
        }
        else {
        }
    };

    /**
     */
    window.TEController.data_from_input_file = function () {
        //
        var formData = new FormData($(window.TEIDS.ADMIN_OA_FILE_FORM)[0]);
        //
        return formData;
    };

    /**
     * SA:
     */
    window.TEController.sa_for_api_mysql_oa_file_cdup = function (data) {
        //
        console.log(data);
        //
        window.objs.file_dup_num = data["count"][0]["dup_num"];
    };

    /**
     * API:
     */
    window.TEController.api_mysql_oa_file_cdup = function (formData, success_func) {
        //
        $.ajax({
            url: "cgi-bin/api_mysql_oa_file_cdup.py",
            type: "post",
            data: formData,
            async: false,
            //
            cache: false,
            contentType: false,
            processData: false,
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                return myXhr;
            },
            //
            success: function (data, status, jqxhr) {
                success_func(data);
            },
            error: function (jqxhr, status, error) {
                alert(error);
            }
        });
        /**/
    };

    /**
     */
    window.TEController.action_file_cdup = function (formData) {
        //
        window.TEController.api_mysql_oa_file_cdup(
            formData,
            window.TEController.sa_for_api_mysql_oa_file_cdup
        );
        //
    };

    /*** official account END   ***/
    /*************************************************************************/


    /*************************************************************************/
    /*** Common components ***/

    /**
     */
    window.TEController.action_pager_prev = function (info, goto_func) {
        //
        var new_info = {
            "curr_num": info["curr_num"] - 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };

    /**
     */
    window.TEController.action_pager_next = function (info, goto_func) {
        //
        var new_info = {
            "curr_num": info["curr_num"] + 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };

    /**
     */
    window.TEController.action_pager_num = function (cn, info, goto_func) {
        //
        var new_info = {
            "curr_num": cn - 1,
            "page_num": info["page_num"],
            "per_page": info["per_page"]
        };
        //
        window.TEController.action_pager_goto(new_info, goto_func);
    };

    /**
     */
    window.TEController.action_pager_goto = function (new_info, goto_func) {
        //
        var curr_num = new_info["curr_num"];
        var page_num = new_info["page_num"];
        var per_page = new_info["per_page"];
        //
        // new offset
        var page_info = {
            "offset": curr_num * per_page,
            "per_page": per_page
        };

        //
        goto_func(page_info);

        //
        window.TEController.show_pager(new_info, goto_func);
    };
    
    /**
     */
    window.TEController.clear_pager = function () {
        $(window.TEIDS.ADMIN_PAGER).html("");
    };

    /*** ***/
    /*************************************************************************/

})();
