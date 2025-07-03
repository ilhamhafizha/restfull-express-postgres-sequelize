// routes/todosRoute.js
const express = require('express');
const router = express.Router();
const handler = require('../handlers/todos.handler');
const validate = require('../middlewares/todos.validate');
const verifyToken = require('../middlewares/auth.middleware');
const { todoSchema } = require('../validators/todo.validator');

// Semua rute di bawah ini akan dicek token-nya dulu
router.get('/', verifyToken, handler.getTodos);
router.get('/:id', verifyToken, handler.getTodoById);
router.post('/', verifyToken, validate(todoSchema), handler.createTodo);
router.put('/:id', verifyToken, validate(todoSchema), handler.updateTodo);
router.delete('/:id', verifyToken, handler.deleteTodo);

module.exports = router;