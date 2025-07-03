const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': 'Username wajib diisi',
    'string.min': 'Username minimal 3 karakter',
    'any.required': 'Username wajib diisi',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Format email tidak valid',
    'any.required': 'Email wajib diisi',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password minimal 6 karakter',
    'any.required': 'Password wajib diisi',
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const todoSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    'string.empty': 'Title wajib diisi',
    'string.min': 'Title minimal 3 karakter',
    'any.required': 'Title wajib diisi',
  }),
  completed: Joi.boolean().default(false) 
});


module.exports = { registerSchema, loginSchema, todoSchema };
