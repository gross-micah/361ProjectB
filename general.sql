/*NOTE: general sql queries used in 340. We probably will not need a file like this, but it's a good
guide to see the types of sql calls that will be necessary for particular searches*/

/*Add a movie*/
INSERT INTO `movies` (title, distributor, release_date) VALUES
([title], [distributor], [release_date]);

/*Update a movie record to associate a parent film.
Form on page will capture movie title to update and translate
as an ID to the sever for the query*/
UPDATE `movies` AS a JOIN `movies` AS b ON b.id=[id parent movie]
SET a.parent_movie_id= b.id WHERE a.id=[id child movie];

/*Add a genre*/
INSERT INTO `genre` (name) VALUES ([name]);

/*Add a platform*/
INSERT INTO `platforms` (name, type) VALUES ([name], [type]);

/*Add an award */
INSERT INTO `awards` (name, category, year, movie_id) VALUES
([name], [category], [year], [id]);

/*Add a genre-movie association*/
INSERT INTO `genre_labels` (movie_id, genre_id) VALUES
([movie id], [genre_id]);

/*Add new streaming option for a movie*/
INSERT INTO `available` (movie_id, platforms_id) VALUES
([movie id], [platform id]);

/*Delete a movie*/
DELETE FROM `movies` WHERE id=[id];

/*Delete a platform option (expired rights)*/
DELETE FROM `available` WHERE movie_id=[movie id] AND platforms_id=[platform id];

/*Selecting movies based on platform*/
SELECT movies.title, movies.release_date, platforms.name FROM `movies`
INNER JOIN `available` ON movies.id=available.movie_id
INNER JOIN `platforms` ON platforms.id=available.platforms_id
WHERE platforms.id=[platform id];

/*Selecting movies based on platform streamability*/
SELECT movies.title, movies.release_date, platforms.name FROM `movies`
INNER JOIN `available` ON movies.id=available.movie_id
INNER JOIN `platforms` ON platforms.id=available.platforms_id
WHERE platforms.type=[platform type];

/*Selecting movies based on genre*/
SELECT movies.title, movies.release_date, genres.name FROM `movies`
INNER JOIN `genre_labels` ON movies.id=genre_labels.movie_id
INNER JOIN `genres` ON genres.id= genre_labels.genre_id
WHERE genres.id=[genres id];

/*Selecting a movie based on awards prestige*/
SELECT movies.title, movies.release_date, COUNT(awards.movie_id) AS no_awards FROM `movies`
INNER JOIN `awards` ON movies.id=awards.movie_id
GROUP BY movies.title;

/*Selecting movie based on particular kind of award*/
SELECT movies.title, movies.release_date, COUNT(awards.movie_id) AS no_awards FROM `movies`
INNER JOIN `awards` ON movies.id=awards.movie_id
WHERE awards.name=[award name]
GROUP BY movies.title;
