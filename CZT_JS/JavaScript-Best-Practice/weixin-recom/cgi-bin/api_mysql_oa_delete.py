#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
from UTIL import TE_CUSTOM
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


def get_res():
    #
    sql_where = ADMIN_OA.get_where_from_fs(fs)
    #
    res = dict()
    #
    try:
        conn, cur = ADMIN_OA.get_conn_for_mysql_oa()
        sql_delete = "delete from t_account_manager"
        #
        sql_delete += sql_where 
        #
        #print sql_delete
        TE_CUSTOM.run_sql(cur, sql_delete)
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
print(json.dumps(get_res()))
