import Componente2 from '../Componente2/Componente2';
import './index.css';

const Componente1 = (props) => {
  return (
    <div className="Componente1">
      <Componente2 {...props} />
    </div>
  );
}

export default Componente1;