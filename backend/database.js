const { Pool } = require('pg');
const format = require('pg-format');
const config = require('./utils/config');

const conopts = {
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  database: config.DB_DATABASE
};

const formatData = (data) => {
  const formattedData = data.map(item => Object.values(item));
  return formattedData;
};

const createTable= 'CREATE TABLE IF NOT EXISTS names (id serial not null primary key, name varchar(255) not null, amount int)';

const insertToDatabase = (query, data, conops) => {
  const pool = new Pool(conops);

  if (data !== '' && typeof data === 'object') {
    const dataToInsert = formatData(data);
    const queryFormat = format('INSERT INTO names (name, amount) VALUES %L', dataToInsert);
    pool.connect((err, client) => {
      if (err) throw err;
      client.query(queryFormat, '', (error, data) => {
        if (error) {
          console.log('Insert failed:', error);
          throw error;
        }
        client.release();
        console.log('Inserted', data.rowCount,'rows');
      });
    });
  } else {
    pool.connect((err, client) => {
      if (err) throw err;
      client.query(query, data, (error, data) => {
        if (error) {
          console.log('Query failed:', error);
          throw error;
        }
        client.release();
        console.log('Query command', data.command,'success');
      });
    });
  }
  pool.end();
};

const names = [
  {
    'name': 'Ville',
    'amount': 24
  },
  {
    'name': 'Anna',
    'amount': 6
  },
  {
    'name': 'Antti',
    'amount': 22
  },
  {
    'name': 'Sanna',
    'amount': 5
  },
  {
    'name': 'Mikko',
    'amount': 19
  },
  {
    'name': 'Minna',
    'amount': 5
  },
  {
    'name': 'Timo',
    'amount': 18
  },
  {
    'name': 'Satu',
    'amount': 5
  },
  {
    'name': 'Tuomas',
    'amount': 16
  },
  {
    'name': 'Tiina',
    'amount': 5
  },
  {
    'name': 'Tero',
    'amount': 15
  },
  {
    'name': 'Kati',
    'amount': 5
  },
  {
    'name': 'Sami',
    'amount': 15
  },
  {
    'name': 'Henna',
    'amount': 4
  },
  {
    'name': 'Mika',
    'amount': 12
  },
  {
    'name': 'Liisa',
    'amount': 4
  },
  {
    'name': 'Janne',
    'amount': 12
  },
  {
    'name': 'Paula',
    'amount': 4
  },
  {
    'name': 'Petri',
    'amount': 11
  },
  {
    'name': 'Suvi',
    'amount': 4
  }
];

insertToDatabase(createTable, '', conopts);
setTimeout(() => {
  insertToDatabase('', names, conopts);
}, 100);
