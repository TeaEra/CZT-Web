#!/usr/bin/python
# _*_ coding: utf-8 _*_

import CONST
#
import MySQLdb
import MySQLdb.cursors


class TE_DAILY_TAG(object):


    @staticmethod
    def get_conn():
        #
        host = CONST.MYSQL_HOST
        user = CONST.MYSQL_USER
        pwd = CONST.MYSQL_PWD
        db = CONST.DB_DAILY_TAG
        charset = CONST.MYSQL_CHARSET
        #
        conn = MySQLdb.connect(
            host = host,
            user = user,
            passwd = pwd,
            db = db,
            charset = charset,
            cursorclass = MySQLdb.cursors.DictCursor
        )
        cur = conn.cursor()
        #
        return conn, cur


    @staticmethod
    def get_table(time_type):
        #
        table = ""
        if time_type == "1":
            table = CONST.TABLE_TIME_1
        elif time_type == "2":
            table = CONST.TABLE_TIME_2
        elif time_type == "3":
            table = CONST.TABLE_TIME_3
        elif time_type == "4":
            table = CONST.TABLE_TIME_4
        #
        return table
