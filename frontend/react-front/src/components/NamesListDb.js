import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NamesListDb = () => {
  const [names, setNames] = useState([]);
  const [order, setOrder] = useState('alpha');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/database/alphabet')
      .then(response => {
        console.log(response);
        const sortedNames = response.data;
        setNames(sortedNames);
        setIsLoading(false);
      });
  }, []);

  const handleFetch = () => {
    setIsLoading(true);
    if (order === 'alpha') {
      axios
        .get('/api/database/popular')
        .then(response => {
          const popularNames = response.data;
          setNames(popularNames);
        });
      setOrder('amount');
    } else {
      axios
        .get('/api/database/alphabet')
        .then(response => {
          const alphabetNames = response.data;
          setNames(alphabetNames);
        });
      setOrder('alpha');
    }
    setIsLoading(false);
  };

  return (
    <div className="section">
      <div className="flex">
        <h2>&lt; List of All Names /&gt;</h2>
        <button onClick={handleFetch}>{order === 'alpha' ? 'Sort by amount' : 'Sort alphabetically'}</button>
      </div>
      {isLoading
        ? <div>
          Loading data...
        </div>
        : <table>
          <thead>
            <tr>
              <th>Name</th><th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name => <tr key={name.name}><td>{name.name}</td><td>{name.amount}</td></tr>)}
          </tbody>
        </table>
      }
    </div>
  );
};

export default NamesListDb;
