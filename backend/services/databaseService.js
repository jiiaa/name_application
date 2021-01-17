// Service module for database
const { Pool } = require('pg');
const config = require('../utils/config');
const logger = require('../utils/logger');

const conops = {
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  database: config.DB_DATABASE
};

const pool = new Pool(conops);

// Get all names
const readAll = (callback) => {
  const sqlSelect = 'SELECT * FROM names';
  pool.connect((err, client) => {
    if (err) {
      logger.logInfo('Pool connect failed::', err);
      throw err;
    }
    client.query(sqlSelect, (error, data) => {
      if (error) {
        logger.logInfo('Select failed::', error);
        throw error;
      }
      client.release();
      callback(data.rows);
    });
  });
};

// Get all names sorted by amount of each name
const getPopular = (callback) => {
  const sqlPopular = 'SELECT * FROM names ORDER BY amount DESC';
  pool.connect((err, client) => {
    if (err) {
      logger.logInfo('Pool connect failed::', err);
      throw err;
    }
    client.query(sqlPopular, (error, data) => {
      if (error) {
        logger.logInfo('Select failed::', error);
        throw error;
      }
      client.release();
      callback(data.rows);
    });
  });
};

// Get all names in alphabetical order
const getAlpha = (callback) => {
  const sqlPopular = 'SELECT * FROM names ORDER BY name ASC';
  pool.connect((err, client) => {
    if (err) {
      logger.logInfo('Pool connect failed::', err);
      throw err;
    }
    client.query(sqlPopular, (error, data) => {
      if (error) {
        logger.logInfo('Select failed::', error);
        throw error;
      }
      client.release();
      callback(data.rows);
    });
  });
};

// Get the sum of amounts of each name
const getTotal = (callback) => {
  const sqlPopular = 'SELECT SUM(amount) FROM names';
  pool.connect((err, client) => {
    if (err) {
      logger.logInfo('Pool connect failed::', err);
      throw err;
    }
    client.query(sqlPopular, (error, data) => {
      if (error) {
        logger.logInfo('Select failed::', error);
        throw error;
      }
      client.release();
      callback(data.rows);
    });
  });
};

// Get the name by a name
const getByName = (name, callback) => {
  const sqlPopular = 'SELECT * FROM names WHERE name ILIKE $1::text';
  const param = [name];
  pool.connect((err, client) => {
    if (err) {
      logger.logInfo('Pool connect failed::', err);
      throw err;
    }
    client.query(sqlPopular, param, (error, data) => {
      if (error) {
        logger.logInfo('Select failed::', error);
        throw error;
      }
      client.release();
      callback(data.rows);
    });
  });
};

module.exports = {
  readAll,
  getPopular,
  getAlpha,
  getTotal,
  getByName
};
