#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
#
from datetime import datetime
import MySQLdb
import MySQLdb.cursors


'''
[USEFUL]
Decode string in gbk, then encode it in utf-8;
'''
def get_str_in_utf8(in_string):
    return in_string.decode("gbk", "ignore").encode("utf8")


'''
[USEFUL]
Decode string in utf8, then encode it in gbk;
'''
def get_str_in_gbk(in_string):
    return in_string.decode('utf8', 'ignore').encode('gbk')


'''
[USEFUL]
datetime for json;
'''
def get_datetime_for_json(in_dt):
    return in_dt.__str__()


'''
[USEFUL]
Decode a dict from gbk to utf8 if have strings in gbk
'''
def get_dict_in_utf8(in_dict):
    #
    out_dict = dict()
    #
    for each_key in in_dict.keys():
        each_value = in_dict[each_key]
        if isinstance(each_value, list):
            out_dict[each_key] = get_list_in_utf8(each_value)
        elif isinstance(each_value, dict):
            out_dict[each_key] = get_dict_in_utf8(each_value)
        elif isinstance(each_value, tuple):
            out_dict[each_key] = get_tuple_in_utf8(each_value)
        elif isinstance(each_value, str):
            out_dict[each_key] = get_str_in_utf8(each_value)
        elif isinstance(each_value, datetime):
            out_dict[each_key] = get_datetime_for_json(each_value)
        else:
            out_dict[each_key] = each_value
    #
    return out_dict


'''
[USEFUL]
Decode a list from gbk to utf8 if have strings in gbk
'''
def get_list_in_utf8(in_list):
    #
    out_list = list()
    #
    for each_value in in_list:
        if isinstance(each_value, list):
            out_list.append(get_list_in_utf8(each_value))
        elif isinstance(each_value, dict):
            out_list.append(get_dict_in_utf8(each_value))
        elif isinstance(each_value, tuple):
            out_list.append(get_tuple_in_utf8(each_value))
        elif isinstance(each_value, str):
            out_list.append(get_str_in_utf8(each_value))
        elif isinstance(each_value, datetime):
            out_list.append(get_datetime_for_json(each_value))
        else:
            out_list.append(each_value)
    #
    return out_list


'''
[USEFUL]
Decode a tuple from gbk to utf8 if have strings in gbk
'''
def get_tuple_in_utf8(in_tuple):
    #
    out_tuple = list() 
    #
    for each_value in in_tuple:
        if isinstance(each_value, list):
            out_tuple.append(get_list_in_utf8(each_value))
        elif isinstance(each_value, dict):
            out_tuple.append(get_dict_in_utf8(each_value))
        elif isinstance(each_value, tuple):
            out_tuple.append(get_tuple_in_utf8(each_value))
        elif isinstance(each_value, str):
            out_tuple.append(get_str_in_utf8(each_value))
        elif isinstance(each_value, datetime):
            out_tuple.append(get_datetime_for_json(each_value))
        else:
            out_tuple.append(each_value)
    #
    return tuple(out_tuple)


'''
'''
def get_mongo_weixin_articles():
    import pymongo
    HOST = CONST.MONGO_ARTICLE
    PORT = CONST.MONGO_DEFAULT_PORT
    #
    conn = pymongo.Connection(HOST, PORT)
    db = conn.WeiXinRecom
    coll = db.weixin_articles
    return conn, coll


'''
'''
def get_article_by_url(url, is_convert=True):
    #
    conn, coll = get_mongo_weixin_articles()
    #
    condition = {"url": url}
    curr_article = coll.find_one(condition)
    #
    conn.close()
    #
    # There's possibility result is None:
    if curr_article:
        if is_convert:
            return get_dict_in_utf8(curr_article)
        else:
            return curr_article
    return {} 


'''
'''
def verify_article_by_url(url, verify_res):
    #
    conn, coll = get_mongo_weixin_articles()
    #
    condition = {"url": url}
    res = coll.update(condition,  {"$set": {"is_public": verify_res}}, False, False)
    #
    conn.close()
    if res:
        return get_dict_in_utf8(res)
    return {}


