import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgregarTerreno from './AgregarTerreno';
import AdminEditarEliminar from './AdminEditarEliminar';
import '../Estilizacion/AdminAgregar.css'; // Estilos para diseño lado a lado

const AdminAgregar = () => {
  // Estado que almacena la propiedad seleccionada para editar
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);

  const navigate = useNavigate();

  // Función para cerrar sesión y redirigir al inicio
  const cerrarSesion = () => {
    localStorage.removeItem('autenticado'); // Elimina autenticación del almacenamiento local
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div className="admin-agregar-container">
      
      {/* Encabezado con botón para cerrar sesión */}
      <div className="admin-header">
        <button className="logout-button" onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>

      {/* Componente para agregar o editar terrenos */}
      <AgregarTerreno
        propiedadEditada={propiedadSeleccionada} // Propiedad a editar
        limpiarPropiedadEditada={() => setPropiedadSeleccionada(null)} // Limpia la propiedad seleccionada tras editar
      />

      {/* Tabla de administración: editar o eliminar propiedades */}
      <AdminEditarEliminar onEditar={setPropiedadSeleccionada} /> {/* Envía la propiedad seleccionada al formulario */}
    </div>
  );
};

export default AdminAgregar;
