import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ContactModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="getstarted scrollto" onClick={handleShow}>
        Contacto
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Dialog className="modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>Contacto</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ fontSize: 'small', textAlign: 'center' }}>
            <p>Elige como quieres comunicarte con nosotros</p>
            <ul className="list-group">
              <li className='bi bi-whatsapp list-group-item'>
                <Link to="https://wa.me/573174350312" target="_blank" rel="noopener noreferrer"> +57 317 4350312<br />Cartera y Consignaciones</Link>
              </li>
              <li className='bi bi-whatsapp list-group-item'>
                <Link to="https://wa.me/573186296524" target="_blank" rel="noopener noreferrer"> +57 318 6296524<br />Atención al Cliente</Link>
              </li>
              <li className='bi bi-envelope-at list-group-item'>
                <Link to="mailto:notificaciones@promodescuentoszomac.com.co" target="_blank" rel="noopener noreferrer"> Correo Electrónico<br />notificaciones@promodescuentoszomac.com.co</Link>
              </li>
            </ul>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default ContactModal;