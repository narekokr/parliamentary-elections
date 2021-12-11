'use strict';
const { getRandomStreetById } = require('../../src/helpers/get-random-street');
const getRandomAddress = require('../../src/helpers/get-random-address');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [ cities ] = await queryInterface.sequelize.query('SELECT id FROM Cities;');
    cities.forEach(async city => {
      const [ street ] = await getRandomStreetById(city.id);
      const address = await getRandomAddress(street[0].id);
      await queryInterface.sequelize.query(`INSERT INTO PollingStations Values (DEFAULT, ${address.id})`);
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE PollingStations;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
