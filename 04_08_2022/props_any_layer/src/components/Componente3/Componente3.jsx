import Card from '../Card/Card';
import './index.css';

const Componente3 = ({ nome, cognome, email }) => {
  return (
    <div style={{ border: "1px solid red", padding: 16 }}>
      <Card nome={nome} cognome={cognome} email={email}/>
    </div>
  );
};

export default Componente3;