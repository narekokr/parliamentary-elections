const sequelize = require('../../database');

module.exports = async function(streetId) {
    const building = Math.floor((Math.random() * 50) + 1);
    const [ address ] = await sequelize.query(`SELECT * FROM Addresses A WHERE A.streetId=${streetId} AND A.building=${building}`);
    if(address[0]) {
        return address[0];
    };
    return sequelize.models.Address.create({
        streetId: streetId,
        building: building,
      });
}