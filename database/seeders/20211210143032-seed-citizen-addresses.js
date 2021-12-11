'use strict';
const { getRandomStreet } = require('../../src/helpers/get-random-street');
const getRandomAddress = require('../../src/helpers/get-random-address');
const seedAddresses = require('../../src/helpers/seed-addresses');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await seedAddresses();
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE CitizenAddresses;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
