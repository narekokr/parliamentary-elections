const sequelize = require('../../database');

module.exports = {
    getRandomStreet: function() {
        return sequelize.models.Street.findOne({ 
            order: sequelize.random() 
        });
    },

    getRandomStreetById: function(id) {
        return sequelize.models.Street.findOne({ 
            where: { cityId: id },
            order: sequelize.random() 
        });
    }
}