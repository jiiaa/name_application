import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NamesList = () => {
  const [names, setNames] = useState([]);
  const [order, setOrder] = useState('alpha');

  useEffect(() => {
    axios
      .get('/api/file/')
      .then(response => {
        const allNames = response.data;
        const sortedNames = allNames.sort((a, b) => a.name.localeCompare(b.name));
        setNames(sortedNames);
      });
  }, []);

  const handleSort = () => {
    const allNames = names;
    if (order === 'alpha') {
      const namesAmount = allNames.sort((a, b) => b.amount - a.amount);
      setOrder('amount');
      setNames(namesAmount);
    } else {
      const namesAlpha = allNames.sort((a, b) => a.name.localeCompare(b.name));
      setOrder('alpha');
      setNames(namesAlpha);
    }
  };

  return (
    <div className="section">
      <div className="flex">
        <h2>&lt; List of All Names /&gt;</h2>
        <button onClick={handleSort}>{order === 'alpha' ? 'Sort by amount' : 'Sort alphabetically'}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {names.map(name => <tr key={name.name}><td>{name.name}</td><td>{name.amount}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default NamesList;
