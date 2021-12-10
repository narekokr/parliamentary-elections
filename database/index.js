const { Sequelize, DataTypes } = require('sequelize');

const { nodeEnv } = require('./../config');
const dbEnvironmentConfigs = require('./config/db.config');
const dbConfigs = dbEnvironmentConfigs[nodeEnv];

// Models
const Models = require('./models');
const sequelize = new Sequelize(dbConfigs);

// Initialize all models
Models.forEach((model) => {
    model(sequelize, DataTypes);
});

//Define associations
for (Model in sequelize.models) {
    sequelize.models[Model].associate(sequelize.models)
}

module.exports = sequelize;