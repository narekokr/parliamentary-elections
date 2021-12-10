const sequelize = require('../../database');

module.exports = function(age, limit) {
    return sequelize.models.Party.findOne({
        where: {
          DOB: {
            [Op.lte]: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * age)
          }
        },
        order: sequelize.random(),
        limit
      });
}