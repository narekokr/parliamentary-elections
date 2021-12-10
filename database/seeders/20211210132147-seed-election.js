'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date  = new Date(1640980091000).toISOString().slice(0, 19).replace('T', ' '); //Dec 31st
    await queryInterface.sequelize.query(`INSERT INTO Elections VALUES (DEFAULT, "${date}")`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Elections;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  }
};
