const sequelize = require('../../database');
const getRandomAddress = require('./get-random-address');
const { getRandomStreet } = require('./get-random-street');

module.exports = async function() {
    const [ citizens ] = await sequelize.query('SELECT id FROM Citizens;');
console.log(citizens);
citizens.forEach(async (citizen, index) => {
    const street = await getRandomStreet();
    const address = await getRandomAddress(street.id);
    await sequelize.models.CitizenAddress.create({
        citizenId: citizen.id,
        addressId: address.id,
    });
})
}