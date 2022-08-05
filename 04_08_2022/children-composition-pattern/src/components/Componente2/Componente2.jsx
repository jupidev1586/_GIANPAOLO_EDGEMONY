import Componente3 from '../Componente3/Componente3';
import './index.css';

const Componente2 = ({ children }) => {
  return (
    <div style={{ border: "2px solid yellow", padding: 16 }}>
      <h1>Componente 2</h1>
      <Componente3>{children}</Componente3>
    </div>
  );
};

export default Componente2;