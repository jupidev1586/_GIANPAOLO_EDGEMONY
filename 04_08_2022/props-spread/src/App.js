import './App.css';
import Componente1 from './components/Componente1';
import { data } from "./api/api.js";



function App() {
  return (
    <div className="App">
      <Componente1 {...data} />
    </div>
  );
}

export default App;
