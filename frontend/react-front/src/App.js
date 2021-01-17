import React, { useState } from 'react';
import DatabaseView from './components/DatabaseView';
import FileView from './components/FileView';

const App = () => {
  // Control the active view (file or database)
  const [view, setView] = useState('file');
  // Set the active menu item
  const [fileActive, setFileActive] = useState('active');
  const [databaseActive, setDatabaseActive] = useState('');

  // Menu item click handler to set the File view active
  const handleFileView = () => {
    setView('file');
    setFileActive('active');
    setDatabaseActive('');
  };

  // Menu item click handler to set the Databse view active
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
