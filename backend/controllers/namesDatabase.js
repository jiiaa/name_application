const namesDbRouter = require('express').Router();
const dbService = require('../services/databaseService');

namesDbRouter.get('/', (req, res) => {
  dbService.readAll(function (response) {
    res.json(response);
  });
});

namesDbRouter.get('/popular', (req, res) => {
  dbService.getPopular(function (response) {
    res.json(response);
  });
});

namesDbRouter.get('/alphabet', (req, res) => {
  dbService.getAlpha(function (response) {
    res.json(response);
  });
});

namesDbRouter.get('/total', (req, res) => {
  dbService.getTotal(function (response) {
    res.json(response);
  });
});

namesDbRouter.get('/name/:name', (req, res) => {
  const name = req.params.name;
  dbService.getByName(name, function (response) {
    res.json(response);
  });
});

module.exports = namesDbRouter;
