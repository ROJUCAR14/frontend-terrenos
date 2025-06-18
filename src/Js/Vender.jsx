import React from 'react';
import '../Estilizacion/Vender.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Vender = () => {
  return (
    <section className="vender">
      <div className="vender-container">
        {/* IZQUIERDA */}
        <div className="vender-info">
          <h2>Contáctanos Hoy,<br />Estamos Listos para Ayudarte.</h2>
          <p>
            Solo tienes que completar los campos requeridos y enviarnos tu mensaje. Nos pondremos en contacto contigo a la brevedad posible.
          </p>
          <p>
            En Eborjas Grupo Inmobiliario, nuestra prioridad es ayudarte a alcanzar tus objetivos inmobiliarios.
          </p>
          <p>
            Valoramos la comunicación efectiva y la atención personalizada.
            Estamos a tu disposición para responder todas tus preguntas y brindarte la mejor asesoría en la
            gestión de tus propiedades comerciales.
          </p>

          <div className="contacto-detalles">
            <div className="contacto-item">
              <FaEnvelope className="icono" />
              <div>
                <h4>Correo</h4>
                <p>gerencia@eborjas.com</p>
              </div>
            </div>
            <div className="contacto-item">
              <FaPhoneAlt className="icono" />
              <div>
                <h4>Teléfono</h4>
                <p>(+51) 989-062-311</p>
              </div>
            </div>
            <div className="contacto-item">
              <FaMapMarkerAlt className="icono" />
              <div>
                <h4>Ubicación</h4>
                <p>Ofi. Jr. Cañón del Pato 103, Tambo de Monterrico, Santiago de Surco. Lima. Perú.</p>
              </div>
            </div>
            <div className="contacto-item">
              <FaMapMarkerAlt className="icono" />
              <div>
                <h4>Ubicación</h4>
                <p>Ofi. Jr. Sáenz Peña MZ. 15B E Lote 15, José Gálvez, Atocongo. Villa María del Triunfo. Lima. Perú.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div className="vender-formulario">
          <h3>Descubre como podemos ayudarte en la gestión de tus propiedades!</h3>
          <form
  action="https://formspree.io/f/mlekadlg"
  method="POST"
>
  <div className="form-group">
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required />
  </div>

  <div className="form-group">
    <label htmlFor="correo">Correo</label>
    <input type="email" id="correo" name="correo" required />
  </div>

  <div className="form-group">
    <label htmlFor="telefono">Teléfono</label>
    <input type="text" id="telefono" name="telefono" required />
  </div>

  <div className="form-group">
    <label htmlFor="mensaje">Mensaje</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
  </div>

  <button type="submit">Enviar</button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Vender;
