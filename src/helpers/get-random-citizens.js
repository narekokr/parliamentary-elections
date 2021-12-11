const sequelize = require('../../database');
const { Op } = require('sequelize')

module.exports = function(age, limit) {
  const date = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * age).toISOString().slice(0, 19).replace('T', ' ')
  return sequelize.query(`SELECT * FROM Citizens C WHERE C.DOB <= "${date}" ORDER BY RAND() LIMIT ${limit}`);
}