const { DataTypes } = require('sequelize');
const sequelize = require('../config/pg');

const StatusLog = sequelize.define('StatusLog', {
  todo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'status_logs',
  timestamps: false,
});

module.exports = StatusLog;