const { DataTypes } = require('sequelize');
const sequelize = require('../config/pg');

const Priority = sequelize.define('Priority', {
  level: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'priorities',
  timestamps: false,
});

module.exports = Priority;