DROP DATABASE playmogames;
CREATE DATABASE playmogames;

USE playmogames;
-- Active: 1701269233151@@127.0.0.1@3306@playmogames

-- table product

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    image VARCHAR(255),
    description VARCHAR(255),
    marque VARCHAR(100),
    license VARCHAR(100),
    plateforme VARCHAR(70),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    category_id INT
);

-- table user

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar VARCHAR(255),
    firstname VARCHAR(70),
    lastname VARCHAR(70),
    age INT,
    genre VARCHAR(20),
    adresse VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    pseudo VARCHAR(50) UNIQUE
);

-- table basket

CREATE TABLE basket (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT,
    user_id INT,
    price DECIMAL(10, 2)  
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
    user_id INT NOT NULL
);

INSERT INTO product (product_name, image, description, marque, price, stock, category_id) VALUES ("PS5", "https://image.shutterstock.com/image-photo/next-gen-console-controller-isolated-260nw-1977908147.jpg", "lorem ipsum", "Sony", 500, 7, 1 ),
("PS4", "https://th.bing.com/th/id/OIP.NTgi1sTNWxJ9GGO8ul3agwHaE7?w=274&h=183&c=7&r=0&o=5&pid=1.7", "lorem ipsum", "Sony", 400.99, 5, 1 ),
("PS3", "https://th.bing.com/th/id/OIP.JWYnQhSZLyIZmygupOqE1wHaIH?rs=1&pid=ImgDetMain", "lorem ipsum", "Sony", 299.50, 4, 1 ),
("switch", "https://th.bing.com/th/id/OIP.XCCok6ApjGjDhiGkxt7wsQHaEF?w=299&h=180&c=7&r=0&o=5&pid=1.7", "lorem ipsum", "Nintendo", 350.99, 10, 2 ),
("switch lite", "https://1.bp.blogspot.com/-g28zGbJBrtg/YHW0ZRxetQI/AAAAAAAA2_Y/JP-fMDdmiEwhcwfhWIPUSDjxlwGeQIICQCLcBGAsYHQ/s967/nintendo-switch-lite-azul.jpg", "lorem ipsum", "Nintendo", 250.99, 20, 2 );

INSERT INTO user (pseudo, firstname, lastname, avatar, age, genre, adresse, email, password) VALUES ("lulu", "Lucinda", "Kazuyuki", "https://th.bing.com/th/id/OIF.LNtsyTvYpaRpFlIono6FFQ?rs=1&pid=ImgDetMain", 27, "f", "14 rue du moulin 45000 Orleans","lucinda@wcs.fr", "null" ),
("Toto", "Tomas", "Espinoza", "https://th.bing.com/th/id/OIF.LNtsyTvYpaRpFlIono6FFQ?rs=1&pid=ImgDetMain", 32, "h", "16 rue du jacquemain 45000 Orleans", "toto@wcs.fr", "null" ),
("Ayoubi", "Ayoub", "Toto", "https://th.bing.com/th/id/OIF.LNtsyTvYpaRpFlIono6FFQ?rs=1&pid=ImgDetMain", 31, "h", "37 rue du chapeau rouge 45000 Orleans", "ayoub@wcs.fr", "null" ),
("Sera", "Serena", "Will", "https://th.bing.com/th/id/OIF.LNtsyTvYpaRpFlIono6FFQ?rs=1&pid=ImgDetMain", 20, "f", "27 allee du vent terreux 45000 Orleans", "serena@wcs.fr", "null" ),
("libell", "Lisbeth", "Winchest", "https://th.bing.com/th/id/OIF.LNtsyTvYpaRpFlIono6FFQ?rs=1&pid=ImgDetMain", 40, "f", "107 rue pierre lamarer 45000 Orleans", "lisbeth@wcs.fr", "null" );