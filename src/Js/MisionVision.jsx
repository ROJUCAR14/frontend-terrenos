import React from 'react';
import '../Estilizacion/MisionVision.css';

const MisionVision = () => {
  return (
    <section className="mvision-section">
      <div className="mvision-left">
        <div className="mvision-icon"></div>
        <h2><i>Deje que nuestro equipo profesional se ocupe<br />de la gestión inmobiliaria y lo lleve a cumplir todas sus expectativas.</i></h2>
        <p>
          Con más de 20 años de experiencia en el mercado inmobiliario, en Eborjas Grupo Inmobiliario somos expertos en la gestión de propiedades comerciales. Nos especializamos en el estudio de título y valorización de propiedades, lo que nos permite brindar un servicio de alta calidad. Además, somos intermediarios en el alquiler de locales comerciales, con soluciones adaptadas a cada cliente.
        </p>
      </div>

      <div className="mvision-right">
        <div className="mvision-card">
          <div className="mvision-card-img" style={{ backgroundImage: 'url(/img/mision.svg)' }}></div>
          <h3>Nuestra Misión</h3>
          <p>
            Brindar servicios de alta calidad en la gestión de propiedades comerciales, mediante soluciones adaptadas y una atención centrada en la satisfacción del cliente.
          </p>
        </div>

        <div className="mvision-card">
          <div className="mvision-card-img" style={{ backgroundImage: 'url(/img/vision.svg)' }}></div>
          <h3>Nuestra Visión</h3>
          <p>
            Buscamos ser una empresa innovadora y sostenible, comprometida con el desarrollo de soluciones creativas y efectivas para nuestros clientes y para el mercado en general.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;