import Componente3 from '../Componente3/Componente3';
import './index.css';

const Componente2 = ({ nome, cognome, email }) => {
  return (
    <div className="Componente1">
      <Componente3 nome={nome} cognome={cognome} email={email} />
    </div>
  );
}

export default Componente2;