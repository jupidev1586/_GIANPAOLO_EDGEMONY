import React from 'react';
import { memo } from 'react';
import './index.css';

const Form = ({ state, onChange, children }) => {

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="Form">
      {console.log('Render Component Form')}
      <input
        type="text"
        onChange={handleChange}
        placeholder="Inserisci una todo"
        name="text"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Inserisci un nome"
        name="nome"
      />
      {state.isError ? (
        <p className="message message--error">
          <strong>ERRORE</strong> : Non hai riempito alcuni campi!
        </p>
      ) : null}
      {children}
    </div>
  );
};

export default memo(Form);
