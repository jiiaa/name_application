const express = require('express');
const app = express();
const cors = require('cors');

const middleware = require('./utils/middleware');
const namesFileRouter = require('./controllers/namesFile');
const namesDbRouter = require('./controllers/namesDatabase');

app.use(cors());
app.use(middleware.requestLogger);
app.use('/api/file', namesFileRouter);
app.use('/api/database', namesDbRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
