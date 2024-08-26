CREATE DATABASE IF NOT EXISTS gnosis;

USE gnosis;

CREATE TABLE IF NOT EXISTS users(
	userID	INT auto_increment PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50),
    pw	VARCHAR(20)
);

SELECT * FROM users;