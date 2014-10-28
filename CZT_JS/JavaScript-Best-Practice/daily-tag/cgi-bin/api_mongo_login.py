#!/usr/bin/python
# _*_ coding: utf-8 _*_

import API_CONST
#
import pymongo


HOST = API_CONST.MONGO_HOST
PORT = API_CONST.MONGO_PORT

client = pymongo.MongoClient(HOST, PORT)
daily_tag = client.daily_tag
user = daily_tag.user
print user.find_one()
