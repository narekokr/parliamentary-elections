const sequelize = require('../../database');
const { Op } = require('sequelize')

module.exports = function(age, limit) {
    return sequelize.models.Citizen.findAll({
        where: {
          DOB: {
            [Op.lte]: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * age)
          }
        },
        order: sequelize.random(),
        limit
      });
}