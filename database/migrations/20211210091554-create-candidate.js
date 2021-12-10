"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Candidates", {
      citizenId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Citizens",
          key: "id"
        }
      },
      partyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Parties",
          key: "id"
        }
      },
      priority: {
        type: Sequelize.INTEGER
      },
      electionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Parties",
          key: "id"
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Candidates");
  }
};
