import React from 'react';
import {Modal} from 'react-bootstrap';
import EditSpp from '../../Form/Edit/EditSPP';


function MyVerticallyCenteredModal(props) {
  console.log(props.laporanspp);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Data SPP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditSpp laporanspp={props.laporanspp} />

      </Modal.Body>
    </Modal>
  );
}



function SPP(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props.isShow);
  return (
    <>

      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        laporanspp={props.laporanspp}
      />
    </>
  );
}

export default SPP;