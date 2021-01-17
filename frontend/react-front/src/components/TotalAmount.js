// File API frontend
// View to display the sum of amounts of all names
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalAmount = () => {
  const [total, setTotal] = useState('');

  useEffect(() => {
    axios
      .get('/api/file/total')
      .then(response => {
        setTotal(response.data.totalAmount);
      });
  }, []);

  return (
    <div className="section">
      <h2>&lt; The Sum of The Names /&gt;</h2>
      <div className="bodytext yellow">{total}</div>
    </div>
  );
};

export default TotalAmount;
