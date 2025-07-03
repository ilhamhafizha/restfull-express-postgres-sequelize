const express = require('express');
const router = express.Router();
const StatusLog = require('../models/statusLog.models');
const Todo = require('../models/todos.models').Todo; // pastikan model Todo diekspor

router.get('/', async (req, res) => {
  try {
    const statusLogs = await StatusLog.findAll();
    res.json(statusLogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { todo_id, status } = req.body;
  try {
    // Cek apakah todo_id ada
    const todo = await Todo.findByPk(todo_id);
    if (!todo) {
      return res.status(400).json({ error: 'Todo not found!' });
    }

    const newStatusLog = await StatusLog.create({ todo_id, status });
    res.json(newStatusLog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;