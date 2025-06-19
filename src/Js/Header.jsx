import React, { useState } from 'react';
import '../Estilizacion/Header.css';
import Logo from '../assets/luga.png';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo Eborjas" />
        </div>

        <nav className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
          <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setMenuAbierto(false)}>Nosotros</a>
          <a href="#propiedades" onClick={() => setMenuAbierto(false)}>Propiedades</a>
          <a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </nav>

        <div className={`hamburguesa ${menuAbierto ? 'activo' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
