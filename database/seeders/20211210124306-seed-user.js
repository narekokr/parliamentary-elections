'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < 100; i++) {
      const randomNum = Math.floor((Math.random() * 100) + 1);
      const gender = randomNum % 2 === 0 ? 'male' : 'female';
      const age  = Math.floor((Math.random() * 80) + 1);
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const DOB = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * age).toISOString().slice(0, 19).replace('T', ' ');
      const email = faker.internet.email();
      await queryInterface.sequelize.query(`INSERT INTO Citizens VALUES (DEFAULT,${i + 1},"${firstName}","${lastName}","${DOB}","${email}","${gender}")`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Citizens;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  }
};
