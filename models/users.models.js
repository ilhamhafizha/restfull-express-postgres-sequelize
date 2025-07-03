const { DataTypes } = require('sequelize');
const sequelize = require('../config/pg');

// Definisikan model User
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false, // Ubah ke true jika ingin kolom createdAt/updatedAt
});

// Fungsi untuk membuat user baru
const createUser = async ({ username, email, password }) => {
  const user = await User.create({ username, email, password });
  // Kembalikan hanya field yang diperlukan
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
};

// Fungsi untuk mencari user berdasarkan email
const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user ? user.get() : null;
};

module.exports = {
  createUser,
  findUserByEmail,
  User,
};