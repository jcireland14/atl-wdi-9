DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS games;

CREATE TABLE users (
  email VARCHAR(30),
  password_digest VARCHAR(12),
  created_at Date,
  updated_at Date
);

CREATE TABLE courses (
  courseName VARCHAR(255),
  city VARCHAR(30) ,
  state VARCHAR(12),
  par INTEGER,
  myScore INTEGER,
  ball VARCHAR(20),
  comments VARCHAR(255),
  datePlayed Date
);

CREATE TABLE games (
datePlayed Date,
par INTEGER,
myScore INTEGER,
courseName VARCHAR(255)
);




