const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const data = await Tag.findAll({
    include: [
      {model: Product, through: ProductTag}
    ],
  });
  // be sure to include its associated Products
  return res.status(200).json(data);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const data = await Tag.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json(data);
});

module.exports = router;