'''
'''
def get_styled_dt(dt):
    return dt.strftime('%Y-%m-%d %H:%M:%S')


'''
'''
def get_styled_today():
    return datetime.today().strftime('%Y-%m-%d %H:%M:%S')


###############################################################################


class TE_CUSTOM(object):

    
    '''
    field_type:
      - 0 for int
      - 1 for string
    '''
    @staticmethod
    def get_sql_field(fs, field_name, field_type, operator="="):
        if fs.has_key(field_name):
            #
            # 0 for int
            if field_type == 0:
                value = fs[field_name].value
                return " %s=%s" % (field_name, value)
            #
            # 1 for string
            elif field_type == 1:
                value = fs[field_name].value
                if value != "NULL":
                    value = get_str_in_gbk(value)
                    return " %s='%s'" % (field_name, value)
                return " %s='%s'" % (field_name, "")
            #
            # TODO: for list
            #
            # TODO: for dt
        #
        return ""

    
    @staticmethod
    def get_sql_field_from_key(fs, key_name, field_name, field_type, operator="=", special_cases={}):
        if fs.has_key(key_name):
            #
            # 0 for int
            if field_type == 0:
                value = fs[key_name].value
                return " %s=%s" % (field_name, value)
            #
            # 1 for string
            elif field_type == 1:
                value = fs[key_name].value
                if value != "NULL":
                    #
                    for each_key in special_cases.keys():
                        if value == each_key:
                            return special_cases[each_key]
                    #
                    value = get_str_in_gbk(value)
                    return " %s='%s'" % (field_name, value)
                return " %s='%s'" % (field_name, "")
            #
            # TODO: for list
            #
            # TODO: for dt
        #
        return ""


    @staticmethod
    def get_sql_time_field(fs, key_name, field_name, oper):
        if fs.has_key(key_name):
            #
            value = fs[key_name].value
            #
            if oper == ">=":
                appendix = " 00:00:00"
            elif oper == "<=":
                appendix = " 23:59:59"
            #
            res = " unix_timestamp(%s) %s unix_timestamp('%s')"
            res = res % (field_name, oper, str(value) + appendix)
            return res
        #
        return ""


    @staticmethod
    def get_fs_value(
                fs, field_name, type=0, 
                is_utf8_to_gbk=False,
                is_gbk_to_utf8=False
            ):
        if fs.has_key(field_name):
            values = fs[field_name]
            if type == 0:
                val = values.value
                return val
            elif type == 1:
                val = values.value
                if val == "NULL":
                    return ""
                if is_utf8_to_gbk:
                    return get_str_in_gbk(val)
                if is_gbk_to_utf8:
                    return get_str_in_utf8(val)
                return val
            #
        return ""


    @staticmethod
    def get_sql_limit(num, offset=0):
        #
        sql_limit = " limit %s,%s"
        return sql_limit % (offset, num)


    @staticmethod
    def get_mysql_conn(host, user, pwd, db, charset):
        #
        conn = \
            MySQLdb.connect(
                host = host, 
                user = user, 
                passwd = pwd, 
                db = db, 
                charset = charset,
                cursorclass = MySQLdb.cursors.DictCursor
            )
        #
        cur = conn.cursor()
        #
        return conn, cur


    @staticmethod
    def run_sql(cur, sql):
        #
        cur.execute(sql)


    @staticmethod
    def get_list_from_fs(fs, key_name):
        #
        res_list = list()
        #
        if fs.has_key(key_name):
            values = fs[key_name]
            if not isinstance(values, list):
                res_list.append(values.value)
            else:
                for each_val in values:
                    res_list.append(each_val.value)
        #
        return res_list


###############################################################################


