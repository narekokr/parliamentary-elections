'use strict';
const faker = require('faker');
const getRandomCitizens = require('../../src/helpers/get-random-citizens');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [ stations ] = await queryInterface.sequelize.query('SELECT id FROM PollingStations;');
    const [ election ] = await queryInterface.sequelize.query('SELECT id FROM Elections;');
    const citizens = await getRandomCitizens(18, stations.length * 2);
    stations.forEach(async (stations, index) => {
      for(let i = 0; i < 2; i++) {
        const citizenId = citizens[index * 2 + i].id;
        await queryInterface.sequelize.query(`INSERT INTO Observers VALUES (DEFAULT, ${citizenId}, ${stations.id}, ${election[0].id})`);
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Observers;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
