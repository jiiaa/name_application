import React from 'react';
import NamesList from './components/NamesList';
import SearchName from './components/SearchName';
import TotalAmount from './components/TotalAmount';

const App = () => {

  return (
    <>
      <div className="header">
        <h1 className="typewriter">&lt; Name Application /&gt;</h1>
      </div>
      <div>
        <TotalAmount />
      </div>
      <div>
        <NamesList />
      </div>
      <div>
        <SearchName />
      </div>
    </>
  );
};

export default App;
