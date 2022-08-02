import { useState, useReducer } from 'react';
import advices from './commons/data/data';
import "./App.css";

function App() {

  const firstValue = { count: 0 };

  const [advice, setAdvice] = useState(0); 

  const [state, dispatch] = useReducer(reducer, firstValue);
  function reducer(state, action) {
    switch (action.type) {
      case "previous":
        return { count: state.count - 1 };
      case "next":
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div className="App">
      <div className="App_reducer">
        <div className={"container"}>
          {/* card container */}
          <div className={"card-container"}>
            <div className={"card"}>
              <h2>useState</h2>
              <p className={"card__text"}>Post number: #{advices[advice].id}</p>
              <p className={"card__text"}>{advices[advice].advice}</p>
            </div>
          </div>
          {/* Card Actions */}
          <div className={"card__actions"}>
            {/* Btn decrease */}
            <button
              disabled={advice === 0}
              className={"btn--previous"}
              onClick={() => setAdvice(advice - 1)}
            >
              Previous
            </button>
            {/* Btn increase */}
            <button
              disabled={advice === 4}
              className={"btn--next"}
              onClick={() => setAdvice(advice + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="App_state">
        <div className={"container"}>
          {/* card container */}
          <div className={"card-container"}>
            <div className={"card"}>
              <h2>useReducer</h2>
              <p className={"card__text"}>Post number: #{advices[state.count].id}</p>
              <p className={"card__text"}>{advices[state.count].advice}</p>
            </div>
          </div>
          {/* Card Actions */}
          <div className={"card__actions"}>
            {/* Btn decrease */}
            <button
              disabled={state.count === 0}
              className={"btn--previous"}
              onClick={() => dispatch({ type: "previous" })}
            >
              Previous
            </button>
            {/* Btn increase */}
            <button
              disabled={state.count === 4}
              className={"btn--next"}
              onClick={() => dispatch({ type: "next" })}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
