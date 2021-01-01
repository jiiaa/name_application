import React, { useState } from 'react';
import DatabaseView from './components/DatabaseView';
import FileView from './components/FileView';

const App = () => {
  const [view, setView] = useState('file');
  const [fileActive, setFileActive] = useState('active');
  const [databaseActive, setDatabaseActive] = useState('');

  const handleFileView = () => {
    setView('file');
    setFileActive('active');
    setDatabaseActive('');
  };

  const handleDatabaseView = () => {
    setView('database');
    setFileActive('');
    setDatabaseActive('active');
  };

  return (
    <>
      <div className="header">
        <h1 className="typewriter">&lt; Name Application /&gt;</h1>
        <h2 className={`menu ${fileActive}`} onClick={handleFileView}>File API</h2>
        <h2 className={`menu ${databaseActive}`} onClick={handleDatabaseView}>Database API</h2>
      </div>
      <div>
        {view === 'file'
          ? <FileView />
          : <DatabaseView />
        }
      </div>
    </>
  );
};

export default App;
