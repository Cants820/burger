### Schema - Burgers database
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN 0,
  burger_date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE burgers_db;