import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaLock } from "react-icons/fa";
import '../Estilizacion/Login.css';
import Logo from '../assets/logo.png';

// URL base del backend
const API_URL = 'https://backend-terrenos.onrender.com';

const Login = () => {
  // Estados para capturar los valores del formulario
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  // Maneja el envío del formulario
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Envía los datos al backend para verificar credenciales
      const res = await axios.post(`${API_URL}/api/login`, { usuario, contraseña });

      if (res.data.success) {
        // Si las credenciales son válidas, guarda estado en localStorage y redirige
        localStorage.setItem('autenticado', 'true');
        navigate('/Admin');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        {/* Logo superior del formulario */}
        <img src={Logo} alt="Logo" className="login-logo" />

        {/* Campo de usuario */}
        <div className="input-container">
          <i className="fa fa-user icon"><FaUserCircle /></i>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        {/* Campo de contraseña */}
        <div className="input-container">
          <i className="fa fa-lock icon"><FaLock /></i>
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" className="login-button">Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default Login;
