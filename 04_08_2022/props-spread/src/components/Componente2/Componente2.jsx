import Componente3 from '../Componente3/Componente3';
import './index.css';

const Componente2 = (props) => {
  return (
    <div className="Componente2">
      <Componente3 {...props} />
    </div>
  );
}

export default Componente2;