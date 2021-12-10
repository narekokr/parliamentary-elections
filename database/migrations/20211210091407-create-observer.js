"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Observers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      citizenId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Citizens",
          key: "id"
        }
      },
      pollingStationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PollingStations",
          key: "id"
        }
      },
      electionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Elections",
          key: "id"
        }
      },
    }, {
      uniqueKeys: {
          Observer_unique: {
              fields: ['citizenId', 'electionId']
          }
      }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Observers");
  }
};
