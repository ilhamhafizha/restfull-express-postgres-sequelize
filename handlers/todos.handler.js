// handlers/todosHandler.js
const todoModel = require('../models/todos.models');
const { todoSchema } = require('../validators/todo.validator');

exports.getTodos = async (req, res) => {
  try {
    const todos = await todoModel.getTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await todoModel.getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { error, value } = todoSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const newTodo = await todoModel.addTodo(value.title);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { error, value } = todoSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const updated = await todoModel.updateTodo(req.params.id, value.title);
    if (!updated) return res.status(404).json({ message: 'Todo not found' });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteTodo = async (req, res) => {
  try {
    await todoModel.deleteTodo(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};