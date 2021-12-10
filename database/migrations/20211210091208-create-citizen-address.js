"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CitizenAddresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      citizenId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Citizens",
          key: "id"
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Addresses",
          key: "id"
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CitizenAddresses");
  }
};
