// View for the database API
import React from 'react';
import NamesListDb from './NamesListDb';
import SearchNameDb from './SearchNameDb';
import TotalAmountDb from './TotalAmountDb';

const DatabaseView = () => {
  return (
    <>
      <TotalAmountDb />
      <SearchNameDb />
      <NamesListDb />
    </>
  );
};

export default DatabaseView;