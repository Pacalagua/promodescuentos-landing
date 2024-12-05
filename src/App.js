import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import PrivacyNotice from './components/PrivacyNotice';
import PrivacyPolicy from './components/PrivacityPolicy';
import PaymentPoints from './components/PaymentPoints';
import WhoAreWe from './components/WhoAreWe'
import Footer from './components/Footer';
import TyC from './components/TyC';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aviso-de-privacidad" element={<PrivacyNotice />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/puntos-de-recaudo" element={<PaymentPoints />} />
          <Route path="/quienes-somos" element={<WhoAreWe />} />
          <Route path="/tyc" element={<TyC />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
