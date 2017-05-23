CREATE TABLE `user_search` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `image` blob,
    `datetime` datetime,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB;

CREATE TABLE `content_record` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `source` varchar(255),
    `image` blob,
    `metadata` text,
    `location` varchar(255),
    `datetime_of_capture` datetime,
    `link` text,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB;