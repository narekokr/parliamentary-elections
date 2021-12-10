const sequelize = require('../../database');

module.exports = async function(streetId) {
    const building = Math.floor((Math.random() * 50) + 1);
    const address = await sequelize.models.Address.findOne({
        where: {
            streetId, building
        }
    });
    console.log(address);
    if(address) {
        return address;
    };
    return sequelize.models.Address.create({
        streetId: streetId,
        building: building,
        createdAt: new Date(),
        updatedAt: new Date()
      });
}