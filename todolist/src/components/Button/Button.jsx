import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {console.log('Render Component Button')}
      {children}
    </button>
  );
};

export default Button;