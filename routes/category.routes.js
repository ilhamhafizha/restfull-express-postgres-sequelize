const express = require('express');
const router = express.Router();
const Category = require('../models/category.models');

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });
    res.json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;