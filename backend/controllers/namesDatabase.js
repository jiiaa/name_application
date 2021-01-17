// Endpoints of the database API
const namesDbRouter = require('express').Router();
const dbService = require('../services/databaseService');

// Get all names
namesDbRouter.get('/', (req, res) => {
  dbService.readAll(function (response) {
    res.json(response);
  });
});

// Get all names in the order of popularity
namesDbRouter.get('/popular', (req, res) => {
  dbService.getPopular(function (response) {
    res.json(response);
  });
});

// Get all names in the alphabetical order
namesDbRouter.get('/alphabet', (req, res) => {
  dbService.getAlpha(function (response) {
    res.json(response);
  });
});

// Get the sum of amounts of each name
namesDbRouter.get('/total', (req, res) => {
  dbService.getTotal(function (response) {
    res.json(response);
  });
});

// Search for a name
namesDbRouter.get('/name/:name', (req, res) => {
  const name = req.params.name;
  dbService.getByName(name, function (response) {
    res.json(response);
  });
});

module.exports = namesDbRouter;
