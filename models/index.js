// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//References: https://launchschool.com/books/sql/read/table_relationships

// Products belongsTo Category

Products.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

Category.hasMany(Products, {
  foreignKey: 'category_id',
  //onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Products.hasMany(Tags, {
  foreignKey: 'ProductTag_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tags.hasMany(Products, {
  foreignKey: 'ProductTag_id',
  onDelete: 'CASCADE',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
