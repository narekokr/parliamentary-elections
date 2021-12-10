"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PartyAddresses", {
      partyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Parties",
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
    await queryInterface.dropTable("PartyAddresses");
  }
};
