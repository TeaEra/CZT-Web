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
    temp_dir = "/search/chenzhengtong/weixin-recom/tempFiles/"
    #
    file = fs["files"]
    #
    res = dict()
    #
    if file.filename:
        #
        # file-name
        #fn = file.filename
        fn = "single.csv"
        fn = os.path.basename(fn)
        #
        # file-path
        full_path = temp_dir + fn
        #
        #
        if os.path.isfile(full_path):
            os.remove(full_path)
        #
        #
        chunk = file.file.read()
        open(full_path, 'wb').write(chunk)
        #
        #
        f = open(full_path)
        lines = f.readlines(100000)
        oi_list = list()
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
                    oi = temp_list[2].split(CONST.OPENID_PREFIX)[1]
                    oi_list.append(oi)
                #
                sql = "select count(*) as dup_num from t_account_manager where openid in "
                sql_in = ""
                for each_oi in oi_list[:-1]:
                    sql_in += "'" + each_oi + "',"
                sql_in += "'" + oi_list[-1] + "'"
                sql += "(" + sql_in + ")"
                #print sql
                all_data = UTIL.run_conn_select(cur, sql)
                res["count"] = all_data
                #
                cur.close()
                conn.close()
                #
                UTIL.append_result_ok(res)
            except Exception, e:
                #
                UTIL.append_result_error(res, e)
        #
    else:
        pass
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_file()))
