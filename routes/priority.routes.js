const express = require('express');
const router = express.Router();
const Priority = require('../models/priority.models');

router.post('/', async (req, res) => {
  const { level } = req.body;
  try {
    const newPriority = await Priority.create({ level });
    res.json(newPriority);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const priorities = await Priority.findAll();
    res.json(priorities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;