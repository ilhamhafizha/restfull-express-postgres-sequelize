const { DataTypes } = require('sequelize');
const sequelize = require('../config/pg');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'categories',
  timestamps: false,
});

module.exports = Category;