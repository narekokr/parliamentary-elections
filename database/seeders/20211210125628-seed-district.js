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
    districts.forEach(async (district, index) => {
      await queryInterface.sequelize.query(`INSERT INTO Districts VALUES (DEFAULT, "${district}")`);
      const [ districtId ] = await queryInterface.sequelize.query(`SELECT id FROM Districts D WHERE D.name = "${district}"`);
      cities[district].forEach(async (city, index2) => {
        const id = citiesValues.indexOf(city) + 1;
        await queryInterface.sequelize.query(`INSERT INTO Cities VALUES (${id}, "${city}", ${districtId[0].id})`);
        for(let i = 0; i < 2; i++) {
          const name = faker.address.streetName();
          await queryInterface.sequelize.query(`INSERT INTO Streets VALUES (DEFAULT, "${name}", ${id})`);
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
