'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const districts = [
      'Yerevan', 'Ararat', 'Armavir', 'Kotayq', 'Shirak'
    ]
    const cities = {
      Yerevan: ['Yerevan'],
      Ararat: ['Ararat', 'Masis'],
      Armavir: ['Armavir', 'Mecamor'],
      Kotayq: ['Hrazdan', 'Yeghvard'],
      Shirak: ['Gyumri', 'Artik']
    }
    const citiesValues = [].concat(...Object.values(cities));
    console.log(citiesValues);
    districts.forEach(async (district, index) => {
      await queryInterface.bulkInsert('Districts', [{
        name: district,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
      cities[district].forEach(async (city, index2) => {
        const id = citiesValues.indexOf(city) + 1;
        await queryInterface.bulkInsert('Cities', [{
          id,
          name: city,
          districtName: district,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);

        for(let i = 0; i < 2; i++) {
          await queryInterface.bulkInsert('Streets', [{
            name: faker.address.streetName(),
            cityId: id,
            createdAt: new Date(),
            updatedAt: new Date()
          }]);
        }
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.sequelize.query('TRUNCATE TABLE Districts;');
    await queryInterface.sequelize.query('TRUNCATE TABLE Cities;');
    await queryInterface.sequelize.query('TRUNCATE TABLE Streets;');
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  }
};
