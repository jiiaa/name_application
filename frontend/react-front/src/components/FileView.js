// View for the File API
import React from 'react';
import NamesList from './NamesList';
import SearchName from './SearchName';
import TotalAmount from './TotalAmount';

const FileView = () => {
  return (
    <>
      <TotalAmount />
      <SearchName />
      <NamesList />
    </>
  );
};

export default FileView;