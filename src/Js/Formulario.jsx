import React, { useEffect, useState } from 'react';
import '../Estilizacion/Formulario.css';

const Formulario = () => {
  const [urlActual, setUrlActual] = useState('');

  // Al montar el componente, guardar la URL actual para enviar en el formulario
  useEffect(() => {
    setUrlActual(window.location.href);
  }, []);

  // Función para enviar el mensaje por WhatsApp
  const enviarWhatsApp = (e) => {
    e.preventDefault();

    // Obtener valores desde los inputs por su ID
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const distrito = document.getElementById('distrito').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación de campos obligatorios
    if (!nombre || !telefono || !distrito) {
      alert('Por favor completa los campos obligatorios: Nombre, Teléfono y Distrito.');
      return;
    }

    // Construcción del mensaje de WhatsApp
    const texto = `Hola, soy ${nombre}. Mi número es ${telefono}, soy de ${distrito}. Mi correo es ${correo}. Mensaje: ${mensaje}. URL de la propiedad: ${window.location.href}`;
    const numeroWhatsApp = '51989062311'; // Número destino (con código de país)

    // Abrir WhatsApp con el mensaje prellenado
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="form-width">
      {/* Formulario conectado con Formspree para enviar por correo */}
      <form
        id="form-container"
        method="POST"
        action="https://formspree.io/f/mlekadlg"
      >
        {/* Campo oculto para incluir la URL actual de la propiedad en el correo */}
        <input type="hidden" name="url" value={urlActual} />

        {/* Logo superior */}
        <div className="logotipe d-flex justify-content-center">
          <a href="#" className="d-flex align-items-center">
            <img src="/img/luga.png" className="img-fluid" alt="Logotipo" />
          </a>
        </div>

        {/* Título del formulario */}
        <h4 className="text-center text-uppercase anton">CONTÁCTANOS</h4>
        <hr />

        {/* Campos del formulario */}
        <div className="inputs-form form-group">
          {/* Nombre y apellido */}
          <label htmlFor="nombre" className="ubuntu">Nombre y apellido:</label>
          <input type="text" name="nombre" id="nombre" className="form-control mb-3" required />

          {/* Teléfono */}
          <label htmlFor="telefono" className="ubuntu">Teléfono:</label>
          <input type="tel" name="telefono" id="telefono" className="form-control mb-3" required />

          {/* Distrito */}
          <label htmlFor="distrito" className="ubuntu">Distrito:</label>
          <input type="text" name="distrito" id="distrito" className="form-control mb-3" required />

          {/* Correo electrónico */}
          <label htmlFor="correo" className="ubuntu">Correo electrónico:</label>
          <input type="email" name="correo" id="correo" className="form-control mb-3" />

          {/* Mensaje */}
          <label htmlFor="mensaje" className="ubuntu">Mensaje:</label>
          <textarea name="mensaje" id="mensaje" rows="4" className="form-control mb-3"></textarea>

          {/* Botón para enviar el formulario por correo */}
          <button type="submit" className="btn mt-1 ubuntu" id="send-form">
            Enviar por Correo
          </button>

          {/* Botón para enviar el mensaje por WhatsApp */}
          <button
            type="button"
            onClick={enviarWhatsApp}
            className="btn mt-2 ubuntu btn-whatsapp"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
