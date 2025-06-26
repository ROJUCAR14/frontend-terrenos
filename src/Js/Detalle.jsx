import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Js/Header';
import Formulario from './Formulario';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Estilizacion/Detalle.css';

// URL base del backend
const API_URL = 'https://backend-terrenos.onrender.com';

const Detalle = () => {
  // Obtiene el ID de la URL
  const { id } = useParams();

  // Estado para el terreno cargado
  const [terreno, setTerreno] = useState(null);

  // Estado para saber si una imagen está ampliada y cuál
  const [indiceAmpliado, setIndiceAmpliado] = useState(null);

  // Carga los datos del terreno según el ID
  useEffect(() => {
    const obtenerTerreno = async () => {
      try {
        const res = await axios.get(`${API_URL}/terrenos/${id}`);
        setTerreno(res.data);
      } catch (error) {
        console.error('Error al obtener terreno:', error);
      }
    };
    obtenerTerreno();
  }, [id]);

  // Manejador de teclas para navegación en modo ampliado
  useEffect(() => {
    const manejarTeclas = (e) => {
      if (indiceAmpliado !== null) {
        if (e.key === 'ArrowLeft' && indiceAmpliado > 0) {
          setIndiceAmpliado(indiceAmpliado - 1);
        }
        if (
          e.key === 'ArrowRight' &&
          terreno?.imagenes &&
          indiceAmpliado < terreno.imagenes.length - 1
        ) {
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

  // Muestra mensaje mientras se cargan los datos
  if (!terreno) return <p style={{ textAlign: 'center' }}>Cargando terreno...</p>;

  // Procesamiento de las imágenes (pueden venir como array o string JSON)
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
        {/* Carrusel de imágenes */}
        <div className="detalle-img">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            {imagenes.map((img, i) => (
              <div
                key={i}
                onClick={() => setIndiceAmpliado(i)}
                style={{ cursor: 'zoom-in' }}
              >
                <img src={`${API_URL}${img}`} alt={`${terreno.titulo} ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Información del terreno */}
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

        {/* Mapa si hay dirección disponible */}
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

        {/* Formulario de contacto */}
        <Formulario />
      </div>

      {/* Modal para ampliar imagen con navegación */}
      {indiceAmpliado !== null && (
        <div className="modal-imagen" onClick={() => setIndiceAmpliado(null)}>
          <img
            src={`${API_URL}${imagenes[indiceAmpliado]}`}
            alt="Imagen ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="cerrar" onClick={() => setIndiceAmpliado(null)}>×</span>

          {/* Flecha izquierda */}
          {indiceAmpliado > 0 && (
            <button
              className="navegar izquierda"
              onClick={(e) => {
                e.stopPropagation();
                setIndiceAmpliado(indiceAmpliado - 1);
              }}
            >‹</button>
          )}

          {/* Flecha derecha */}
          {indiceAmpliado < imagenes.length - 1 && (
            <button
              className="navegar derecha"
              onClick={(e) => {
                e.stopPropagation();
                setIndiceAmpliado(indiceAmpliado + 1);
              }}
            >›</button>
          )}
        </div>
      )}
    </>
  );
};

export default Detalle;
