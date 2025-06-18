import React from 'react';
import '../Estilizacion/Home.css';
import Portada from '../assets/videootro.mp4';
import ImagenNosotros from '../assets/nosotros.svg'; // ✅ importación correcta
import Terrenos from './Terrenos';
import Vendidos from './Vendidos';
import Servicios from './Servicios';
import Vender from './Vender';
import Contacto from './Contacto';
import MisionVision from './MisionVision';

const Home = () => {
  return (
    <>
      <div id="inicio" className="hero">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Portada} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <div className="hero-content">
          <h1>Eborjas Inmobiliario <br />grupo sac</h1>
          <p>Más de 20 años de experiencia y transparencia trabajando para usted</p>
          <a href="#terrenos" className="boton-ofertas">Conoce nuestras ofertas</a>
        </div>
      </div>

      {/* Sección Nosotros */}
      <section id="nosotros" className="nosotros">
        <div className="nosotros-container">
          <div className="nosotros-imagen">
            <img src={ImagenNosotros} alt="Nosotros" />
          </div>
          <div className="nosotros-texto">
            <h2>Nosotros</h2>
            <p>
              En Eborjas Inmobiliario, nos dedicamos a brindar asesoría integral en compra, venta y alquiler de propiedades.
              Nuestra experiencia de más de 20 años nos permite ofrecer un servicio personalizado, confiable y eficiente para cada cliente.
              Creemos en el compromiso, la transparencia y en ayudar a nuestros clientes a encontrar el lugar perfecto para su familia o negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Sección MisionVision */}
      <section className="MisionVision">
        <MisionVision/>
      </section>

      {/* Sección Vendidos */}
      <section id="propiedades" className="Vendidos">
        <Vendidos/>
      </section>

      {/* Sección Terrenos */}
      <section id="terrenos" className="Terrrenos">
        <Terrenos/>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="Servicios">
        <Servicios/>
      </section>

      {/* Sección Vender */}
      <section id="contacto" className="Vender">
        <Vender/>
      </section>

      {/* Sección Contacto */}
      <section className="Contacto">
        <Contacto/>
      </section>
    </>
  );
};

export default Home;
