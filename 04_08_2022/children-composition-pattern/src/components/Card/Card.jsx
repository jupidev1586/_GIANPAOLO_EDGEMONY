import './index.css';

const Card = ({ data }) => {
  const { nome, cognome, email } = data;

  return (
    <div onClick={ () => {} } className="Card" style={{ backgroundColor: 'tomato' }}>
      <p>Nome: {nome}</p>
      <p>Cognome: {cognome}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Card;