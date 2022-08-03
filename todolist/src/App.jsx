import { useReducer } from 'react';
import Button from './components/Button/';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import './App.css';


const stateDefaultValue = {
  todos: [],
  counter: 1,
  isError: false,
};

const todoList = {};

const reducer = (state, action) => {
  let { type, payload } = action;
  let { todos, isError, counter } = state;

  switch (type) {
    case 'AddTodo': {
      if (
        !todoList.text ||
        !todoList.nome
      ) {
        isError = true;
      } else {
        isError = false;
        let id = counter;
        counter++;
        todos = [...todos, { ...todoList, id: id }];
      }
      break;
    }
    
    case 'DeleteTodo': {
      todos = todos.filter((obj) => obj.id != payload);
      break;
    }
    default:
      
  }

  return {
    ...state,
    todos: todos,
    isError: isError,
    counter: counter,
  }
  
};

function App() {

  const [state, dispatch] = useReducer(reducer, stateDefaultValue);

  const handleInputChange = (e) => {
    todoList[e.target.name] = e.target.value;
  };

  const handleAddDispatch = () => {
    dispatch({ type: 'AddTodo' });
  };

  const handleDeleteDispatch = (e) => {
    dispatch({
      type: 'DeleteTodo',
      payload: e.target.id,
    });
  };


  return (
    <div className="App">
      <h1>Todolist</h1>
      
      <Form state={state} onChange={handleInputChange}>
        <Button onClick={handleAddDispatch}>Aggiungi</Button>
      </Form>

      { 
        state.todos.map((obj, index) => {
          return (
           <TodoItem
              key={'Todolist' + index}
              todoData={obj}
              onClick={handleDeleteDispatch}
            />
          );
        })
      }

    </div>
  );
}

export default App;
