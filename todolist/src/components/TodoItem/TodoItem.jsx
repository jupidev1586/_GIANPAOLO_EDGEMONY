import { memo } from 'react';
import './index.css';

const TodoItem = ({ todoData, onClick }) => {
  let { id, text, nome } = todoData;

  return (
    <div className="TodoItem" key={id}>
      {console.log('Render Component TodoItem')}
      <div className="TodoItem__header">
        <p>{ text }</p>
      </div>
      
      
      <div className="TodoItem__flexDiv">
        <p>{ nome }</p>
        <button className="btn" id={id} onClick={(e) => onClick(e)}>
          Delete
        </button>
      </div>
      
    </div>
  )
}

export default memo(TodoItem);