import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente para proteger rutas que requieren autenticación
const RutaProtegida = ({ children }) => {
  // Verifica si el usuario está autenticado usando localStorage
  const autenticado = localStorage.getItem('autenticado') === 'true';

  // Si está autenticado, muestra el contenido; si no, redirige al login
  return autenticado ? children : <Navigate to="/login" />;
};

export default RutaProtegida;
