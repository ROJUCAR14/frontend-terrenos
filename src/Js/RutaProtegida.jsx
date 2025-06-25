import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const autenticado = localStorage.getItem('autenticado') === 'true';
  return autenticado ? children : <Navigate to="/login" />;
};

export default RutaProtegida;
