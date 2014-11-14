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
import datetime


cgitb.enable()
fs = cgi.FieldStorage()
#


def get_articles():
    #
    enable_time = \
        datetime.datetime.fromtimestamp(
            int(WEIXIN_CHECK.get_enable_time(fs)) / 1000
        )
    disable_time = \
        datetime.datetime.fromtimestamp(
            int(WEIXIN_CHECK.get_disable_time(fs)) / 1000
        )
    #print enable_time.strftime('%Y-%m-%d %H:%M:%S')
    #print disable_time.strftime('%Y-%m-%d %H:%M:%S')
    enable_time = enable_time.strftime('%Y-%m-%d %H:%M:%S')
    disable_time = disable_time.strftime('%Y-%m-%d %H:%M:%S')
    modify_time = UTIL.get_styled_today()
    #
    title = WEIXIN_CHECK.get_title(fs)
    readnum = WEIXIN_CHECK.get_readnum(fs)
    status = WEIXIN_CHECK.get_status(fs)
    type = WEIXIN_CHECK.get_type(fs)
    #
    title = UTIL.get_str_in_gbk(title)
    type = UTIL.get_str_in_gbk(type)
    keywords = WEIXIN_CHECK.get_keywords(fs)
    #
    urls = WEIXIN_CHECK.get_urls(fs)
    unquoted_urls = list()
    for each_url in urls:
        unquoted_urls.append(urllib.unquote(each_url))
    #
    res = dict()
    #
    try:
        conn, cur = ADMIN_WEIXIN_CHECK.get_conn_for_mysql_art()
        table = ADMIN_WEIXIN_CHECK.get_table()
        #
        update_sql = "update " + table + " set keywords='%s', title='%s', read_num='%s', topic1='%s', status=%s, start_time='%s', end_time='%s', modify_time='%s' where url in (%s)"
        in_clause = ', '.join(list(map(lambda x: '%s', unquoted_urls)))
        update_sql = update_sql % (keywords, title, readnum, type, status, enable_time, disable_time, modify_time, in_clause)
        #
        #print update_sql
        cur.execute(update_sql, unquoted_urls)
        #
        cur.close()
        conn.close()
        #
        UTIL.append_result_ok(res)
        #
        res["appendix"] = {}
        res["appendix"]["start_time"] = enable_time
        res["appendix"]["end_time"] = disable_time
        res["appendix"]["modify_time"] = modify_time
    except Exception, e:
        #
        UTIL.append_result_error(res, e)
    #
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_articles()))
