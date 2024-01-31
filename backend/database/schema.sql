-- Active: 1701269233151@@127.0.0.1@3306@playmogames

-- table product
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    image VARCHAR(255),
    description TEXT,
    marque VARCHAR(100),
    license VARCHAR(100),
    plateforme VARCHAR(70),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    category_id INT,
);

-- table user

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar VARCHAR(255),
    firstname VARCHAR(70),
    lastname VARCHAR(70),
    age INT,
    genre VARCHAR(10),
    adresse VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    pseudo VARCHAR(50) UNIQUE
);

-- table basket

CREATE TABLE basket (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT,
    user_id INT,
    price DECIMAL(10, 2),
    
);

-- table category

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(255) NOT NULL
);

-- table favoris

CREATE TABLE favorite_user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    );