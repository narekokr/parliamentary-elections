'use strict';
const faker = require('faker');
const getRandomCitizens = require('../../src/helpers/get-random-citizens');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const citizens = await getRandomCitizens(27, 9);
    const [ parties ] = await queryInterface.sequelize.query('SELECT id FROM Parties;');
    const [ election ] = await queryInterface.sequelize.query('SELECT id FROM Elections;');
    parties.forEach(async (party, index) => {
      for( let i = 0; i < 3; i++) {
        await queryInterface.bulkInsert('Candidates', [{
          citizenId: citizens[index * 3 + i].id,
          partyId: party.id,
          priority: i + 1,
          electionId: election[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Candidates;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
