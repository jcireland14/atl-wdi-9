-- Write out the SQL statement to grab all data from one of your tables.
SELECT * FROM courses;
-- Write out the SQL statement to grab all data from ALL of your tables.
SELECT * FROM users, courses, games;
-- Write out the SQL statement to grab one column EACH from two of your tables.
SELECT * FROM courses, games WHERE par = 72;
-- Write out the SQL to update all values in one of your tables' columns;
UPDATE * games SET datePlayed = 4/20/17 WHERE courseName = 'ACE cc';
-- Write out the SQL statement to update a specific value in one of your models.
UPDATE users SET email 'Gerry@notGary.com' WHERE email = 'JoshPass@kush.com';
