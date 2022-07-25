import AddMessage from './components/AddMessage';
import FriendList from './components/FriendList'
import MessageCardList from './components/MessageCardList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__friends">
        <FriendList/>
      </div>
      <div className="App_messages">
        <AddMessage />
        <MessageCardList/>
      </div>
    </div>
  );
}

export default App;
