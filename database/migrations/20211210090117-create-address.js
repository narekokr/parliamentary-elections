"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      streetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Streets",
          key: "id"
        }
      },
      building: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    }, {
      // uniqueKeys: {
      //     Address_unique: {
      //         fields: ['streetId', 'building']
      //     }
      // }
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Addresses");
  }
};
