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

def get_action():
    return fs['action'].value

def get_link():
    return fs['link'].value

def get_title():
    return fs['title'].value

def get_appendix():
    return fs['appendix'].value

def get_pub_source():
    return fs['pub_source'].value

def get_channel():
    return fs['channel'].value

def get_img_list():
    img_list = fs['img']
    return img_list

def get_request():
    #
    mid = get_mid()
    action = get_action()
    link = get_link()
    title = get_title()
    appendix = get_appendix()
    channel = get_channel()
    img_list = get_img_list()
    pub_source = get_pub_source()
    #
    req_info = '{"mid":"' + mid  + '", "action":' + action + ', "target_link":"' + link + '", "target_title": "' + title + '", "pub_source": "' + pub_source + '", "channel":"' + channel + '", "appendix": "' + appendix + '", "img_list": '
    if isinstance(img_list, list):
        '''
        for each_img in img_list[:-1]:
            req_info += '"' +  each_img.value + '", '
        req_info += '"' + img_list[-1].value + '"'
        '''
        req_info += '"' + img_list[0].value + '"'
    else:
        req_info += '"' + img_list.value + '"'
    req_info += '}'
    #print req_info
    return urllib.quote('req=' + req_info)

def call_data():
    #HOST = "10.134.30.154:10173"
    #HOST = "weixin.appsearch.m.sogou.com"
    HOST = CONST.HOST
    conn = httplib.HTTPConnection(HOST)
    req = get_request()
    conn.request("POST", "/useract", req)
    resp = conn.getresponse()
    return resp.read()

'''
print fs['mid']
print fs['action']
print fs['link']
print fs['title']
print fs['appendix']
print fs['pub_source']
print get_pub_source()
print get_img_list()
print get_request()
'''

#
print "Content-Type: application/json; charset=utf-8"
print
print(json.dumps(call_data()))
