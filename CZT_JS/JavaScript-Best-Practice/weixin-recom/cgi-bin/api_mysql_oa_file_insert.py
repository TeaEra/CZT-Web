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
import os


cgitb.enable()
fs = cgi.FieldStorage()


def get_file():
    #
    res = dict()
    #
    # file-path
    temp_dir = "/search/chenzhengtong/weixin-recom/tempFiles/"
    full_path = temp_dir + "single.csv"
    f = open(full_path)
    lines = f.readlines(100000)
    #
    format_list = ["main_type", "title", "url", "level"]
    #
    if not lines:
        print "error"
    else:
        try:
            #
            conn, cur = ADMIN_OA.get_conn_for_mysql_oa()
            #
            for each_line in lines:
                line = str.rstrip(each_line)
                temp_list = line.split(",")
                #
                content_list = list()
                content_list.append(
                    unicode(temp_list[0], "gbk").encode("gbk")
                )
                content_list.append(
                    unicode(temp_list[1], "gbk").encode("gbk")
                )
                content_list.append(
                    temp_list[2].split(CONST.OPENID_PREFIX)[1]
                )
                content_list.append(temp_list[3])
                #
                sql_ui = ADMIN_OA.get_ui_sql(content_list)
                #print sql_ui
                #
                cur.execute(sql_ui)
            #
            cur.close()
            conn.close()
            #
            UTIL.append_result_ok(res)
        except Exception, e:
            #
            UTIL.append_result_error(res, e)
    #
    if os.path.isfile(full_path):
        os.remove(full_path)
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_file()))
