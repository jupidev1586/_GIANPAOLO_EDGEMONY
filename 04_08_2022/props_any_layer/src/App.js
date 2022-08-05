import './App.css';
import Componente1 from './components/Componente1';
import { data } from "./api/api.js";



function App() {
  return (
    <div className="App">
      <Componente1 nome={data.nome} cognome={data.cognome} email={data.email} />
    </div>
  );
}

export default App;
