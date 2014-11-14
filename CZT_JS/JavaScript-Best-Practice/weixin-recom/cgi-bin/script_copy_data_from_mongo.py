#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
import UTIL
#
import MySQLdb
import MySQLdb.cursors


#
host = CONST.MYSQL_APP_WEIXIN_CHECK_HOST
user = CONST.MYSQL_APP_WEIXIN_CHECK_USER
pwd  = CONST.MYSQL_APP_WEIXIN_CHECK_PWD
db   = CONST.MYSQL_APP_WEIXIN_CHEKC_DB
charset = CONST.MYSQL_APP_WEIXIN_CHECK_CHARSET
table = CONST.MYSQL_APP_WEIXIN_CHECK_TABLE


def copy_data():
    try:
        conn = MySQLdb.connect(host=host, user=user, passwd=pwd, db=db, charset=charset, cursorclass=MySQLdb.cursors.DictCursor)
        cur = conn.cursor()
        cur2 = conn.cursor()
        select_sql = "select url from ubs_black_app_weixin_check"
        #
        '''
        cond_sql = " where url='http://mp.weixin.qq.com/s?__biz=MzA5NDM2MTUzOA==&amp;mid=200642399&amp;idx=3&amp;sn=6ab1a91b8171279279f6dc58f842c673&amp;3rd=MzA3MDU4NTYzMw==&amp;scene=6#rd'"
        select_sql += cond_sql
        '''
        #
        cur.execute(select_sql)
        all_data = cur.fetchall()
        #
        data_count = 0
        test_count = 0
        for row in all_data:
            data_count += 1
            if data_count % 1000 == 0:
                print ">>>Already scanned: " + str(data_count)
            url=row['url'].encode("gbk")
            mongo_article = UTIL.get_article_by_url(url, is_convert=False)
            if mongo_article:
                test_count += 1
                #
                img = mongo_article['img_list'][0]
                topic1 = mongo_article['topic1']
                topic2 = mongo_article['topic2']
                topic3 = mongo_article['topic3']
                #
                update_sql = "update ubs_black_app_weixin_check set img='%s', topic1='%s', topic2='%s', topic3='%s' where url='%s'"
                cur2.execute(update_sql % (img, topic1, topic2, topic3, url))
        #
        print data_count
        print test_count
        #
        cur.close()
        conn.close()
    except Exception, e:
        #print "Can not connect to mysql server"
        print e

copy_data()
