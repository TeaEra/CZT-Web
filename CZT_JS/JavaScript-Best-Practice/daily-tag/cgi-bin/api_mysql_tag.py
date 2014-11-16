#!/usr/bin/python
# _*_ coding: utf-8 _*_

import UTIL
from UTIL import TE_DAILY_TAG
#
import cgi
import cgitb
import json

cgitb.enable()
fs = cgi.FieldStorage()
#


def get_res():
    #
    time_type = fs["time_type"].value
    curr_date = fs["curr_date"].value
    user = fs["user"].value
    #
    #time_type = 1
    #curr_date = "2014-11-15"
    #
    res = dict()
    #
    try:
        conn, cur = TE_DAILY_TAG.get_conn()
        table = TE_DAILY_TAG.get_table(time_type)
        #
        insert_sql = "insert into " + table + "(user, time)"
        insert_sql += " values ('%s', '%s')" % (user, curr_date)
        #
        print insert_sql
        #cur.execute(insert_sql)
        #
        cur.close()
        conn.close()
        #
        res["status"] = 0
        res["message"] = "ok"
    except Exception, e:
        #
        res["status"] = 1
        res["message"] = e
    #
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_res()))
