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
    curr_date = str(curr_date)
    #time_type = 1
    #print curr_date
    #curr_date = "2014-11-15"
    #
    res = dict()
    #
    try:
        conn, cur = TE_DAILY_TAG.get_conn()
        table = TE_DAILY_TAG.get_table(time_type)
        #
        select_sql = "select 1 from " + table
        where_sql = " where unix_timestamp(time) >= unix_timestamp(%s) and unix_timestamp(time) <= unix_timestamp(%s)" % (curr_date + " 00:00:00", curr_date + " 23:59:59")
        select_sql += where_sql
        #
        #print select_sql
        cur.execute(select_sql)
        all_data = cur.fetchall()
        res["res"] = all_data
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