import './index.css';

const TodoItem = ({ todoData, onClick }) => {
  let { id, text, nome } = todoData;

  return (
    <div className="TodoItem" key={id}>
      {console.log('Render Component TodoItem')}
      <h3>{ text }</h3>
      <h4>{ nome }</h4>
      <button className="btn" id={id} onClick={(e) => onClick(e)}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem;