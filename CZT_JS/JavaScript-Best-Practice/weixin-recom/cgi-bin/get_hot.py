#!/usr/bin/python
# _*_ coding: utf-8 _*_

import os, sys, string
import pymongo
import time
import cgitb


def GetHot():
    connection = pymongo.Connection('10.134.37.31', 27012)
    db = connection.WeiXinRecom
    collection = db.weixin_articles

    condition = {"read_num" : {"$gt":1000 }}
    for article in collection.find({"read_num" : {"$gt":100}}, ["url", "title",  "read_num", "summary", "account"]).sort("read_num", pymongo.DESCENDING).limit(10):
        url = article["url"]
        title = article["title"]
        summary = article["summary"]
        read_num = 0
        if article.has_key("read_num"):
            read_num = article["read_num"]
        account = article["account"]

        #out_line = "%s\t%s\t%s\t%s\t%d" % (url, title, summary, account, read_num)
        out_line = "%s\t%s\t%s\t%s\t%d" % (url, get_str_in_utf8(title), get_str_in_utf8(summary), get_str_in_utf8(account), read_num)
        print out_line
    connection.close()

def get_str_in_utf8(in_string):
    return in_string.decode("gbk", "ignore").encode("utf8")

cgitb.enable()

#print "Content-Type: text/plain; charset=gbk"
#print
GetHot()
