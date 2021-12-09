const dotenv = require('dotenv');
const { parsed } = dotenv.config();

const databaseConfiguration = require('../database/config/db.config');

module.exports = {
    nodeEnv: parsed.NODE_ENV,
    port: +parsed.PORT || 3000,
    host: parsed.HOST,
    protocol: parsed.PROTOCOL,
    database: databaseConfiguration
};