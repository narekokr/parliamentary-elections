'use strict';
const faker = require('faker');
const { getRandomStreet } = require('../../src/helpers/get-random-street');
const getRandomAddress = require('../../src/helpers/get-random-address');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parties = ['QP', 'Hayastan', 'Pativ Unem']
    parties.forEach(async party => {
      const [ street ] = await getRandomStreet();
      console.log(street);
      const address = await getRandomAddress(street[0].id);
      await queryInterface.sequelize.query(`INSERT INTO Parties VALUES (DEFAULT, "${party}", "${faker.lorem.sentence()}")`);

      const [ p ] = await queryInterface.sequelize.query(`SELECT * FROM Parties P WHERE P.name = "${party}"`);
      await queryInterface.sequelize.query(`INSERT INTO PartyAddresses VALUES (${p[0].id}, ${address.id})`);
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE PartyAddresses;');
    await queryInterface.sequelize.query('TRUNCATE TABLE Parties;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
