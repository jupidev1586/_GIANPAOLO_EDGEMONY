import './index.css';

const FriendCard = ({ friendData, onHandleClick }) => {
  const { photo, name } = friendData;

  return (
    <div onClick={onHandleClick} className="FriendCard">
      <h3 className="FriendCard__name">{ name }</h3>
      <img className="FriendCard__photo" src={ photo } alt={ name } />
    </div>
  )
}

export default FriendCard;
