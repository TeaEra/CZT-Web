#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
from UTIL import WEIXIN_CHECK
from UTIL import ADMIN_WEIXIN_CHECK
#
import MySQLdb
import MySQLdb.cursors
import cgi
import cgitb
import urllib
import json
import copy


cgitb.enable()
fs = cgi.FieldStorage()


def get_articles():
    #
    sql_where = ADMIN_WEIXIN_CHECK.get_where_from_fs(fs)
    sql_limit = ADMIN_WEIXIN_CHECK.get_limit_from_fs(fs)
    #
    res = dict()
    res["articles"] = list()
    #
    try:
        conn, cur = ADMIN_WEIXIN_CHECK.get_conn_for_mysql_art()
        table = ADMIN_WEIXIN_CHECK.get_table()
        sql_select = "select * from " + table
        #
        sql_select += sql_where
        sql_select += " order by pub_time desc"
        sql_select += sql_limit
        #print sql_select
        #
        cur.execute(sql_select)
        all_data = cur.fetchall()
        for row in all_data:
            temp_row = copy.deepcopy(row)
            #
            res["articles"].append(UTIL.get_dict_in_utf8(temp_row))
        #
        '''
        '''
        cur.close()
        conn.close()
        #
        UTIL.append_result_ok(res)
    except Exception, e:
        #
        UTIL.append_result_error(res, e)
    #
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_articles()))
