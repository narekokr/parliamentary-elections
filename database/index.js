const { Sequelize, DataTypes } = require('sequelize');

const { nodeEnv } = require('./../config');
const dbEnvironmentConfigs = require('./config/db.config');
const dbConfigs = dbEnvironmentConfigs[nodeEnv];

// Models

const sequelize = new Sequelize(dbConfigs);


// Initialize all models

//Define associations


module.exports = sequelize;
