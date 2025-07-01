import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Js/Home";
import Header from "./Js/Header";
import Terrenos from "./Js/Terrenos.jsx";
import Detalle from "./Js/Detalle";
import Formulario from "./Js/Formulario.jsx";
import Vendidos from "./Js/Vendidos.jsx";
import AdminAgregar from "./Js/AdminAgregar.jsx";
import Login from './Js/Login';
import FormularioPropiedad from "./Js/AgregarTerreno.jsx";
import AdminEditarEliminar from "./Js/AdminEditarEliminar.jsx";
import RutaProtegida from './Js/RutaProtegida'; // nuevo archivo

import "./Estilizacion/App.css";

// Nuevo componente para manejar rutas + header condicional
const AppContent = () => {
  const location = useLocation();
  const ocultarHeader = 
  location.pathname.startsWith("/Admin") ||
  location.pathname === "/login" ||
  location.pathname === "/agregar" ||
  location.pathname === "/editar";


  return (
    <>
      {!ocultarHeader && <Header />}

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/terrenos" element={<Terrenos />} />
  <Route path="/terreno/:id" element={<Detalle />} />
  <Route path="/formulario" element={<Formulario />} />
  <Route path="/vendidos" element={<Vendidos />} />
  <Route path="/login" element={<Login />} />

  {/* Rutas protegidas */}
  <Route path="/agregar" element={
    <RutaProtegida>
      <FormularioPropiedad />
    </RutaProtegida>
  } />
  <Route path="/editar" element={
    <RutaProtegida>
      <AdminEditarEliminar />
    </RutaProtegida>
  } />
  <Route path="/Admin" element={
    <RutaProtegida>
      <AdminAgregar />
    </RutaProtegida>
  } />
</Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
