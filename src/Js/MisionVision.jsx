import React from 'react';
import '../Estilizacion/MisionVision.css';

const MisionVision = () => {
  return (
    <section className="seccion-misionvision">
      <div className="intro">
        <h2><i>Deje que nuestro equipo profesional<br />se ocupe de la gestión inmobiliaria y lo lleve a cumplir todas sus expectativas.</i></h2>
        <p>
          Con más de 20 años de experiencia en el mercado inmobiliario, en Eborjas Grupo Inmobiliario somos expertos en la gestión de propiedades comerciales. Nos especializamos en el estudio de título y valorización de propiedades, lo que nos permite brindar un servicio de alta calidad a nuestros clientes. Además, somos intermediarios especializados en el alquiler de locales comerciales, lo que nos permite ofrecer soluciones adaptadas a las necesidades de cada cliente. En Eborjas Grupo Inmobiliario, ¡Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos inmobiliarios!
        </p>
      </div>

      <div className="tarjetas">
        <div className="tarjeta">
          <div className="imagen" style={{ backgroundImage: 'url(/img/mision.svg)' }}>
            <h3>Nuestra Mision</h3>
          </div>
          <p>
            En Eborjas Grupo Inmobiliario SAC, nos comprometemos a brindar servicios de alta calidad en la gestión de propiedades comerciales, mediante la oferta de soluciones adaptadas a las necesidades de nuestros clientes y la búsqueda constante de la satisfacción del cliente. Nuestra misión es ser un referente en el mercado inmobiliario y ofrecer un servicio que supere las expectativas de nuestros clientes.
          </p>
        </div>

        <div className="tarjeta">
          <div className="imagen" style={{ backgroundImage: 'url(/img/vision.svg)' }}>
            <h3>Nuestra Vision</h3>
          </div>
          <p>
            En Eborjas Grupo Inmobiliario SAC, nuestra visión es ser una empresa líder en el mercado inmobiliario, reconocida por su excelencia en la gestión de propiedades comerciales y por la calidad de sus servicios. Buscamos ser una empresa innovadora y sostenible, comprometida con el desarrollo de soluciones creativas y efectivas para nuestros clientes y para el mercado en general.
          </p>
        </div>

        <div className="tarjeta">
          <div className="imagen" style={{ backgroundImage: 'url(/img/mision.svg)' }}>
            <h3>Nuestra Asesion Inmobiliaria</h3>
          </div>
          <p>
            Nuestro historial comprobado habla por sí mismo: nos especializamos en impulsar sólidas valoraciones de propiedades a través de una cuidadosa planificación estratégica.Desde la evaluación de inversiones potenciales hasta la creación de soluciones personalizadas exitosas en cada paso del camino, nuestro equipo tiene la experiencia y los conocimientos necesarios para asegurarse de que sus objetivos se cumplan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
