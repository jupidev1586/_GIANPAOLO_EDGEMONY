import Componente2 from '../Componente2/Componente2';
import './index.css';

const Componente1 = ({ children }) => {
  return (
    <div style={{ border: "2px solid green", padding: 16 }}>
      <h1>Componente 1</h1>

      <Componente2>{children}</Componente2>
    </div>
  );
};

export default Componente1;