// src/components/Header.jsx
import React from 'react';
import '../Estilizacion/Header.css';
import Logo from '../assets/luga.png'; // Cambia al nombre real de tu logo

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo Eborjas" />
        </div>
        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#propiedades">Propiedades</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
