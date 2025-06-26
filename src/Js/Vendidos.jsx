import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Estilizacion/Terrenos.css';

// URL base del backend en Render
const API_URL = 'https://backend-terrenos.onrender.com';

const Vendidos = () => {
  // Estado para almacenar los terrenos con estado 'Vendido'
  const [terrenosVendidos, setTerrenosVendidos] = useState([]);

  // Estado para controlar si se muestran todos o solo los primeros 10
  const [verMas, setVerMas] = useState(false);

  // Efecto que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const fetchVendidos = async () => {
      try {
        // Solicita todos los terrenos al backend
        const res = await axios.get(`${API_URL}/terrenos`);
        // Filtra solo los terrenos con estado 'Vendido'
        const filtrados = res.data.filter(t => t.estado === 'Vendido');
        // Actualiza el estado con los terrenos vendidos
        setTerrenosVendidos(filtrados);
      } catch (err) {
        console.error('Error al cargar terrenos vendidos:', err);
      }
    };
    fetchVendidos();
  }, []);

  // Determina cuántos terrenos mostrar según el estado vermas
  const terrenosAMostrar = verMas ? terrenosVendidos : terrenosVendidos.slice(0, 10);

  return (
    <section className="terrenos">
      <h2>NUESTRAS VENTAS</h2>

      <div className="terrenos-grid">
        {terrenosAMostrar.length > 0 ? (
          // Mapea los terrenos filtrados para renderizarlos como tarjetas
          terrenosAMostrar.map(t => (
            <Link to={`/terreno/${t.id}`} key={t.id} className="terreno-card">
              <div className="terreno-imagen">
                {/* Muestra la primera imagen del terreno */}
                <img src={`${API_URL}${t.imagenes[0]}`} alt={t.titulo} />
                <span className="terreno-tipo">{t.tipo}</span>
              </div>
              <div className="terreno-info">
                {/* Muestra el precio en soles y dólares */}
                <p className="precio">S/.{t.precioSoles} - ${t.precioUSD}</p>
                {/* Muestra el distrito */}
                <p className="distrito">📍 {t.distrito}</p>
                {/* Muestra el área del terreno */}
                <p className="area">Área: {t.area}</p>
              </div>
            </Link>
          ))
        ) : (
          // Mensaje si no se encuentran terrenos vendidos
          <p>No se encontraron terrenos vendidos.</p>
        )}
      </div>

      {/* Botón para mostrar más terrenos si hay más de 8 */}
      {terrenosVendidos.length > 8 && (
        <div className="ver-mas">
          <button onClick={() => setVerMas(!verMas)}>
            {verMas ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Vendidos;
