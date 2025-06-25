import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarTerreno from './AgregarTerreno';
import AdminEditarEliminar from './AdminEditarEliminar';
import '../Estilizacion/AdminAgregar.css'; // para estilos lado a lado

const AdminAgregar = () => {
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    navigate('/');
  };

  return (
    <div className="admin-agregar-container">
      <div className="admin-header">
        <button className="logout-button" onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>

      <AgregarTerreno
        propiedadEditada={propiedadSeleccionada}
        limpiarPropiedadEditada={() => setPropiedadSeleccionada(null)}
      />
      <AdminEditarEliminar onEditar={setPropiedadSeleccionada} />
    </div>
  );
};

export default AdminAgregar;
