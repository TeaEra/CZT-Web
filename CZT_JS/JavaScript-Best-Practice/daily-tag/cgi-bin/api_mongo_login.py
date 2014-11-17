#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
#
import pymongo


HOST = CONST.MONGO_HOST
PORT = CONST.MONGO_PORT

client = pymongo.MongoClient(HOST, PORT)
daily_tag = client.daily_tag
user = daily_tag.user
print user.find_one()
