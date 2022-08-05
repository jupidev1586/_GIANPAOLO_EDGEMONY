import './index.css';

const Componente3 = ({ children }) => {
  return (
    <div style={{ border: "1px solid red", padding: 16 }}>
      <h1>Componente 3</h1>
      {children}
    </div>
  );
};

export default Componente3;