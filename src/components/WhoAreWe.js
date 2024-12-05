import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const WhoAreWe = () => {
    return (
        <div>
            <Breadcrumbs title="¿Quiénes Somos?" />
            <section className="inner-page">
                <div className="container">
                    <h2>Misión</h2>
                    <p>
                        Promodescuentos Colombia S.A.S. ZOMAC, brinda servicios financieros (estudios de crédito, aprobación, otorgamiento y recaudo de cartera), a través de solicitudes de crédito y gestión efectiva de las deudas pendientes, ofreciendo soluciones que permitan realizar acuerdos de pago, fortaleciendo un enfoque hacia la satisfacción del cliente.
                    </p>
                </div>
            </section>

            <section className="inner-page">
                <div className="container">
                    <h2>Visión</h2>
                    <p>
                        Para el año 2025, Promodescuentos Colombia S.A.S. ZOMAC, proyecta ser una empresa líder en el sector de servicios financieros, soportada con procesos tecnológicos que permitan la simplificación en los procesos de otorgamiento y recaudo, promoviendo la satisfacción permanente de nuestros clientes.
                    </p>
                </div>
            </section>

            <section className="inner-page">
                <div className="container">
                    <h2>Política de calidad</h2>
                    <p>
                        En Promodescuentos Colombia S.A.S. ZOMAC, ofrecemos servicios financieros, fortalecidos en un proceso de mejora continua a través de un servicio al cliente de alta calidad, profesionalismo, empatía y eficiencia que permita superar las expectativas de nuestras partes interesadas.
                    </p>
                </div>
            </section>

            <section className="inner-page">
                <div className="container">
                    <h2>Valores corporativos</h2>
                    <p>
                        Respeto, honestidad, servicio, pasión y trabajo en equipo.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default WhoAreWe;