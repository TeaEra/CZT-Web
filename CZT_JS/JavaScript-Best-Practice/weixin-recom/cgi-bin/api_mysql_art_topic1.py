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
#


def get_urls():
    fs_url = fs['url']
    res = list() 
    if not isinstance(fs_url, list):
        res.append(fs_url.value)
    else:
        for each_fs_url in fs_url:
            res.append(each_fs_url.value)
    return res


def get_articles():
    #
    type = WEIXIN_CHECK.get_type(fs)
    type = UTIL.get_str_in_gbk(type)
    #
    urls = get_urls()
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
        update_sql = "update " + table + " set topic1 = '%s' where url in (%s)"
        in_clause = ', '.join(list(map(lambda x: '%s', unquoted_urls)))
        update_sql = update_sql % (type, in_clause)
        cur.execute(update_sql, unquoted_urls)
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
