import Componente2 from '../Componente2/Componente2';
import './index.css';

const Componente1 = ({ nome, cognome, email }) => {
  return (
    <div className="Componente1">
      <Componente2 nome={nome} cognome={cognome} email={email} />
    </div>
  );
}

export default Componente1;