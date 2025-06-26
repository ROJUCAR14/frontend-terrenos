import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Estilizacion/Terrenos.css';

// URL base del backend desplegado
const API_URL = 'https://backend-terrenos.onrender.com';

// Función para normalizar texto: elimina acentos y pasa todo a minúsculas
const normalize = str => (str || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const Terrenos = () => {
  // Estado que almacena todos los terrenos disponibles desde el backend
  const [terrenos, setTerrenos] = useState([]);

  // Estado para controlar cuántos terrenos mostrar (ver más)
  const [verMas, setVerMas] = useState(false);

  // Estado de filtros aplicados por el usuario
  const [filtros, setFiltros] = useState({
    tipo: 'Todos',
    operacion: 'Todos',
    distrito: 'Todos',
    busqueda: '',
  });

  // Carga de datos al montar el componente
  useEffect(() => {
    const fetchTerrenos = async () => {
      try {
        const res = await axios.get(`${API_URL}/terrenos`);
        console.log("Respuesta del backend:", res.data); // Verifica los datos recibidos
        setTerrenos(res.data);
      } catch (err) {
        console.error('Error cargando terrenos:', err);
      }
    };
    fetchTerrenos();
  }, []);

  // Manejo del cambio en los filtros
  const handleFiltroChange = e => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  // Filtrado de terrenos por tipo, operacion y distrito
  const resultadosFiltrados = terrenos
    .filter(t => t.estado !== 'Vendido') // Excluye los terrenos vendidos
    .filter(t => {
      const titulo = normalize(t.titulo);
      const ubicacion = normalize(t.ubicacion);
      const distritoTexto = normalize((t.ubicacion?.split(',')[1] || '').trim());
      const busqueda = normalize(filtros.busqueda);

      return (
        (filtros.tipo === 'Todos' || t.tipo === filtros.tipo) &&
        (filtros.operacion === 'Todos' || t.operacion === filtros.operacion) &&
        (filtros.distrito === 'Todos' || distritoTexto === normalize(filtros.distrito)) &&
        (titulo.includes(busqueda) || ubicacion.includes(busqueda))
      );
    });

  // Selecciona cuántos terrenos mostrar (por el momento solo 10)
  const terrenosAMostrar = verMas ? resultadosFiltrados : resultadosFiltrados.slice(0, 10);

  return (
    <section className="terrenos">
      <h2>TERRENOS DISPONIBLES</h2>

      {/* Filtros de búsqueda */}
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
          {/* Falta agregar distritos */}
        </select>
      </div>

      {/* Lista de terrenos */}
      <div className="terrenos-grid">
        {terrenosAMostrar.length > 0 ? (
          terrenosAMostrar.map(t => (
            <Link to={`/terreno/${t.id}`} key={t.id} className="terreno-card">
              <div className="terreno-imagen">
                {/* Imagen principal del terreno */}
                <img src={`${API_URL}${t.imagenes[0]}`} alt={t.titulo} />
                <span className="terreno-tipo">{t.tipo}</span>
              </div>
              <div className="terreno-info">
                {/* Información del terreno */}
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

      {/* Botón para mostrar más resultados */}
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
