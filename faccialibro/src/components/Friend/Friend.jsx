import './index.css';

const Friend = ({friendEl}) => {
  return (
    <div className="Friend">
      <div className="Friend__cont_photo">
        <img src={friendEl.photo} alt="" className="FriendList__photo" />
      </div>
      <h5 className="FriendList__name">{ friendEl.name }</h5>
    </div>
  )
}

export default Friend;