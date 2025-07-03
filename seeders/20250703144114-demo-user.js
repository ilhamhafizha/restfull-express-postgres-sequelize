'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      username: 'demo',
      email: 'demo@mail.com',
      password: 'hashed_password', // hash dulu jika perlu
      // createdAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};