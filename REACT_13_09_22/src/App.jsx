import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalog, ErrorPage } from './pages';
import { Navbar } from './components/Navbar/Navbar.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />
          <Route path="/catalogo/:categoryName" element={<Catalog />} />
          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
