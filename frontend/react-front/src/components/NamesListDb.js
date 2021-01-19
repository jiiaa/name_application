// Database API frontend
// Table view of all names
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NamesListDb = () => {
  // Array of all names
  const [names, setNames] = useState([]);
  // Control the sorting order of names (alphabetical or by popularity)
  const [order, setOrder] = useState('alpha');
  // State for loader
  const [isLoading, setIsLoading] = useState(true);

  // Get all names from the database API in alphabetical order
  useEffect(() => {
    axios
      .get('/api/database/alphabet')
      .then(response => {
        const sortedNames = response.data;
        setNames(sortedNames);
        setIsLoading(false);
      });
  }, []);

  // Click handler to get the names in the chosen order from the database API
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
        {/* Click button to change the sorting order of names */}
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
