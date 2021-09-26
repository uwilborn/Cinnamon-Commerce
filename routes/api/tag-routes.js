const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  const tagData = await Tag.findAll(
    {include: [{ model: ProductTag, through: Product }]});
  return res.json(tagData);

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // JOIN with products, using the Product through table
      include: [{ model: ProductTag, through: Product }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }







});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body);
      return res.json(tagData);
});

router.put('/:id', (req, res) => {
  

  Tag.update(
    {
      tag_name: req.body.tag_name,
    
    },
    {
      
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});



router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
