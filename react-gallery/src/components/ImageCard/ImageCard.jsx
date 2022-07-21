import { useState } from 'react';
import Button from '../Button';
import Modal from 'react-modal';
import './index.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


// const ImageCard = (props) => {
const ImageCard = ({data}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    
    <div className="ImageCard">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <img className="ImageCard__img" src={data.urlBigger} alt={data.name}/>
      </Modal>
      <img className="ImageCard__img" src={data.url} alt={data.name}/>
      <p className="ImageCard__par">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button btnTextCont={data.name} onHandleClick={openModal}/>
    </div>
  )
}

export default ImageCard;