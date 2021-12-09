const app = require('./src/app');

const sequelize = require('./database/');
const config = require('./config');

runServer();

async function runServer() {
    try {
        console.log(1)
        await sequelize.authenticate();
        app.listen(config.port, () => {
            console.info(`Server is running on the port ${config.port}`);
        });
    } catch (err) {
        console.error('Unable to connect database!', err.message);
    }
}

