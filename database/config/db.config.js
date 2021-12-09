const dotenv = require('dotenv');
const { parsed } = dotenv.config();

module.exports = {
    development: {
        dialect: parsed.DB_CONNECTION,
        username: parsed.DB_USERNAME,
        password: parsed.DB_PASSWORD,
        database: parsed.DB_NAME,
        host: parsed.DB_HOST,
        seederStorage: parsed.DB_SEEDER_STORAGE
    }
};
