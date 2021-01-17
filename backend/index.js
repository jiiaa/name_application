const app = require('./app');
const http = require('http');

// Require the environment variables
const config = require('./utils/config');
// Require the general logger
const logger = require('./utils/logger');

const server = http.createServer(app);

const PORT = config.PORT || 3002;

server.listen(PORT, () => {
  logger.logInfo(`Server is running on port ${PORT}`);
});
