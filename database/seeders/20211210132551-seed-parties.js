'use strict';
const faker = require('faker');
const { getRandomStreet } = require('../../src/helpers/get-random-street');
const getRandomAddress = require('../../src/helpers/get-random-address');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parties = ['QP', 'Hayastan', 'Pativ Unem']
    parties.forEach(async party => {
      const street = await getRandomStreet();
      const address = await getRandomAddress(street.id);
      await queryInterface.bulkInsert('Parties', [{
        name: party,
        slogan: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
      const p = await queryInterface.rawSelect('Parties', {
        where: {
          name: party
        }
      }, ['id']);
      await queryInterface.bulkInsert('PartyAddresses', [{
        partyId: p,
        addressId: address.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE PartyAddresses;');
    await queryInterface.sequelize.query('TRUNCATE TABLE Parties;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
