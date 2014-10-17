#coding=gbk
import os
import sys
import httplib
import time
import re
import multiprocessing
import urllib
import traceback
import hashlib
import random

#HOST="127.0.0.1:10171"
#HOST="10.10.122.140:10171"
HOST = "10.134.30.154:10171"


ProcessNum = 10

yyids = [1413353827195]

rnd=lambda x : x[random.randint(0, len(x) - 1)]

act = ['1', '0', '1', '2']

type = ['热点', '鸡汤', '健康']


if len(sys.argv) < 2:
	print "Missing yyidfile"

'''
for line in open(sys.argv[1]):
	yyids.append(line.strip('\n'))
'''

def compose():
	yyid = rnd(yyids)
	action = rnd(act)
	#reqinfo='{"needcatlist":true, "mid":"512334cc", "action":6, "channel":"心灵鸡汤", "target_link":"www.baidu.com", "target_title":"你好","appendix":"1234", "channel_list":"社会|娱乐|尼玛"}'
	#reqinfo='{"needcatlist":true, "mid":"39d1863365022474632", "action":6, "channel":"热点", "target_link":"www.baidu.com", "target_title":"你好", "img_list":"1234", "pub_source":"123",  "appendix":"1234", "channel_list":"社会|娱乐|尼玛"}'
	reqinfo='{"needcatlist":true, "mid":"dce4358142034122455", "action":1, "channel":"热点", "target_link":"www.baidu.com", "target_title":"你好", "img_list":"1234", "pub_source":"123",  "appendix":"体育", "channel_list":"收藏|娱乐|新闻"}'
	return urllib.quote('req=' + reqinfo.decode('gbk', 'ignore').encode('utf8'))


def compose2():
	yyid = rnd(yyids)
	action = rnd(act)
	reqinfo='{\"needcatlist\":true, "mid":"12334", "action":1, "channel":"搞笑"}'
	return urllib.quote('req=' + reqinfo.decode('gbk').encode('utf8'))

delmPat = re.compile(r'[\r\n]+')
def pressure():
	#print request
	conn = httplib.HTTPConnection(HOST)
	request = compose()
	'''
	conn.request("POST", "/data", request)
	handler = conn.getresponse()
	#print handler.read().decode('utf8').encode('gbk')
	print handler.read()
	conn.request("POST", "/useract", request)
	handler = conn.getresponse()
	print handler.read().decode('utf8').encode('gbk')
	conn.request("POST", "/channel", request)
	handler = conn.getresponse()
	print handler.read().decode('utf8').encode('gbk')
	conn.request("POST", "/usercenter", request)
	handler = conn.getresponse()
	print handler.read().decode('utf8').encode('gbk')
	'''
	conn.request("POST", "/data", request)
	handler = conn.getresponse()
	print handler.read().decode('utf8').encode('gbk')
	conn.close()

pressure()
