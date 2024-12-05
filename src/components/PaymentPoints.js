import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyNotice = () => {
    return (
        <div>
            <Breadcrumbs title="Puntos de Recaudo" />
            <section className="inner-page">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-box">

                                <h3>Practipagos</h3>
                                <p>Paga tus abonos con PSE:<br />
                                    ✔ Ingresa con tu número de cédula<br />
                                    ✔ Selecciona tu factura</p>
                                <Link to="https://servicios.promodescuentoszomac.com.co/practipagos/public/" className="read-more" target="_blank"><span>Ir a Practipagos</span><i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-box">

                                <h3>Bancolombia</h3>
                                <p>Cuenta: 75600058049<br />
                                    Tipo: Cuenta Corriente<br />
                                    Convenio: 49949<br />
                                    Referencia: No. CC. Cliente</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-box">

                                <h3>Efecty</h3>
                                <h3>Super Giros</h3>
                                <h3>Grupo Aval</h3>
                                <p>Convenio: 6181<br />
                                    Referencia: C.C. Cliente</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-box">

                                <h3>Davivienda</h3>
                                <p>Cuenta: 136269998474<br />
                                    Tipo: Cuenta Corriente<br />
                                    Referencia: No. CC. Cliente</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-box">

                                <h3>Banco de Bogotá</h3>
                                <p>Cuenta: 845160092<br />
                                    Tipo: Cuenta Ahorros<br />
                                    Referencia: No. CC. Cliente</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                            <div className="service-box">

                                <h3>Banco Agrario</h3>
                                <p>Cuenta: 054010001342<br />
                                    Tipo: Cuenta Corriente<br />
                                    Convenio: 12800</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section >
        </div>
    );
};

export default PrivacyNotice;