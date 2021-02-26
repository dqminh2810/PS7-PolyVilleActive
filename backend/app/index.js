const buildServer = require('./build-server.js');
const logger = require('./utils/logger.js');

const app = buildServer(server => logger.info(`Server is listening on address ${server.address().address} and on port ${server.address().port}`));
