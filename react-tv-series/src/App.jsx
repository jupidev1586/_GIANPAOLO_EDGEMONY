import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button/Button';
import CardList from './components/CardList';
import CardListStatic from './components/CardListStatic';
import Modal from './components/Modal';
import mockList from '../src/utility/mockList';
import POST from '../src/utility/api';
import './App.css';

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const [newData, setData] = useState({});

  const addMovie = (data) => {
    setData(data);
    POST('https://edgemony-backend.herokuapp.com/movies', newData)
  };

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="space"></div>
      <CardList
        className="mt-2"
        title="Top series"
        BASE_URL='https://edgemony-backend.herokuapp.com/series'
        modalVisibility={onHandleModal}
      />
      <Button btnTextCont="ADD MOVIE" onHandleClick={ addMovie } />
      <CardList
        title="Added Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
      <CardListStatic
        title="My Movies"
        modalVisibility={onHandleModal}
      />
      <Footer />
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;