import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Estilizacion/AdminEditarEliminar.css';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

const AdminEditarEliminar = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({});
  // NUEVO estado para paginación
const [paginaActual, setPaginaActual] = useState(1);
const propiedadesPorPagina = 5;

const indiceUltima = paginaActual * propiedadesPorPagina;
const indicePrimera = indiceUltima - propiedadesPorPagina;
const propiedadesPagina = propiedades.slice(indicePrimera, indiceUltima);

const totalPaginas = Math.ceil(propiedades.length / propiedadesPorPagina);

// Cambiar de página
const cambiarPagina = (numero) => setPaginaActual(numero);

  useEffect(() => {
    obtenerPropiedades();
  }, []);

  const obtenerPropiedades = async () => {
    try {
      const res = await axios.get('http://localhost:3001/terrenos');
      setPropiedades(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta propiedad?')) {
      await axios.delete(`http://localhost:3001/terrenos/${id}`);
      obtenerPropiedades();
    }
  };

  const handleEdit = (propiedad) => {
    setEditando(propiedad.id);
    setForm(propiedad);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/terrenos/${editando}`, form);
    setEditando(null);
    obtenerPropiedades();
  };

  return (
    <div className="tabla-admin">
      <h2>Lista de Propiedades</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Operación</th>
            <th>Precio (S/)</th>
            <th>Precio (USD)</th>
            <th>Departamento</th>
            <th>Distrito</th>
            <th>Dirección</th>
            <th>Área</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {propiedadesPagina.map((p, index) => (
            <tr key={p.id}>
              <td>{indicePrimera + index + 1}</td>
              {editando === p.id ? (
                <>
                  <td><input name="titulo" value={form.titulo} onChange={handleChange} /></td>
                  <td>
                    <select name="estado" value={form.estado} onChange={handleChange}>
                      <option value="Disponible">Disponible</option>
                      <option value="Vendido">Vendido</option>
                    </select>
                  </td>
                  <td>
                    <select name="tipo" value={form.tipo} onChange={handleChange}>
                      <option value="Terreno">Terreno</option>
                      <option value="Casa">Casa</option>
                      <option value="Local Comercial">Local Comercial</option>
                      <option value="Departamento">Departamento</option>
                      <option value="Edificio">Edificio</option>
                      <option value="Oficina">Oficina</option>
                      <option value="Finca">Finca</option>
                      <option value="Duplex/Triplex">Duplex/Triplex</option>
                    </select>
                  </td>
                  <td>
                    <select name="operacion" value={form.operacion} onChange={handleChange}>
                      <option value="Venta">Venta</option>
                      <option value="Alquiler">Alquiler</option>
                      <option value="Venta/Alquiler">Venta/Alquiler</option>
                    </select>
                  </td>
                  <td><input name="precioSoles" value={form.precioSoles} onChange={handleChange} /></td>
                  <td><input name="precioUSD" value={form.precioUSD} onChange={handleChange} /></td>
                  <td><input name="departamento" value={form.departamento} onChange={handleChange} /></td>
                  <td><input name="distrito" value={form.distrito} onChange={handleChange} /></td>
                  <td><input name="direccion" value={form.direccion} onChange={handleChange} /></td>
                  <td><input name="area" value={form.area} onChange={handleChange} /></td>
                  <td><input name="descripcion" value={form.descripcion} onChange={handleChange} /></td>
                  <td>
                    <button className="btn guardar" onClick={handleUpdate}><FaSave /></button>
                    <button className="btn cancelar" onClick={() => setEditando(null)}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{p.titulo}</td>
                  <td>{p.estado}</td>
                  <td>{p.tipo}</td>
                  <td>{p.operacion}</td>
                  <td>{p.precioSoles}</td>
                  <td>{p.precioUSD}</td>
                  <td>{p.departamento}</td>
                  <td>{p.distrito}</td>
                  <td>{p.direccion}</td>
                  <td>{p.area}</td>
                  <td>{p.descripcion}</td>
                  <td>
                    <button className="btn editar" onClick={() => handleEdit(p)}><FaEdit /></button>
                    <button className="btn eliminar" onClick={() => handleDelete(p.id)}><FaTrash /></button>
                  </td>
                </>
              )}
            </tr>
          ))}

          {editando !== null && (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-form-container">
        <h3>Editar Propiedad</h3>
        <form onSubmit={handleUpdate}>
          <label>Título:</label>
          <input name="titulo" value={form.titulo} onChange={handleChange} />

          <label>Estado:</label>
          <select name="estado" value={form.estado} onChange={handleChange}>
            <option value="Disponible">Disponible</option>
            <option value="Vendido">Vendido</option>
          </select>

          <label>Tipo:</label>
          <select name="tipo" value={form.tipo} onChange={handleChange}>
            <option value="Terreno">Terreno</option>
            <option value="Casa">Casa</option>
            <option value="Local Comercial">Local Comercial</option>
            <option value="Departamento">Departamento</option>
            <option value="Edificio">Edificio</option>
            <option value="Oficina">Oficina</option>
            <option value="Finca">Finca</option>
            <option value="Duplex/Triplex">Duplex/Triplex</option>
          </select>

          <label>Operación:</label>
          <select name="operacion" value={form.operacion} onChange={handleChange}>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
            <option value="Venta/Alquiler">Venta/Alquiler</option>
          </select>

          <label>Precio (S/):</label>
          <input name="precioSoles" value={form.precioSoles} onChange={handleChange} />

          <label>Precio (USD):</label>
          <input name="precioUSD" value={form.precioUSD} onChange={handleChange} />

          <label>Departamento:</label>
          <input name="departamento" value={form.departamento} onChange={handleChange} />

          <label>Distrito:</label>
          <input name="distrito" value={form.distrito} onChange={handleChange} />

          <label>Dirección:</label>
          <input name="direccion" value={form.direccion} onChange={handleChange} />

          <label>Área:</label>
          <input name="area" value={form.area} onChange={handleChange} />

          <label>Descripción:</label>
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} />

          <div className="modal-buttons">
            <button type="submit" className="btn guardar"><FaSave /> Guardar</button>
            <button type="button" className="btn cancelar" onClick={() => setEditando(null)}><FaTimes /> Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

        </tbody>
      </table>
      <div className="paginacion">
  <button onClick={() => cambiarPagina(1)} disabled={paginaActual === 1}>Primero</button>
  <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>

  {[...Array(totalPaginas)].map((_, i) => (
    <button
      key={i + 1}
      onClick={() => cambiarPagina(i + 1)}
      className={paginaActual === i + 1 ? 'activo' : ''}
    >
      {i + 1}
    </button>
  ))}

  <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>Siguiente</button>
  <button onClick={() => cambiarPagina(totalPaginas)} disabled={paginaActual === totalPaginas}>Último</button>
</div>

    </div>
  );
};

export default AdminEditarEliminar;
