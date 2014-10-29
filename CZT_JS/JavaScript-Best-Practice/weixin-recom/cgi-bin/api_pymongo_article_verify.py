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


def get_url():
    fs_url = fs['url']
    return fs_url.value


def get_verify_res():
    if str(fs['verify_res'].value) == "True":
        return True
    return False


def verify_article(url, verify_res):
    #
    res = dict()
    #
    unquoted_url = urllib.unquote(url)
    unquoted_url = unquoted_url.replace("______", "&")
    #print unquoted_url
    res['verify_result'] = UTIL.verify_article_by_url(unquoted_url, verify_res)
    return res


print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(verify_article(get_url(), get_verify_res())))
