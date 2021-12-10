'use strict';
const { getRandomStreet } = require('../../src/helpers/get-random-street');
const getRandomAddress = require('../../src/helpers/get-random-address');
const seedAddresses = require('../../src/helpers/seed-addresses');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await seedAddresses();
    // const [ citizens ] = await queryInterface.sequelize.query('SELECT id FROM Citizens;');
    // console.log(citizens);
    // citizens.forEach(async (citizen, index) => {
    //     const street = await getRandomStreet();
    //   const address = await getRandomAddress(street.id);
    //     await queryInterface.bulkInsert('CitizenAddresses', [{
    //     citizenId: citizen.id,
    //     addressId: address.id,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }]);
    //   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE CitizenAddresses;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
