import React from 'react';

const message = ({ type }) => {
  const messages = {
    saved: 'Post has been saved!',
    updated: 'Post has been updated.',
    deleted: 'Post has been deleted.',
  };

  return (
    <div className={`App-message ${type}`}>
      <div className='container'>
        <strong>{messages[type]}</strong>
      </div>
    </div>
  );
};

export default message;
