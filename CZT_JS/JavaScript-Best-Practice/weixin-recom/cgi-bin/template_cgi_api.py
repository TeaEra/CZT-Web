#!/usr/bin/python
# _*_ coding: utf-8 _*_

import httplib
import urllib
import json
import cgitb
import cgi
import json
import sys
#
import CONST

cgitb.enable()
fs = cgi.FieldStorage()

def get_keys():
    return ",".join(fs.keys())

def get_channel():
    return fs['channel'].value


'''
Prepare the request data;
'''
def get_data_for_request():
    #
    channel = get_channel()
    #
    req_info = '{"channel": "' + channel + '"}' 
    #print req_info
    return urllib.quote('req=' + req_info)

'''
Call api to get result;
'''
def call_api_get_result():
    HOST = CONST.HOST
    conn = httplib.HTTPConnection(HOST)
    req = get_data_for_request()
    conn.request("POST", "/umis_sogou_zxc0", req)
    resp = conn.getresponse()
    return resp.read()

#
print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(call_api_get_result()))
