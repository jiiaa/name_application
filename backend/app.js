const express = require('express');
const app = express();
const cors = require('cors');

const middleware = require('./utils/middleware');
const namesRouter = require('./controllers/names');

app.use(cors());
app.use(middleware.requestLogger);
app.use('/api/names', namesRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
