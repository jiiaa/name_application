const namesFileRouter = require('express').Router();
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

namesFileRouter.get('/', (req, res) => {
  res.json(peopleArray);
});

namesFileRouter.get('/popular', (req, res) => {
  const popularNames = peopleArray.sort((a, b) => b.amount - a.amount);
  res.json(popularNames);
});

namesFileRouter.get('/alphabet', (req, res) => {
  const alphabetNames = peopleArray.sort((a, b) => a.name.localeCompare(b.name));
  res.json(alphabetNames);
});

namesFileRouter.get('/total', (req, res) => {
  const totalAmount = peopleArray.reduce((sum, current) => { return sum + current.amount; }, 0);
  res.json({ totalAmount });
});

namesFileRouter.get('/name/:name', (req, res) => {
  const name = req.params.name;
  const reqName = peopleArray.find(item => item.name === name);
  if (reqName) {
    res.json({ name: name, amount: reqName.amount });
  } else {
    res.json({ name: 'Name not found', amount: 'Try again, please' });
  }
});

module.exports = namesFileRouter;
