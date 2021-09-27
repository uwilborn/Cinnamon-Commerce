const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  router.get('/', async (req, res) => {
     const categoryData = await Category.findAll(
       {include: [{ model: Product, through: ProductTag}]}
       );
     return res.json(categoryData);
  });


// router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        // JOIN with products, using the Product through table
        include: [{ model: Product, through: ProductTag }]
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  }); 


// router.post('/', (req, res) => {
  // create a new category
  router.post('/', async (req, res) => {
  
      const categoryData = await Category.create(req.body);
      return res.json(categoryData);
  });



// router.put('/:id', (req, res) => {
  // update a category by its `id` value

  router.put('/:id', (req, res) => {
    
    Category.update(
      {
        
        category_name: req.body.category_name,
      
      },
      {
        // Gets the category based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        // Sends the updated category as a json response
        res.json(updatedCategory);
      })
      .catch((err) => res.json(err));
  });


// router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
