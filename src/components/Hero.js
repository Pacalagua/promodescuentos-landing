import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              <span style={{ color: '#F2F2F2' }}>
                Nuestro compromiso es brindarte una experiencia de compra fácil, conveniente y sin complicaciones
              </span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              <span style={{ color: '#D3D3D3' }}>¡Hacemos tu vida más fácil!</span>
            </h2>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
