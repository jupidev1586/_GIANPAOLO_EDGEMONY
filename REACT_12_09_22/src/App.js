import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CatalogPage, ErrorPage } from './pages';
import { Navbar } from './components/Navbar/Navbar.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage  />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
