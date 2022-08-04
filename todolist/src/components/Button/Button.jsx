import React from 'react';
import { memo } from 'react';
import './index.css';

const Button = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {console.log('Render Component Button')}
      {children}
    </button>
  );
};

export default memo(Button);