DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;


CREATE TABLE Category (
    id integer NOt Null Primary key Auto_increment, 
    category_name varchar(30) NOT NULL
    );

create TABLE Product (
    id integer NOT NULL Primary key Auto_increment, 
    product_name varchar(30) NOT NULL,
    price decimal(10, 2) NOT NULL,
    stock integer NOT NULL DEFAULT '10',
    category_id integer references Category_id
    );
    
 create table Tag (
    id integer NOT NULL Primary key Auto_increment, 
    tag_name varchar(30)
    
    );
    
 create table ProductTag (
    id integer NOT NULL Primary key Auto_increment, 
    product_id integer references Product_id,
    tag_id integer references Tag_id
    
    );
