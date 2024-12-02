// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usamos React Router para la navegación
import CartWidget from './cartwidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand"></Link>
        <img className='logo' src="./src/images/Logo.png" alt=""></img>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/productos" className="navbar-link">Productos</Link>
        <Link to="/contacto" className="navbar-link">Contacto</Link>
      </div>
      <div className="navbar-right">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
