// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//References: https://launchschool.com/books/sql/read/table_relationships
//References: https://sequelize.org/v3/docs/associations/

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  //onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'products_manytags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tags_manyproducts'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
