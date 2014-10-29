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


def get_mid():
    return fs['mid'].value


def get_channel_list():
    return fs['channel_list'].value


def get_request():
    #
    mid = get_mid()
    channel_list = get_channel_list()
    #
    req_info = '{"mid":"' + mid + '", "channel_list":"' + channel_list + '", "userinfo": {}}' 
    #req_info = '{"mid":' + mid + ', "channel_list":' + channel_list + '}' 
    #print req_info
    return urllib.quote('req=' + req_info)


def call_data():
    try:
        HOST = CONST.HOST
        conn = httplib.HTTPConnection(HOST)
        req = get_request()
        conn.request("POST", "/channel", req)
        resp = conn.getresponse()
        return resp.read()
    except Exception as e:
        return {'error': str(e)}


#
print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(call_data()))
