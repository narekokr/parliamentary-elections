"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Votes", {
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
      partyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Parties",
          key: "id"
        }
      },
      pollingStationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PollingStations',
          key: 'id'
        }
      },
      electionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Elections",
          key: "id"
        }
      },
    }, {
      uniqueKeys: {
          Vote_unique: {
              fields: ['citizenId', 'electionId']
          }
      }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Votes");
  }
};
