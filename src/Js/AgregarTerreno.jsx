import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Estilizacion/AgregarTerreno.css';

const FormularioPropiedad = ({ propiedadEditada, limpiarPropiedadEditada }) => {
  const [form, setForm] = useState({
    titulo: '',
    tipo: '',
    operacion: '',
    precioSoles: '',
    precioUSD: '',
    departamento: '',
    distrito: '',
    direccion: '',
    area: '',
    descripcion: '',
    estado: ''
  });

  const [imagenes, setImagenes] = useState([]);
const API_URL = 'https://backend-terrenos.onrender.com';
  useEffect(() => {
    if (propiedadEditada) {
      setForm(propiedadEditada);
    }
  }, [propiedadEditada]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImagenes = (e) => {
    setImagenes(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) data.append(key, form[key]);
    for (let i = 0; i < imagenes.length; i++) data.append('imagenes', imagenes[i]);

    try {
      if (form.id) {
        // actualizar
        await axios.put(`${API_URL}/terrenos/${form.id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Propiedad actualizada correctamente');
      } else {
        // nueva
        await axios.post(`${API_URL}/terrenos/${form.id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Propiedad agregada correctamente');
      }

      // limpiar
      setForm({
        titulo: '', tipo: '', operacion: '', precioSoles: '', precioUSD: '',
        departamento: '', distrito: '', direccion: '', area: '', descripcion: '', estado: ''
      });
      setImagenes([]);
      limpiarPropiedadEditada(); // limpia la edición activa
    } catch (err) {
      console.error(err);
      alert('Error al procesar la propiedad');
    }
  };

  return (
    <div className="agregar-terreno">
      <h2>{form.id ? 'Editar Propiedad' : 'Agregar Nueva Propiedad'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" required />
        <select name="estado" value={form.estado} onChange={handleChange} required>
          <option value="">Selecciona estado</option>
          <option>Disponible</option>
          <option>Vendido</option>
        </select>
        <select name="tipo" value={form.tipo} onChange={handleChange} required>
          <option value="">Selecciona tipo</option>
          <option>Terreno</option>
          <option>Casa</option>
          <option>Local Comercial</option>
          <option>Departamento</option>
          <option>Edificio</option>
          <option>Oficina</option>
          <option>Finca</option>
          <option>Duplex/Triplex</option>
        </select>
        <select name="operacion" value={form.operacion} onChange={handleChange} required>
          <option value="">Selecciona operación</option>
          <option>Venta</option>
          <option>Alquiler</option>
          <option>Venta/Alquiler</option>
        </select>
        <input name="precioSoles" value={form.precioSoles} onChange={handleChange} placeholder="Precio en Soles" required />
        <input name="precioUSD" value={form.precioUSD} onChange={handleChange} placeholder="Precio en Dólares" required />
        <input name="departamento" value={form.departamento} onChange={handleChange} placeholder="Departamento" required />
        <input name="distrito" value={form.distrito} onChange={handleChange} placeholder="Distrito" required />
        <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección" required />
        <input name="area" value={form.area} onChange={handleChange} placeholder="Área" required />
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" required />
        <label>Imágenes:</label>
        <input type="file" multiple accept="image/*" onChange={handleImagenes} />
        <button type="submit">{form.id ? 'Actualizar Propiedad' : 'Agregar Propiedad'}</button>
      </form>
    </div>
  );
};

export default FormularioPropiedad;
