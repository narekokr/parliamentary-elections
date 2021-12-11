'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE INDEX phone_number ON Phones(number)');
    await queryInterface.sequelize.query('CREATE INDEX dob ON Citizens(DOB)');

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('DROP INDEX phone_number ON Phones;');
    await queryInterface.sequelize.query('DROP INDEX dob ON Citizens;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
