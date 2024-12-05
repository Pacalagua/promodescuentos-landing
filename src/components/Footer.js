import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Nuestra Empresa</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/quienes-somos">¿Quiénes somos?</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Servicios</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/tyc">Términos y Condiciones</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/aviso-de-privacidad">Aviso de privacidad</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/puntos-de-recaudo">Puntos de recaudo</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="https://servicios.promodescuentoszomac.com.co/practipagos/public/pqrs/08" target="_blank" rel="noopener noreferrer">PQRS</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="https://www.sic.gov.co/" target="_blank" rel="noopener noreferrer">SIC</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-contact text-md-start">
              <h4>Contacto</h4>
              <p>
                <strong>Dirección:</strong><br />
                Vereda La Florida<br />
                Antiguo Zaguán de las Guitarras<br />
                Salento, Quindío<br /><br />
                <strong>Línea de atención:</strong> <Link to="https://wa.me/573186296524">+57 318 6296524</Link><br />
                <strong>Email:</strong> <Link to="mailto:notificaciones@promodescuentoszomac.com.co">notificaciones@promodescuentoszomac.com.co</Link><br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; 2024 Copyright <strong><span>Promodescuentos Colombia S.A.S. Zomac</span></strong>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
