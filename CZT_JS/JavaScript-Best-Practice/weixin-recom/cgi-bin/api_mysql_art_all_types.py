#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
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
#


def get_articles():
    #
    res = dict()
    res["all_types"] = list()
    #
    try:
        conn, cur = ADMIN_WEIXIN_CHECK.get_conn_for_mysql_art()
        table = ADMIN_WEIXIN_CHECK.get_table()
        #
        select_sql = "select topic1 from " + table + " group by(topic1)"
        cur.execute(select_sql)
        #
        all_data = cur.fetchall()
        for row in all_data:
            res["all_types"].append(UTIL.get_dict_in_utf8(row))
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
print(json.dumps(get_articles()))
