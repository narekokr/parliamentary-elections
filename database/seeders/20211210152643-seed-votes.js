'use strict';
const getRandomCitizens = require('../../src/helpers/get-random-citizens');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const citizens = await getRandomCitizens(18, 600);
    const [ parties ] = await queryInterface.sequelize.query('Select id from Parties');
    const [ elections ] = await queryInterface.sequelize.query('Select id from Elections');
    citizens.forEach(async citizen => {
      const num = Math.floor(Math.random() * 100);
      let vote;
      if(0 < num && num < 55) {
        vote = parties[0].id;
      } else if(55 <= num && num < 80) {
        vote = parties[1].id
      } else {
        vote = parties[2].id
      }
      await queryInterface.bulkInsert('Votes', [{
        citizenId: citizen.id,
        electionId: elections[0].id,
        partyId: vote,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Votes;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
