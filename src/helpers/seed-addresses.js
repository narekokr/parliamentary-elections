const sequelize = require('../../database');
const getRandomAddress = require('./get-random-address');
const { getRandomStreet } = require('./get-random-street');

module.exports = async function() {
    const [ citizens ] = await sequelize.query('SELECT id FROM Citizens;');
    citizens.forEach(async (citizen, index) => {
        const [ street ] = await getRandomStreet();
        const address = await getRandomAddress(street[0].id);
        await sequelize.query(`INSERT INTO CitizenAddresses VALUES (DEFAULT, ${citizen.id}, ${address.id})`);
    });
}