class WEIXIN_CHECK(object):


    @staticmethod
    def get_type(fs):
        topic1 = fs['type'].value
        if topic1 == "NULL":
            return ""
        return topic1


    @staticmethod
    def get_keywords(fs):
        keywords = TE_CUSTOM.get_fs_value(fs, "keywords", 1, is_utf8_to_gbk=True)
        return keywords


    @staticmethod
    def get_topic1(fs):
        topic1 = fs['topic1'].value
        if topic1 == "NULL":
            return ""
        return topic1


    @staticmethod
    def get_topic2(fs):
        topic2 = fs['topic2'].value
        if topic2 == "NULL":
            return ""
        return topic2


    @staticmethod
    def get_topic3(fs):
        topic3 = fs['topic3'].value
        if topic3 == "NULL":
            return ""
        return topic3


    @staticmethod
    def get_urls(fs):
        fs_url = fs['url']
        res = list() 
        if not isinstance(fs_url, list):
            res.append(fs_url.value)
        else:
            for each_fs_url in fs_url:
                res.append(each_fs_url.value)
        return res


    @staticmethod
    def get_title(fs):
        return fs['title'].value


    @staticmethod
    def get_status(fs):
        return fs['status'].value


    @staticmethod
    def get_readnum(fs):
        return fs['readnum'].value


    @staticmethod
    def get_enable_time(fs):
        return fs['enable_time'].value


    @staticmethod
    def get_disable_time(fs):
        return fs['disable_time'].value

    
    @staticmethod
    def get_sql_type(fs):
        return TE_CUSTOM.get_sql_field_from_key(fs, "type", "topic1", 1, special_cases={"-1": ""})


    @staticmethod
    def get_sql_status(fs):
        return TE_CUSTOM.get_sql_field(fs, "status", 0)


    # TODO: temporally finished;
    @staticmethod
    def get_sql_keywords(fs):
        if fs.has_key("keywords"):
            str_topic = fs["keywords"].value
            if str_topic != "NULL":
                topic_list = str_topic.split("|")
                like_list = list()
                for each_topic in topic_list:
                    #
                    formatted_topic = get_str_in_gbk(each_topic)
                    like_list.append("keywords like '%" + formatted_topic + "%'")
                #
                like_clause = " or ".join(like_list)
                like_clause = " (" + like_clause + ")"
                #
                return like_clause
        #
        return ""

    
    @staticmethod
    def get_sql_submitter(fs):
        if fs.has_key("submitter"):
            submitter = fs["submitter"].value
            if submitter != "NULL":
                res = " (user='%s' or user='%s')"
                res = res % (submitter, submitter + "@sogou-inc.com")
                return res
        #
        return ""


    @staticmethod
    def get_sql_pub_time_start(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "pub_time_start", "pub_time", ">=")
        return res


    @staticmethod
    def get_sql_pub_time_end(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "pub_time_end", "pub_time", "<=")
        return res


    @staticmethod
    def get_sql_create_time_start(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "create_time_start", "create_time", ">=")
        return res


    @staticmethod
    def get_sql_create_time_end(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "create_time_end", "create_time", "<=")
        return res


    @staticmethod
    def get_sql_modify_time_start(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "modify_time_start", "modify_time", ">=")
        return res


    @staticmethod
    def get_sql_modify_time_end(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "modify_time_end", "modify_time", "<=")
        return res


    @staticmethod
    def get_sql_start_time_start(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "start_time_start", "start_time", ">=")
        return res


    @staticmethod
    def get_sql_start_time_end(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "start_time_end", "start_time", "<=")
        return res


    @staticmethod
    def get_sql_end_time_start(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "end_time_start", "end_time", ">=")
        return res


    @staticmethod
    def get_sql_end_time_end(fs):
        res = TE_CUSTOM.get_sql_time_field(fs, "end_time_end", "end_time", "<=")
        return res


