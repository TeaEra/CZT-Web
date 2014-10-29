#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST


'''
[USEFUL]
Decode string in gbk, then encode it in utf-8;
'''
def get_str_in_utf8(in_string):
    return in_string.decode("gbk", "ignore").encode("utf8")


'''
[USEFUL]
Decode a dict from gbk to utf8 if have strings in gbk
'''
def get_dict_in_utf8(in_dict):
    #
    out_dict = dict()
    #
    for each_key in in_dict.keys():
        each_value = in_dict[each_key]
        if isinstance(each_value, list):
            out_dict[each_key] = get_list_in_utf8(each_value)
        elif isinstance(each_value, dict):
            out_dict[each_key] = get_dict_in_utf8(each_value)
        elif isinstance(each_value, str):
            out_dict[each_key] = get_str_in_utf8(each_value)
        else:
            out_dict[each_key] = each_value
    #
    return out_dict


'''
[USEFUL]
Decode a list from gbk to utf8 if have strings in gbk
'''
def get_list_in_utf8(in_list):
    #
    out_list = list()
    #
    for each_value in in_list:
        if isinstance(each_value, list):
            out_list.append(get_list_in_utf8(each_value))
        elif isinstance(each_value, dict):
            out_list.append(get_dict_in_utf8(each_value))
        elif isinstance(each_value, str):
            out_list.append(get_str_in_utf8(each_value))
        else:
            out_list.append(each_value)
    #
    return out_list


def get_mongo_weixin_articles():
    import pymongo
    HOST = CONST.MONGO_ARTICLE
    PORT = CONST.MONGO_DEFAULT_PORT
    #
    conn = pymongo.Connection(HOST, PORT)
    db = conn.WeiXinRecom
    coll = db.weixin_articles
    return conn, coll


'''
'''
def get_article_by_url(url):
    #
    conn, coll = get_mongo_weixin_articles()
    #
    condition = {"url": url}
    curr_article = coll.find_one(condition)
    #
    conn.close()
    #
    # There's possibility result is None:
    if curr_article:
        return get_dict_in_utf8(curr_article)
    return {} 


'''
'''
def verify_article_by_url(url, verify_res):
    #
    conn, coll = get_mongo_weixin_articles()
    #
    condition = {"url": url}
    res = coll.update(condition,  {"$set": {"is_public": verify_res}}, False, False)
    #
    conn.close()
    if res:
        return get_dict_in_utf8(res)
    return {}
