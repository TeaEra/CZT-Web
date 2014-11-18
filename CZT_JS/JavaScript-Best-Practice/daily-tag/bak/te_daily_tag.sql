-- DB: te_daily_tag
CREATE DATABASE IF NOT EXISTS te_daily_tag
 DEFAULT CHARACTER SET utf8
 DEFAULT COLLATE utf8_general_ci;

-- table: te_time_1
DROP TABLE IF EXISTS te_time_1;
CREATE TABLE te_time_1(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    time DATETIME DEFAULT NULL
);
-- table: te_time_2
DROP TABLE IF EXISTS te_time_2;
CREATE TABLE te_time_2(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    time DATETIME DEFAULT NULL
);
-- table: te_time_3
DROP TABLE IF EXISTS te_time_3;
CREATE TABLE te_time_3(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    time DATETIME DEFAULT NULL
);
-- table: te_time_1
DROP TABLE IF EXISTS te_time_4;
CREATE TABLE te_time_4(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255) DEFAULT NULL,
    time DATETIME DEFAULT NULL
);

--------------------------------------------------------------------------------

-- insert test datetime;
INSERT INTO te_time_1(user, time)
 VALUES ('teaera', NOW());
--
INSERT INTO te_time_2(user, time)
 VALUES ('teaera', NOW());
--
INSERT INTO te_time_3(user, time)
 VALUES ('teaera', NOW());
--
INSERT INTO te_time_4(user, time)
 VALUES ('teaera', NOW());

-- Clear data;
DELETE FROM te_time_1;
DELETE FROM te_time_2;
DELETE FROM te_time_3;
DELETE FROM te_time_4;