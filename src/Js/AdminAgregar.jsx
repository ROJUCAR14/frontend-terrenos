import React, { useState } from 'react';
import AgregarTerreno from './AgregarTerreno';
import AdminEditarEliminar from './AdminEditarEliminar';
import '../Estilizacion/AdminAgregar.css'; // para estilos lado a lado

const AdminAgregar = () => {
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);

  return (
    <div className="admin-agregar-container">
      <AgregarTerreno propiedadEditada={propiedadSeleccionada} limpiarPropiedadEditada={() => setPropiedadSeleccionada(null)} />
      <AdminEditarEliminar onEditar={setPropiedadSeleccionada} />
    </div>
  );
};

export default AdminAgregar;
