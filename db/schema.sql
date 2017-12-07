DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN default false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Shes a super leek burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Poblano Picasso burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Shoot out at the Okra Corral burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chorizo your own adventure burger", true);