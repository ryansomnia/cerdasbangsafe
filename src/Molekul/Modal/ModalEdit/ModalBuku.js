import React from 'react';
import { Modal } from 'react-bootstrap';
import EditBuku from '../../Form/Edit/EditBuku';






function MyVerticallyCenteredModal(props) {
  console.log('================propscxcxcx====================');
  console.log(props.buku);
  console.log('====================================');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditBuku buku={props.buku} />
      </Modal.Body>
    </Modal>
  );
}



function Buku(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log('===============props.isShow=====================');
  console.log(props.isShow);
  console.log('====================================');
  return (
    <>

      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        buku={props.buku}
      />
    </>
  );
}

export default Buku;