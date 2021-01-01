import React, { useState } from 'react';
import axios from 'axios';

const SearchNameDb = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const a = searchValue.charAt(0);
    const b = a.toUpperCase();
    const c = searchValue.slice(1);
    const url = `/api/database/name/${b}${c}`;
    axios
      .get(url)
      .then(response => {
        const result = response.data[0];
        setSearchResult(result);
        setSearchValue('');
      });
  };

  return (
    <div className="section">
      <h2>&lt; Search by Name /&gt;</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="bodytext">
        <div>
          Name: <span className="yellow">{searchResult && searchResult.name}</span>
        </div>
        <div>
          Amount: <span className="yellow">{searchResult && searchResult.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchNameDb;