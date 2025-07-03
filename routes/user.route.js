const express = require('express');
const router = express.Router();

const userHandler = require('../handlers/user.handler');
const validate = require('../middlewares/todos.validate');
const { registerSchema, loginSchema } = require('../validators/todo.validator');

router.post('/register', validate(registerSchema), userHandler.register);
router.post('/login', validate(loginSchema), userHandler.login);

module.exports = router;