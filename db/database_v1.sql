CREATE SCHEMA `ninja`;

USE `ninja`;

CREATE TABLE `ninja` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `village` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'