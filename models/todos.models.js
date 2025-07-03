const { DataTypes } = require('sequelize');
const sequelize = require('../config/pg');

// Definisikan model Todo
const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Tambahkan kolom lain sesuai kebutuhan, misal: status, due_date, dsb.
}, {
  tableName: 'todos',
  timestamps: false, // Ubah ke true jika ingin kolom createdAt/updatedAt
});

// Fungsi untuk mendapatkan semua todo
const getTodos = async () => {
  const todos = await Todo.findAll({ order: [['id', 'ASC']] });
  return todos.map(todo => todo.get());
};

// Fungsi untuk mendapatkan todo berdasarkan id
const getTodoById = async (id) => {
  const todo = await Todo.findByPk(id);
  return todo ? todo.get() : null;
};

// Fungsi untuk menambah todo baru
const addTodo = async (title) => {
  const todo = await Todo.create({ title });
  return todo.get();
};

// Fungsi untuk update todo
const updateTodo = async (id, title) => {
  const todo = await Todo.findByPk(id);
  if (!todo) return null;
  todo.title = title;
  await todo.save();
  return todo.get();
};

// Fungsi untuk menghapus todo
const deleteTodo = async (id) => {
  const todo = await Todo.findByPk(id);
  if (!todo) return false;
  await todo.destroy();
  return true;
};

module.exports = {
  Todo, // Ekspor model jika ingin digunakan untuk relasi
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
};