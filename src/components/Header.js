import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import ContactModal from '../components/ContactModal';


const Header = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center">
            <img src={logo} alt="Promodescuentos Colombia S.A.S Zomac" />
          </Link>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <ul>
              <li><Link className="nav-link scrollto active" to="/">Inicio</Link></li>
              <li><Link className="nav-link scrollto active" to="/quienes-somos">¿Quiénes somos?</Link></li>
              <li><Link className="nav-link scrollto active" to="/puntos-de-recaudo">Puntos de Recaudo</Link></li>
            </ul>
          </ul>
          <ContactModal />
        </nav>
      </div>
    </header>
  );
};

export default Header;