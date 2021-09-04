import React from 'react';
import { Modal } from 'react-bootstrap';
import EditSeragam from '../../Form/Edit/EditSeragam';

function MyVerticallyCenteredModal(props) {
  console.log(props.seragam);
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
        <EditSeragam seragam={props.seragam} />
      </Modal.Body>
    </Modal>
  );
}



function Seragam(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props.isShow);
  return (
    <>

      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        seragam={props.seragam}
      />
    </>
  );
}

export default Seragam;