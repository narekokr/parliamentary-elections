const sequelize = require('../../database');

module.exports = {
    getRandomStreet: function() {
        return sequelize.query('SELECT * FROM Streets ORDER BY RAND() LIMIT 1');
    },

    getRandomStreetById: function(id) {
       return sequelize.query(`SELECT * FROM Streets WHERE cityId = ${id} ORDER BY RAND() LIMIT 1`);
    }
}