import './App.css';
import Card from './components/Card/Card';
import Componente1 from './components/Componente1';
import { data } from "./api/api.js";



function App() {
  return (
    <div className="App" style={{ border: "2px solid blue", padding: 16 }}>
      <Componente1>
        <Card data={data} />
      </Componente1>
  </div>
  );
}

export default App;
