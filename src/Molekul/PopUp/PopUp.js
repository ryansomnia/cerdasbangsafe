import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./PopUp.css";

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Promo Diskon Tahun Baru
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Daftarkan Putra/Putri Anda</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={props.onHide}>
            Simpan
          </Button>
      </Modal.Footer>
    </Modal>
  );
}



function PopUp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Daftar
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PopUp;