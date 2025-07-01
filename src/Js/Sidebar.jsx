import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdMenu, MdClose, MdOutlineLogout, MdDocumentScanner} from "react-icons/md";
import { FaHouseMedical, FaHouseUser } from "react-icons/fa6";
import '../Estilizacion/Sidebar.css';
import Logo from '../assets/luga.png';

const Sidebarr = () => {
  const [isOpen, setIsOpen] = useState(false); // nuevo estado
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    navigate('/');
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo Eborjas" />
          <h2>Eborjas Panel</h2>
        </div>
        <ul className="sidebar-links">
          <h4>
          <span>Menu</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="#" onClick={() => (window.location.href = "/Admin")}>
            <span className="material-symbols-outlined" onClick={() => (window.location.href = "/Admin")}><MdDocumentScanner/></span>
            Documentacion
          </a>
        </li>
          <h4><span>Admin</span><div className="menu-separator"></div></h4>
          <li>
            <a href="#" onClick={() => navigate("/agregar")}>
              <span><FaHouseMedical /></span> Agregar Propiedad
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/editar")}>
              <span><FaHouseUser /></span> Editar/Eliminar
            </a>
          </li>
          <h4><span>Opciones</span><div className="menu-separator"></div></h4>
          <li>
            <a href="#" onClick={cerrarSesion}>
              <span><MdOutlineLogout /></span> Cerrar Sesión
            </a>
          </li>
        </ul>
        <div className="user-account">
          <div className="user-profile">
            <img src="img/herta.jpeg" alt="Profile Image" />
            <div className="user-detail">
              <h3>Eborjas</h3>
              <span>Administrador</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebarr;
