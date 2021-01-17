const logger = require('./logger');

// Middleware function for logging requests
const requestLogger = (req, res, next) => {
  const d = new Date();
  const options = { hour12: false };
  const date = d.toDateString('fi-FI', options);

  logger.logInfo(`${req.method}@${req.hostname}${req.path} at ${date}`);
  logger.logInfo('Body if any:', req.body);
  logger.logInfo('----------');
  next();
};

// Middleware function taking care of unknown paths
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

module.exports = {
  requestLogger,
  unknownEndpoint
};
