const express = require('express');
const app = express();
const cors = require('cors');

const middleware = require('./utils/middleware');
// Router using the FILE API
const namesFileRouter = require('./controllers/namesFile');
// Router using the database API
const namesDbRouter = require('./controllers/namesDatabase');

app.use(cors());
app.use(middleware.requestLogger);
// Route for file API
app.use('/api/file', namesFileRouter);
// Route for database API
app.use('/api/database', namesDbRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
