#!/usr/bin/python
# _*_ coding: utf-8 _*_

import pymongo
import cgitb
import cgi
import json
#
import CONST
import UTIL


cgitb.enable()
fs = cgi.FieldStorage()
#
HOST = CONST.MONGO_USER_INFO
PORT = CONST.MONGO_DEFAULT_PORT


def get_mid():
    return fs['mid'].value


def get_user_info_by_id():
    #
    mid = get_mid()
    #
    connection = pymongo.Connection(HOST, PORT)
    #
    #db = connection.userDB
    #db = connection.AuserDB
    db = connection.userInfoDB
    #
    collection = db.user_info
    condition = {"_id" : mid}
    curr_user = collection.find_one(condition)
    #
    connection.close()
    #
    if curr_user:
        return UTIL.get_dict_in_utf8(curr_user)
    return {}


print "Content-Type: application/json; charset=utf-8"
print
print json.dumps(get_user_info_by_id())
