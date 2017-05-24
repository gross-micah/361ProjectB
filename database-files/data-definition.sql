/*Ensure cleared state before creating*/
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `content_record`;
DROP TABLE IF EXISTS `users`;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(320),
)

CREATE TABLE `content_record` (
    `id` INT NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (`user_id`) REFERENCES users(`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
    `source` varchar(255),
    `type` varchar(255) NOT NULL CHECK (`type`='image' OR `type`='movie'),
    `media` blob NOT NULL,
    `metadata` text,
    `location` varchar(255),
    `datetime_of_capture` datetime,
    `link` text,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB;
