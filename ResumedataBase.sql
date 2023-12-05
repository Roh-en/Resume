CREATE DATABASE prsdb;
CREATE TABLE prsdb.user_details (
  id int NOT NULL AUTO_INCREMENT,
  user_firstname varchar(45) DEFAULT NULL,
  user_lastname varchar(45) DEFAULT NULL,
  user_jobdesignation varchar(45) DEFAULT NULL,
  user_phonenumber varchar(45) DEFAULT NULL,
  user_email varchar(45) DEFAULT NULL,
  user_linkedin varchar(45) DEFAULT NULL,
  user_location varchar(45) DEFAULT NULL,
  user_skills varchar(45) DEFAULT NULL,
  user_lang varchar(45) DEFAULT NULL,
  user_degrees varchar(255) DEFAULT NULL,
  user_workexperiences varchar(45) DEFAULT NULL,
  user_projects varchar(45) DEFAULT NULL,
  user_achievements varchar(45) DEFAULT NULL,
  user_interests varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
);