import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Estilizacion/Terrenos.css';

const API_URL = 'https://backend-terrenos.onrender.com'; // ✅ tu backend en Render
const normalize = str => (str || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const Terrenos = () => {
  const [terrenos, setTerrenos] = useState([]);
  const [verMas, setVerMas] = useState(false);
  const [filtros, setFiltros] = useState({
    tipo: 'Todos',
    operacion: 'Todos',
    distrito: 'Todos',
    busqueda: '',
  });

  useEffect(() => {
    const fetchTerrenos = async () => {
      try {
        const res = await axios.get('${API_URL}/terrenos');
        setTerrenos(res.data);
      } catch (err) {
        console.error('Error cargando terrenos:', err);
      }
    };
    fetchTerrenos();
  }, []);

  const handleFiltroChange = e => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const resultadosFiltrados = terrenos
    .filter(t => t.estado === 'Disponible')
    .filter(t => {
      const titulo = normalize(t.titulo);
      const distrito = normalize(t.distrito);
      const busqueda = normalize(filtros.busqueda);

      return (
        (filtros.tipo === 'Todos' || t.tipo === filtros.tipo) &&
        (filtros.operacion === 'Todos' || t.operacion === filtros.operacion) &&
        (filtros.distrito === 'Todos' || distrito === normalize(filtros.distrito)) &&
        (titulo.includes(busqueda) || distrito.includes(busqueda))
      );
    });

  const terrenosAMostrar = verMas ? resultadosFiltrados : resultadosFiltrados.slice(0, 10);

  return (
    <section className="terrenos">
      <h2>TERRENOS DISPONIBLES</h2>

      {/* Filtros */}
      <div className="filtros">
        <select name="tipo" value={filtros.tipo} onChange={handleFiltroChange}>
          <option value="Todos">Todos los tipos</option>
          <option value="Terreno">Terreno</option>
          <option value="Casa">Casa</option>
          <option value="Local Comercial">Local Comercial</option>
          <option value="Departamento">Departamento</option>
          <option value="Edificio">Edificio</option>
          <option value="Oficina">Oficina</option>
          <option value="Finca">Finca</option>
          <option value="Duplex/Triplex">Duplex/Triplex</option>
        </select>
        <select name="operacion" value={filtros.operacion} onChange={handleFiltroChange}>
          <option value="Todos">Tipo de operacion</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Venta/Alquiler">Venta/Alquiler</option>
        </select>
        <select name="distrito" value={filtros.distrito} onChange={handleFiltroChange}>
          <option value="Todos">Todos los distritos</option>
          {/* Puedes agregar opciones de distritos manualmente si quieres */}
        </select>
      </div>

      {/* Lista de terrenos */}
      <div className="terrenos-grid">
        {terrenosAMostrar.length > 0 ? (
          terrenosAMostrar.map(t => (
            <Link to={`/terreno/${t.id}`} key={t.id} className="terreno-card">
              <div className="terreno-imagen">
                <img src={`${API_URL}${t.imagenes[0]}`} alt={t.titulo} />

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
          <p>No se encontraron terrenos disponibles.</p>
        )}
      </div>

      {/* Botón ver más/ver menos */}
      {resultadosFiltrados.length > 8 && (
        <div className="ver-mas">
          <button onClick={() => setVerMas(!verMas)}>
            {verMas ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Terrenos;
