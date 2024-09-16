import React, { useState } from 'react';

const DoubleClickExample = () => {
  const [message, setMessage] = useState('Double-click the button');

  const handleDoubleClick = () => {
    setMessage('Button was double-clicked!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onDoubleClick={handleDoubleClick}>
        Double-click me
      </button>
    </div>
  );
};

export default DoubleClickExample;
