import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Js/Home";
import Header from "./Js/Header";
import Terrenos from "./Js/Terrenos.jsx";
import Detalle from "./Js/Detalle";
import Formulario from "./Js/Formulario.jsx";
import Vendidos from "./Js/Vendidos.jsx";
import AdminAgregar from "./Js/AdminAgregar.jsx";

import "./Estilizacion/App.css";

// Nuevo componente para manejar rutas + header condicional
const AppContent = () => {
  const location = useLocation();
  const esRutaAdmin = location.pathname.startsWith("/Admin");

  return (
    <>
      {!esRutaAdmin && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terrenos" element={<Terrenos />} />
        <Route path="/terreno/:id" element={<Detalle />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/vendidos" element={<Vendidos />} />
        <Route path="/Admin" element={<AdminAgregar />} />
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
