import { useState, useEffect } from 'react';
import Friend from '../Friend';
import { GET } from '../../utils/api';
import './index.css';


const FriendList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET('friends', friendsList)
      .then(data => setFriendsList(data))
  }, []);


  return (
    <div className="FriendsList">
      {
        friendsList.length
          ? friendsList.map(item => <Friend friendEl={ item } key={ item.id }/> )
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendList;