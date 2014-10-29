#!/usr/bin/python
# _*_ coding: utf-8 _*_

import cgitb
import cgi
import json
import pymongo
import urllib
#
import CONST
import UTIL


cgitb.enable()
fs = cgi.FieldStorage()
#
HOST = CONST.MONGO_ARTICLE
PORT = CONST.MONGO_DEFAULT_PORT


def get_urls():
    fs_url = fs['url']
    res = []
    if not isinstance(fs_url, list):
        res.append(fs_url.value)
    else:
        for each_fs_url in fs_url:
            res.append(each_fs_url.value)
    return res


def get_articles(urls):
    #
    res = dict()
    res['articles'] = list()
    #
    for each_url in urls:
        unquoted_each_url = urllib.unquote(each_url)
        res['articles'].append(UTIL.get_article_by_url(unquoted_each_url))
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(get_articles(get_urls())))
