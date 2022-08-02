import { useReducer } from 'react';
import './index.css';

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      throw new Error();
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}


export default CounterReducer;