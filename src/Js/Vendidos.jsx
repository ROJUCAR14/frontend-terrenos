import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Estilizacion/Terrenos.css';

const Vendidos = () => {
  const [terrenosVendidos, setTerrenosVendidos] = useState([]);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    const fetchVendidos = async () => {
      try {
        const res = await axios.get('http://localhost:3001/terrenos');
        const filtrados = res.data.filter(t => t.estado === 'Vendido');
        setTerrenosVendidos(filtrados);
      } catch (err) {
        console.error('Error al cargar terrenos vendidos:', err);
      }
    };
    fetchVendidos();
  }, []);

  const terrenosAMostrar = verMas ? terrenosVendidos : terrenosVendidos.slice(0, 10);

  return (
    <section className="terrenos">
      <h2>NUESTRAS VENTAS</h2>

      <div className="terrenos-grid">
        {terrenosAMostrar.length > 0 ? (
          terrenosAMostrar.map(t => (
            <Link to={`/terreno/${t.id}`} key={t.id} className="terreno-card">
              <div className="terreno-imagen">
                <img src={`http://localhost:3001${t.imagenes[0]}`} alt={t.titulo} />
                <span className="terreno-tipo">{t.tipo}</span>
              </div>
              <div className="terreno-info">
                <p className="precio">S/.{t.precioSoles} - ${t.precioUSD}</p>
                <p className="distrito">📍 {t.distrito}</p>
                <p className="area">Área: {t.area}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No se encontraron terrenos vendidos.</p>
        )}
      </div>

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
