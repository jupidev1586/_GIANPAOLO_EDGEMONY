import { useState } from 'react';
import MovieEntity from './components/MovieEntity';
import MainInput from './components/MainInput';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fas)


function App() {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <MainInput input={input} setInput={setInput} />
      <MovieEntity movieID={input ? input : 324668} />
    </div>
  );
}

export default App;
