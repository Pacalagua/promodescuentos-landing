import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

const TyC = () => {
    return (
        <div>
            <Breadcrumbs title="Términos y Condiciones" />
            <section className="inner-page">
                <div className="container">
                    <h2>Campaña de Cartera Diciembre 2024</h2>
                    <p>Las cuentas objetivo para esta campaña son:<br />
                        Cuentas facturadas entres los años 2.019, 2.020, 2.021, 2.022 y 2.023 que estén totalmente vencidas, es decir, no tienen ningún abono pendiente por vencer.</p>
                    <p>Los beneficios para ofrecer son:<br />
                        <ul>
                            <li>Descuento del 100% de los intereses moratorios que se hayan generado por el no pago de la obligación.</li>
                            <li>Descuento del 100% de la financiación pactada según el plan de pagos escogido por el cliente al momento de la venta.</li>
                            <li>Descuento sobre el saldo a capital de la obligación según el año de facturación de la misma así:
                                <ul>
                                    <li>70% de descuento para las cuentas facturadas el año 2.019 o antes.</li>
                                    <li>60% de descuento para las cuentas facturadas en los años 2.020 y 2.021.</li>
                                    <li>50% de descuento para las cuentas facturadas en los años 2.022 y 2.023</li>
                                </ul>
                            </li>
                        </ul>
                        Los descuentos aplican para aquellos clientes que cancelen en un único pago en efectivo en los convenios de recaudo y/o a través de las plataformas digitales habilitadas por la compañía la totalidad del valor que arroje la liquidación una vez realizados los respectivos descuentos:
                    </p>
                    <p><Link to="/puntos-de-recaudo">Consulte aquí los puntos de recaudo</Link></p>
                </div>
            </section>
        </div>
    );
};

export default TyC;