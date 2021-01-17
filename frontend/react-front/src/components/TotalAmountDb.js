// Database API frontend
// View to display the sum of amounts of all names
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalAmountDb = () => {
  const [total, setTotal] = useState('');

  useEffect(() => {
    axios
      .get('/api/database/total')
      .then(response => {
        setTotal(response.data[0].sum);
      });
  }, []);

  return (
    <div className="section">
      <h2>&lt; The Sum of The Names /&gt;</h2>
      <div className="bodytext yellow">{total}</div>
    </div>
  );
};

export default TotalAmountDb;
