'use strict';
const faker = require('faker');
const getRandomCitizens = require('../../src/helpers/get-random-citizens');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [citizens] = await getRandomCitizens(0, 500);
    citizens.forEach(async (citizen, index) => {
        const citizenId = citizen.id;
        await queryInterface.sequelize.query(`INSERT INTO Phones VALUES (DEFAULT, ${citizenId},"${faker.phone.phoneNumber()}")`);
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Phones;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
