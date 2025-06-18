import React, { useEffect, useState } from 'react';
import '../Estilizacion/Formulario.css';

const Formulario = () => {
  const [urlActual, setUrlActual] = useState('');

  useEffect(() => {
    setUrlActual(window.location.href);
  }, []);

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const distrito = document.getElementById('distrito').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !telefono || !distrito) {
      alert('Por favor completa los campos obligatorios: Nombre, Teléfono y Distrito.');
      return;
    }

    const texto = `Hola, soy ${nombre}. Mi número es ${telefono}, soy de ${distrito}. Mi correo es ${correo}. Mensaje: ${mensaje}. URL de la propiedad: ${window.location.href}`;
    const numeroWhatsApp = '51989062311';

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="form-width">
      <form
        id="form-container"
        method="POST"
        action="https://formspree.io/f/mlekadlg"
      >
        {/* Campo oculto para enviar la URL por correo */}
        <input type="hidden" name="url" value={urlActual} />

        <div className="logotipe d-flex justify-content-center">
          <a href="#" className="d-flex align-items-center">
            <img src="/img/luga.png" className="img-fluid" alt="Logotipo" />
          </a>
        </div>

        <h4 className="text-center text-uppercase anton">CONTÁCTANOS</h4>
        <hr />

        <div className="inputs-form form-group">
          <label htmlFor="nombre" className="ubuntu">Nombre y apellido:</label>
          <input type="text" name="nombre" id="nombre" className="form-control mb-3" required />

          <label htmlFor="telefono" className="ubuntu">Teléfono:</label>
          <input type="tel" name="telefono" id="telefono" className="form-control mb-3" required />

          <label htmlFor="distrito" className="ubuntu">Distrito:</label>
          <input type="text" name="distrito" id="distrito" className="form-control mb-3" required />

          <label htmlFor="correo" className="ubuntu">Correo electrónico:</label>
          <input type="email" name="correo" id="correo" className="form-control mb-3" />

          <label htmlFor="mensaje" className="ubuntu">Mensaje:</label>
          <textarea name="mensaje" id="mensaje" rows="4" className="form-control mb-3"></textarea>

          <button type="submit" className="btn mt-1 ubuntu" id="send-form">
            Enviar por Correo
          </button>

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