'''
'''
class ADMIN_WEIXIN_CHECK(object):


    @staticmethod
    def get_table():
        #
        table = CONST.MYSQL_ARTICLE_TABLE
        #
        return table


    @staticmethod
    def get_conn_for_mysql_art():
        #
        host = CONST.MYSQL_CWEB
        user = CONST.MYSQL_CWEB_USER
        pwd  = CONST.MYSQL_CWEB_PWD
        db   = CONST.MYSQL_DB_WEIXIN
        charset = CONST.MYSQL_DB_WEIXIN_CHARSET
        table = CONST.MYSQL_ARTICLE_TABLE
        #
        return TE_CUSTOM.get_mysql_conn(host, user, pwd, db, charset)

    
    @staticmethod
    def get_limit_from_fs(fs):
        if fs.has_key("arts_offset") and fs.has_key("arts_num"):
            #
            offset = fs["arts_offset"].value
            num = fs["arts_num"].value
            #
            return TE_CUSTOM.get_sql_limit(num, offset)
        return " limit 100"


    @staticmethod
    def get_where_from_fs(fs):
        #
        cond_list = list()
        #
        if fs.has_key("type"):
            cond_list.append(WEIXIN_CHECK.get_sql_type(fs))
        if fs.has_key("status"):
            cond_list.append(WEIXIN_CHECK.get_sql_status(fs))
        if fs.has_key("keywords"):
            cond_list.append(WEIXIN_CHECK.get_sql_keywords(fs))
        if fs.has_key("submitter"):
            cond_list.append(WEIXIN_CHECK.get_sql_submitter(fs))
        ###
        if fs.has_key("pub_time_start"):
            cond_list.append(WEIXIN_CHECK.get_sql_pub_time_start(fs))
        if fs.has_key("pub_time_end"):
            cond_list.append(WEIXIN_CHECK.get_sql_pub_time_end(fs))
        if fs.has_key("create_time_start"):
            cond_list.append(WEIXIN_CHECK.get_sql_create_time_start(fs))
        if fs.has_key("create_time_end"):
            cond_list.append(WEIXIN_CHECK.get_sql_create_time_end(fs))
        if fs.has_key("modify_time_start"):
            cond_list.append(WEIXIN_CHECK.get_sql_modify_time_start(fs))
        if fs.has_key("modify_time_end"):
            cond_list.append(WEIXIN_CHECK.get_sql_modify_time_end(fs))
        if fs.has_key("start_time_start"):
            cond_list.append(WEIXIN_CHECK.get_sql_start_time_start(fs))
        if fs.has_key("start_time_end"):
            cond_list.append(WEIXIN_CHECK.get_sql_start_time_end(fs))
        if fs.has_key("end_time_start"):
            cond_list.append(WEIXIN_CHECK.get_sql_end_time_start(fs))
        if fs.has_key("end_time_end"):
            cond_list.append(WEIXIN_CHECK.get_sql_end_time_end(fs))
        ###
        #
        valid_cond_list = list()
        for each in cond_list:
            if "=" in each:
                valid_cond_list.append(each)
        #
        if len(valid_cond_list) > 0:
            return " where" + " and".join(valid_cond_list)
        return ""


###############################################################################


def run_conn_select(cur, select_sql):
    #
    cur.execute(select_sql)
    all_data = cur.fetchall()
    #
    return all_data


def run_conn_update(cur, update_sql):
    #print update_sql
    #
    cur.execute(update_sql)


def append_result_ok(res):
    #
    res["status"] = 1
    res["message"] = "OK"


def append_result_error(res, e):
    #
    res["status"] = 0
    res["message"] = str(e)


