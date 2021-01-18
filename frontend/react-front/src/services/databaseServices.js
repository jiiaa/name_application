import axios from 'axios';

const apiUrlDb = '/api/database/';

const getAlphabetically = () => {
  const url = `${apiUrlDb}alphabet`;
  axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return ({ name: 'Server error', amount: 'n/a' });
    });
};

const getByPopularity = () => {
  const url = `${apiUrlDb}popular`;
  axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return ({ name: 'Server error', amount: 'n/a' });
    });
};

const getByName = name => {
  const url = `${apiUrlDb}name/${name}`;
  axios
    .get(url)
    .then(res => {
      return res.data[0];
    })
    .catch(err => {
      console.log(err);
      return ({ name: 'Server error' });
    });
};

const getTotalAmount = () => {
  const url = `${apiUrlDb}total`;
  axios
    .get(url)
    .then(res => {
      console.log(res.data[0].sum);
      return res.data[0].sum;
    })
    .catch(err => {
      console.log(err);
      return ({ message: 'Server error' });
    });
};

export default {
  getAlphabetically,
  getByPopularity,
  getByName,
  getTotalAmount,
};
