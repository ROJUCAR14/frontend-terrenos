import React from 'react';
import '../Estilizacion/Contacto.css';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contactoContent">
        <h3>Eborjas Grupo Inmobiliario SAC</h3>
        <p>
          RUC 20610912291
        </p>
        <p>
          Enrique Borjas
          Proyect Manager
        </p>
        <p>
          Código Agente Inmobiliario:
          19303-PN-MVCS
        </p>
        <ul className="socials">
          <li><a
              href="https://www.facebook.com/profile.php?id=61572912864822"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a></li>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a
              href="https://wa.me/51989062311"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a></li>
          <li><a
              href="https://www.instagram.com/eborjas_grupo.inmobiliario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a></li>
          <li><a href="#"><FaLinkedin /></a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contacto;
