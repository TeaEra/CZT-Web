#!/usr/bin/python
# _*_ coding: utf-8 _*_

import httplib
import urllib
import json
import cgitb


def get_request():
    req_info = '{"needcatlist": true, "mid": "22455", "action":1, "channel": "推荐", "channel_list": "收藏|娱乐|新闻"}'
    return urllib.quote('req=' + req_info.decode('gbk', 'ignore').encode('utf8'))

def call_data():
    HOST = "10.134.30.154:10173"
    conn = httplib.HTTPConnection(HOST)
    req = get_request()
    conn.request("POST", "/data", req)
    resp = conn.getresponse()
    return resp.read()

cgitb.enable()
print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(call_data()))

'''
print "Content-Type: text/plain; charset=gbk"
print
print(call_data().decode("utf8", "ignore").encode("gbk"))
#print call_data()
'''
