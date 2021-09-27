DROP DATABASE IF EXISTS ccommerce_db;

CREATE DATABASE ccommerce_db;

USE ccommerce_db;


CREATE TABLE Category (
    id integer NOt Null Primary key Auto_increment, 
    category_name varchar(30) NOT NULL
    );

create TABLE Product (
    id integer NOT NULL Primary key Auto_increment, 
    product_name varchar(80) NOT NULL,
    price decimal(10, 2) NOT NULL,
    stock integer NOT NULL DEFAULT '10',
    category_id integer,
    foreign key (category_id) references Category(id)
    );
    
 create table Tag (
    id integer NOT NULL Primary key Auto_increment, 
    tag_name varchar(30)
    
    );
    
 create table ProductTag (
    id integer NOT NULL Primary key Auto_increment, 
    product_id integer references Product_id,
    foreign key (product_id) references Product(id),
    tag_id integer,
    foreign key (tag_id) references Tag(id)
    
    );
