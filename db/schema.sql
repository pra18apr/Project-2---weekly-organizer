DROP DATABASE IF EXISTS weekly_organizer_db;
CREATE DATABASE weekly_organizer_db;

DROP USER IF EXISTS 'wiv_admin'@'localhost';
CREATE USER 'wiv_admin'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON weekly_organizer_db.* TO 'wiv_admin'@'localhost';