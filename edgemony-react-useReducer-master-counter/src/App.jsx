import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import './App.css';

function App() {

  return (
    <div className="App">
      <h3>Counter w/ useState()</h3>
      <Counter initialCount={0} />
      <br />
      <h3>Counter w/ useReducer()</h3>
      <CounterReducer />
    </div>
  );
}

export default App;
