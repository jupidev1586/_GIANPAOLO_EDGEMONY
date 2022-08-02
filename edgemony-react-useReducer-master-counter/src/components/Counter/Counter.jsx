import { useState } from 'react';
import './index.css';

const Counter = ({initialCount}) => {
  const [count, setCount] = useState(initialCount); 

  const array = [
    {
      id: 1,
      advice: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, est!',
    },
    {
      id: 2,
      advice: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, est!',
    },
    {
      id: 3,
      advice: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, est!',
    },
    {
      id: 4,
      advice: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, est!',
    }
  ]

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>PREVIOUS</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>NEXT</button>
    </div>
  );
}

export default Counter;