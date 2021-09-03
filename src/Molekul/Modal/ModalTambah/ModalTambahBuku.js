import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import TambahCicilanBuku from '../../Form/Tambah/TambahCicilanBuku';





function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Tambah Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TambahCicilanBuku />
      </Modal.Body>
    </Modal>
  );
}



function ModalTambahCicilanBuku() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="d-flex justify-content-left">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Tambah Data
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalTambahCicilanBuku;