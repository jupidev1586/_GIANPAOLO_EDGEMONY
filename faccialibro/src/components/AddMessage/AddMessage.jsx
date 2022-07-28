import { useState } from 'react';
import { POST } from '../../utils/api.js';
import Button from '../Button';
import './index.css';

const AddMessage = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [messageText, setMessageText] = useState('');
  const [sender, setSender] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText && sender) {
      POST('messages', {
        text: messageText,
        sender: sender,
        date: new Date().toLocaleDateString()
      })
      .then(() => {
        setMessageText('');
        setSender('');
        onAddButton(!isRenderedList);
      })
    }
  }

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Write a message..."
        value={ messageText }
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      <input
        className="AddMessage__sender"
        type="text"
        placeholder="Author..."
        value={ sender }
        onChange={(e) => setSender(e.target.value)}
        required
      />
      <Button type="submit" btnTextContent='POST' bgColor='tomato' color='white' width='100%'/>
    </form>
  )
}

export default AddMessage;