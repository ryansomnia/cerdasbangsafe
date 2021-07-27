import React from 'react';
import {  Button, Modal, Form } from 'react-bootstrap';
import Registrasi from '../Form/pendaftaran';
import "./PopUp.css";



function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Promo Diskon Tahun Baru
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ClassName="form">
          <Registrasi />
                </Form>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function PopUp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="d-flex justify-content-center">
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        Daftar
      </Button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PopUp;