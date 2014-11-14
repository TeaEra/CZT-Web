#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
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
host = CONST.MYSQL_APP_WEIXIN_CHECK_HOST
user = CONST.MYSQL_APP_WEIXIN_CHECK_USER
pwd  = CONST.MYSQL_APP_WEIXIN_CHECK_PWD
db   = CONST.MYSQL_APP_WEIXIN_CHEKC_DB
charset = CONST.MYSQL_APP_WEIXIN_CHECK_CHARSET
table = CONST.MYSQL_APP_WEIXIN_CHECK_TABLE


def get_type():
    return fs['type'].value


def get_articles():
    #
    type = get_type()
    #
    # The following convertion is important!!!
    type = UTIL.get_str_in_gbk(type)
    #
    res = dict()
    res['articles'] = list()
    #
    try:
        conn = \
            MySQLdb.connect(
                host = host, 
                user = user, 
                passwd = pwd, 
                db = db, 
                charset = charset,
                cursorclass = MySQLdb.cursors.DictCursor
            )
        cur = conn.cursor()
        fields = "*"
        select_sql = \
                "select " + fields \
                + " from ubs_black_app_weixin_check where type='%s'"
        #select_sql += " and sync_status=2"
        select_sql += " order by pub_time desc"
        select_sql += " limit 10"
        cur.execute(select_sql % (type))
        all_data = cur.fetchall()
        for row in all_data:
            temp_row = copy.deepcopy(row)
            #
            # Get other details from mongodb;
            url = temp_row['url'].encode("gbk")
            mongo_article = UTIL.get_article_by_url(url, is_convert=False)
            if mongo_article:
                #
                temp_row['img'] = mongo_article['img_list'][0]
                temp_row['topic1'] = mongo_article['topic1']
                temp_row['topic2'] = mongo_article['topic2']
                temp_row['topic3'] = mongo_article['topic3']
                #
                res['articles'].append(UTIL.get_dict_in_utf8(temp_row))
            #
        #
        cur.close()
        conn.close()
    except Exception, e:
        print "Can not Connect to mysql server"
    #
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_articles()))
