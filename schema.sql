DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;


CREATE TABLE Category (
    id integer null Primary key Auto_increment, 
    category_name string null,
    );

create table Product (
    id integer null Primary key Auto_increment, 
    product_name string null,
    price decimal(10, 2) null,
    stock integer null value(10)
    category_id interger references (Category_id)
    );
    
 create table Tag (
    id integer null Primary key Auto_increment, 
    tag_name string,
    
    );
    
 create table ProductTag (
    id integer null Primary key Auto_increment, 
    product_id integer references (Product_id)
    tag_id integer references (Tag_id)
    
    );
