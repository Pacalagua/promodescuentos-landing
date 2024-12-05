import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyNotice = () => {
    return (
        <div>
            <Breadcrumbs title="Aviso de Privacidad" />
            <section className="inner-page">
                <div className="container">
                    <p>
                        <b>PROMODESCUENTOS COLOMBIA S.A.S. ZOMAC, en cumplimiento de la Ley 1581 de 2012 y demás normas concordantes, es responsable del tratamiento de sus datos personales.</b>
                    </p>
                    <p>
                        Los datos personales que <b>PROMODESCUENTOS COLOMBIA S.A.S. ZOMAC</b>, solicitan serán utilizados para ser incorporados en las bases de datos de la empresa con el fin de (i) continuar con el contacto y el trámite de solicitud de venta iniciado, aplicación laboral o proceso de contratación de proveedores. (ii) Consultar en cualquier tiempo, en las centrales de riesgo, toda la información relevante para conocer su desempeño como deudor y capacidad de pago. (iii) Enviar información sobre actividades desarrolladas por la compañía o demás del grupo. (iv) Enviar información que se considere de interés a través de diversos medios. (v) Realizar actividades de mercadeo y publicidad de servicios propios de compañía o demás empresas del grupo. (vi) Compartir la información con terceros que colaboran con la empresa y que para el cumplimiento de sus obligaciones deben acceder a la misma. (vii) Realizar gestiones de conocimiento al cliente, empleados, aspirantes, contratistas y proveedores y verificación o actualización de información a través de cualquier medio. (viii) Dar cumplimiento a las obligaciones legales de información a autoridades administrativas y judiciales.
                    </p>
                    <p>
                        De acuerdo con la legislación colombiana, los titulares de los datos personales, sus representantes legales o sus causahabientes tienen derecho a conocer, actualizar y rectificar sus datos personales frente a los responsables del tratamiento o encargados del tratamiento y, sólo en los casos en que sea procedente, a suprimirlos o revocar la autorización otorgada para su tratamiento.
                    </p>
                    <p>
                        Si requiere mayor información para conocer nuestra política de privacidad y tratamiento de datos personales y cambios sustanciales que se realicen a la misma.
                    </p>
                    <p><Link to="/politica-de-privacidad">Consulte aquí</Link></p>
                    <p>
                        Si desea presentar una consulta, reclamo o petición de información relacionada con la protección de datos personales puede comunicarse a la línea de atención <Link to="https://wa.me/573173008007">+57 317 300 8007</Link> o al correo electrónico <Link to="mailto:notificaciones@promodescuentoszomac.com.co">notificaciones@promodescuentoszomac.com.co</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyNotice;