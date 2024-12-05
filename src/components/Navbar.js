import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Navbar id="navbar" className="navbar">
    <ul>
      <ul>
        <li><Link className="nav-link scrollto active" href="index.html">Inicio</Link></li>
        <li><Link className="nav-link scrollto active" href="quienes-somos.html">¿Quiénes somos?</Link></li>
        <li><Link className="nav-link scrollto active" href="puntos-de-recaudo.html">Puntos de Recaudo</Link></li>
        <li><Link className="getstarted scrollto" href="#footer">Contacto</Link></li>
      </ul>
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </Navbar>
  );
};

export default Navbar;
