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
    update_details = ADMIN_OA.get_update_details_from_fs(fs)
    #
    res = dict()
    res["oas"] = list()
    #
    try:
        conn, cur = ADMIN_OA.get_conn_for_mysql_oa()
        update_sql = "update t_account_manager set"
        #
        update_sql += update_details 
        #
        UTIL.run_conn_update(cur, update_sql)
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
