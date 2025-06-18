import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Js/Header';
import Formulario from './Formulario';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Estilizacion/Detalle.css';

const Detalle = () => {
  const { id } = useParams();
  const [terreno, setTerreno] = useState(null);
  const [indiceAmpliado, setIndiceAmpliado] = useState(null);

  useEffect(() => {
    const obtenerTerreno = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/terrenos/${id}`);
        setTerreno(res.data);
      } catch (error) {
        console.error('Error al obtener terreno:', error);
      }
    };
    obtenerTerreno();
  }, [id]);

  useEffect(() => {
    const manejarTeclas = (e) => {
      if (indiceAmpliado !== null) {
        if (e.key === 'ArrowLeft' && indiceAmpliado > 0) {
          setIndiceAmpliado(indiceAmpliado - 1);
        }
        if (e.key === 'ArrowRight' && terreno?.imagenes && indiceAmpliado < terreno.imagenes.length - 1) {
          setIndiceAmpliado(indiceAmpliado + 1);
        }
        if (e.key === 'Escape') {
          setIndiceAmpliado(null);
        }
      }
    };
    window.addEventListener('keydown', manejarTeclas);
    return () => window.removeEventListener('keydown', manejarTeclas);
  }, [indiceAmpliado, terreno]);

  if (!terreno) return <p style={{ textAlign: 'center' }}>Cargando terreno...</p>;

  let imagenes = [];

try {
  if (Array.isArray(terreno.imagenes)) {
    imagenes = terreno.imagenes;
  } else if (typeof terreno.imagenes === 'string') {
    imagenes = JSON.parse(terreno.imagenes);
  }
} catch (e) {
  console.error('Error al procesar imágenes:', e);
}


  return (
    <>
      <Header />
      <div className="detalle-terreno">
        <div className="detalle-img">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            {imagenes.map((img, i) => (
              <div key={i} onClick={() => setIndiceAmpliado(i)} style={{ cursor: 'zoom-in' }}>
                <img src={`http://localhost:3001${img}`} alt={`${terreno.titulo} ${i + 1}`} />

              </div>
            ))}
          </Carousel>
        </div>

        <div className="detalle-info">
          <h2>{terreno.titulo}</h2>
          <p><strong>Estado:</strong> {terreno.estado}</p>
          <p><strong>Tipo de inmueble:</strong> {terreno.tipo}</p>
          <p><strong>Operacion:</strong> {terreno.operacion}</p>
          <p><strong>Precio en Soles:</strong> {terreno.precioSoles}</p>
          <p><strong>Precio en Dolares:</strong> {terreno.precioUSD}</p>
          <p><strong>Departamento:</strong> {terreno.departamento}</p>
          <p><strong>Distrito:</strong> {terreno.distrito}</p>
          <p><strong>Direccion:</strong> {terreno.direccion || 'No especificada'}</p>
          <p><strong>Área:</strong> {terreno.area}</p>
          <p><strong>Descripción:</strong> {terreno.descripcion}</p>
        </div>

        {terreno.direccion && (
          <div className="mapa">
            <iframe
              title="Ubicación del Terreno"
              src={`https://www.google.com/maps?q=${encodeURIComponent(terreno.direccion)}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px', marginTop: '30px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        <Formulario />
      </div>

      {indiceAmpliado !== null && (
  <div className="modal-imagen" onClick={() => setIndiceAmpliado(null)}>
    <img
      src={`http://localhost:3001${imagenes[indiceAmpliado]}`}
      alt="Imagen ampliada"
      onClick={(e) => e.stopPropagation()}
    />
    <span className="cerrar" onClick={() => setIndiceAmpliado(null)}>×</span>
    {indiceAmpliado > 0 && (
      <button className="navegar izquierda" onClick={(e) => {
        e.stopPropagation();
        setIndiceAmpliado(indiceAmpliado - 1);
      }}>‹</button>
    )}
    {indiceAmpliado < imagenes.length - 1 && (
      <button className="navegar derecha" onClick={(e) => {
        e.stopPropagation();
        setIndiceAmpliado(indiceAmpliado + 1);
      }}>›</button>
    )}
  </div>
)}

    </>
  );
};

export default Detalle;
