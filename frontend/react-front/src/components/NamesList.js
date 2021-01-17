// File API frontend
// Table view of all names
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NamesList = () => {
  // Array of all names
  const [names, setNames] = useState([]);
  // Control the sorting order of names (alphabetical or by popularity)
  const [order, setOrder] = useState('alpha');

  // Get all names from the file API and sort alphabetically
  useEffect(() => {
    axios
      .get('/api/file/')
      .then(response => {
        const allNames = response.data;
        const sortedNames = allNames.sort((a, b) => a.name.localeCompare(b.name));
        setNames(sortedNames);
      });
  }, []);

  // Click handler to sort the names
  const handleSort = () => {
    const allNames = names;
    // Change the order from alphabetical to by popularity
    if (order === 'alpha') {
      const namesAmount = allNames.sort((a, b) => b.amount - a.amount);
      setOrder('amount');
      setNames(namesAmount);
    // Change the order from by popularity to alphabetical
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
        {/* Click button to change the sorting order of names */}
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
