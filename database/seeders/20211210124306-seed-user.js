'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < 1000; i++) {
      const randomNum = Math.floor((Math.random() * 100) + 1);
      const gender = randomNum % 2 === 0 ? 'male' : 'female';
      const age  = Math.floor((Math.random() * 80) + 1);
      await queryInterface.bulkInsert('Citizens', [{
          SSN: i + 1,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          gender,
          DOB: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * age),
          email: faker.internet.email(),
          createdAt: new Date(),
          updatedAt: new Date()
      }]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Citizens;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  }
};
