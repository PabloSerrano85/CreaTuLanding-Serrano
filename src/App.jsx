// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ItemListContainer />
        <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
