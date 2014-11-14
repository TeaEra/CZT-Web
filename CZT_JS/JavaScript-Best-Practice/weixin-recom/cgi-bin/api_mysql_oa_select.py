#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
from UTIL import ADMIN_OA
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


def get_oas():
    #
    sql_where = ADMIN_OA.get_where_from_fs(fs)
    sql_limit = ADMIN_OA.get_limit_from_fs(fs)
    #
    res = dict()
    res["oas"] = list()
    #
    try:
        conn, cur = ADMIN_OA.get_conn_for_mysql_oa()
        select_sql = "select * from t_account_manager"
        #
        select_sql += sql_where
        #
        select_sql += sql_limit
        all_data = UTIL.run_conn_select(cur, select_sql)
        #
        for row in all_data:
            res["oas"].append(UTIL.get_dict_in_utf8(row))
        #
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
print(json.dumps(get_oas()))
