import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { GET, DELETE } from '../../utils/api';
import './index.css';

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET('messages', messageList)
      .then(data => setMessageList(data))
  }, []);

  return (
    <div className="MessageCardList">
      {
        messageList.length
          ? messageList.map(message => {
            return (
              <MessageCard 
                textContent={ message } 
                key={ message.id } 
                onDeleteClick={ () => DELETE('https://edgemony-backend.herokuapp.com/messages', message.id)
                .then(() =>  window.location.reload(false)) }
              />
            )
          })
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;