/*NOTE: CS340 example to be replaced with 361 B work. This is just to show formatting */

/*Ensure cleared state before creating*/
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `movies`;
DROP TABLE IF EXISTS `awards`;
DROP TABLE IF EXISTS `genres`;
DROP TABLE IF EXISTS `platforms`;
DROP TABLE IF EXISTS `genre_labels`;
DROP TABLE IF EXISTS `available`;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE `movies`(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `distributor` VARCHAR(255),
  `release_date` YEAR(4),
  UNIQUE KEY `release` (`title`, `release_date`),
  `parent_movie_id` INT
)ENGINE='innoDB';

CREATE TABLE `awards`(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `year` YEAR(4) NOT NULL,
  UNIQUE KEY `award_show` (`name`, `category`, `year`),
  `movie_id` INT,
  FOREIGN KEY(`movie_id`) REFERENCES movies(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)ENGINE='innoDB';

CREATE TABLE `genres`(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) UNIQUE NOT NULL
)ENGINE='innoDB';

CREATE TABLE `platforms`(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL CHECK (`type`='streaming' OR `type`='download' OR `type`='both')
)ENGINE='innoDB';

CREATE TABLE `genre_labels`(
  `movie_id` INT,
  FOREIGN KEY(`movie_id`) REFERENCES movies(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    `genre_id` INT,
  FOREIGN KEY(`genre_id`) REFERENCES genres(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT tb_PK PRIMARY KEY (`movie_id`, `genre_id`)
)ENGINE='innoDB';

CREATE TABLE `available`(
  `movie_id` INT,
  FOREIGN KEY(`movie_id`) REFERENCES movies(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  `platforms_id` INT,
  FOREIGN KEY(`platforms_id`) REFERENCES platforms(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT tb_PK PRIMARY KEY (`movie_id`, `platforms_id`)
)ENGINE='innoDB';
