import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage  = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/catalogo" title="Vedi tutte le ricette" aria-label="catalogo- vedi tutte le ricette">
        Vai al catalogo
      </Link>
    </div>
  );
};

export default HomePage ;
