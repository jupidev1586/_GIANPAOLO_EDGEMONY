import mockList from '../../utility/mockList';
import Card from '../Card';
import './index.css';

const CardListStatic = ({title, modalVisibility}) => {

  return (
    <div className="CardListStatic">
      <h1 className="CardListStatic__top">{ title }</h1>
      <div className="CardListStatic__list">
      {
        mockList.length >= 1 
          ? mockList.map(serie => <Card data={serie} modalVisibility={modalVisibility} key={serie.id}/>)
          : <p>loading...</p>
      }
      </div>
    </div>
  )
}

export default CardListStatic;