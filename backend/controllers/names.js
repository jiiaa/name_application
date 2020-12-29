const namesRouter = require('express').Router();
const fs = require('fs');

const logger = require('../utils/logger');

let peopleArray = [];

fs.readFile('./names.json', (err, data) => {
  logger.logInfo('Reading file...');
  if (data) {
    const fileData = JSON.parse(data);
    peopleArray = fileData.names;
    logger.logInfo('File read');
  } else {
    logger.logInfo('Empty file');
  }
});

namesRouter.get('/popular', (req, res) => {
  const popularNames = peopleArray.sort((a, b) => b.amount - a.amount);
  res.json(popularNames);
});

namesRouter.get('/alphabet', (req, res) => {
  const alphabetNames = peopleArray.sort((a, b) => a.name.localeCompare(b.name));
  res.json(alphabetNames);
});

namesRouter.get('/total', (req, res) => {
  const totalAmount = peopleArray.reduce((sum, current) => { return sum + current.amount; }, 0);
  res.json({ totalAmount });
});

namesRouter.get('/name/:name', (req, res) => {
  const name = req.params.name;
  const reqName = peopleArray.find(item => item.name === name);
  res.json({ name: name, amount: reqName.amount });
});

module.exports = namesRouter;
