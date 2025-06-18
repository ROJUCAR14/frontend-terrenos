import React from 'react';
import '../Estilizacion/Servicios.css';
import { FaHome, FaMoneyBill , FaBusinessTime  } from 'react-icons/fa';

const Servicios = () => {
  return (
    <section className="servicios">
      <div className="servicios-overlay">
        <h2 className="titulo">NUESTROS SERVICIOS</h2>
        <div className="cards">
          <div className="card">
            <FaHome className="icono" />
            <h3>Estudio de Títulos</h3>
            <p>Realizamos un análisis detallado de la propiedad para verificar la titularidad y la legalidad de la misma.</p>
            <a href="https://wa.me/51989062311" target="_blank" rel="noopener noreferrer">CONTACTENOS HOY</a>
          </div>
          <div className="card">
            <FaMoneyBill  className="icono" />
            <h3>Estudio de Valorización</h3>
            <p>Realizamos un estudio detallado del valor de la propiedad para determinar el precio justo y obtener el máximo retorno de inversión.</p>
            <a href="https://wa.me/51989062311" target="_blank" rel="noopener noreferrer">CONTACTENOS HOY</a>
          </div>
          <div className="card">
            <FaBusinessTime  className="icono" />
            <h3>Intermediarios en Alquiler de Locales Comerciales</h3>
            <p>Somos especialistas en la gestión de alquileres de locales comerciales y ofrecemos servicios de intermediación para ayudarte a encontrar al inquilino adecuado y garantizar un contrato justo y beneficioso para ambas partes.</p>
            <a href="https://wa.me/51989062311" target="_blank" rel="noopener noreferrer">CONTACTENOS HOY</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
