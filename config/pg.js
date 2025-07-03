// config/pg.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todos', 'neondb_owner', 'npg_U0D1nKdfoWOh', {
  host: 'ep-shiny-salad-a1gyvoh4-pooler.ap-southeast-1.aws.neon.tech',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Untuk koneksi SSL di Neon/Cloud
    },
  },
  logging: false, // Ubah ke true jika ingin melihat query di console
});

module.exports = sequelize;