'''
t_account_manager

- OA is 'official account' for short;
'''
class OA(object):


    @staticmethod
    def get_sql_status(fs):
        return TE_CUSTOM.get_sql_field(fs, "status", 0)

    
    @staticmethod
    def get_sql_id(fs):
        return TE_CUSTOM.get_sql_field(fs, "id", 0)


    @staticmethod
    def get_sql_openid(fs):
        return TE_CUSTOM.get_sql_field(fs, "openid", 1)


    @staticmethod
    def get_sql_main_type(fs):
        return TE_CUSTOM.get_sql_field(fs, "main_type", 1)


    @staticmethod
    def get_sql_sub_type(fs):
        return TE_CUSTOM.get_sql_field(fs, "sub_type", 1)


    @staticmethod
    def get_sql_level(fs):
        return TE_CUSTOM.get_sql_field(fs, "level", 0)

    
    @staticmethod
    def get_sql_title(fs):
        return TE_CUSTOM.get_sql_field(fs, "title", 1)


    @staticmethod
    def get_sql_values(fs):
        if fs.has_key("openid"):
            #
            openid_list = TE_CUSTOM.get_list_from_fs(fs, "openid")
            if len(openid_list) > 0:
                #
                fields = list()
                fields.append("openid")
                fields.append("main_type")
                fields.append("sub_type")
                fields.append("level")
                str_fields = ", ".join(fields)
                str_fields = "(" + str_fields + ")"
                #
                str_comb = " values"
                #
                each_sql = "('%s', '%s', '%s', %s)"
                #
                main_type = ""
                sub_type = ""
                level = "0"
                if fs.has_key("main_type"):
                    main_type = \
                        TE_CUSTOM.get_fs_value(
                            fs, "main_type", 1, is_utf8_to_gbk=True
                        )
                if fs.has_key("sub_type"):
                    sub_type = \
                        TE_CUSTOM.get_fs_value(
                            fs, "sub_type", 1, is_utf8_to_gbk=True
                        )
                if fs.has_key("level"):
                    level = TE_CUSTOM.get_fs_value(fs, "level", 0)
                #
                values_list = list()
                for each_openid in openid_list:
                    values_list.append(
                        each_sql % (each_openid, main_type, sub_type, level)
                    )
                #
                str_values = ", ".join(values_list)
                #
                return str_fields + str_comb + str_values
        #
        return ""



'''
Specified OA
'''
class ADMIN_OA(object):


    @staticmethod
    def get_conn_for_mysql_oa():
        #
        host = CONST.MYSQL_OA_HOST
        user = CONST.MYSQL_OA_USER
        pwd  = CONST.MYSQL_OA_PWD
        db   = CONST.MYSQL_OA_DB
        charset = CONST.MYSQL_OA_CHARSET
        table = CONST.MYSQL_OA_TABLE
        #
        conn = \
            MySQLdb.connect(
                host = host, 
                user = user, 
                passwd = pwd, 
                db = db, 
                charset = charset,
                cursorclass = MySQLdb.cursors.DictCursor
            )
        #
        cur = conn.cursor()
        return conn, cur


    @staticmethod
    def get_where_from_fs(fs):
        #
        cond_list = []
        #
        if fs.has_key("title"):
            cond_list.append(OA.get_sql_title(fs))
        #
        if fs.has_key("openid"):
            cond_list.append(OA.get_sql_openid(fs))
        #
        if fs.has_key("main_type"):
            cond_list.append(OA.get_sql_main_type(fs))
        #
        if fs.has_key("sub_type"):
            cond_list.append(OA.get_sql_sub_type(fs))
        #
        if fs.has_key("level"):
            cond_list.append(OA.get_sql_level(fs))
        #
        # time_start
        # time_end
        #
        if len(cond_list) > 0:
            return " where" + " and".join(cond_list)
        return ""
    

    @staticmethod
    def get_update_details_from_fs(fs):
        #
        set_list = []
        set_list.append(OA.get_sql_main_type(fs))
        set_list.append(OA.get_sql_sub_type(fs))
        set_list.append(OA.get_sql_level(fs))
        set_list.append(OA.get_sql_status(fs))
        #
        res_sql = ""
        res_sql += ",".join(set_list)
        #
        res_sql += " where" + OA.get_sql_id(fs)
        #
        return res_sql

    
    @staticmethod
    def get_limit_from_fs(fs):
        #
        oas_offset = fs["oas_offset"].value
        oas_per_page = fs["oas_per_page"].value
        #
        limit_sql = " limit %s,%s" % (oas_offset, oas_per_page)
        return limit_sql


    @staticmethod
    def get_insert_details_from_fs(fs):
        #
        sql_values = OA.get_sql_values(fs)
        #
        return sql_values


    @staticmethod
    def get_ui_sql(content_list):
        #
        cl = content_list
        #
        sql_ui = "insert into t_account_manager(main_type, title, openid, level) values ('%s', '%s', '%s', %s) on duplicate key update main_type='%s', title='%s', level=%s"
        #
        return sql_ui % (cl[0], cl[1], cl[2], cl[3], cl[0], cl[1], cl[3])
