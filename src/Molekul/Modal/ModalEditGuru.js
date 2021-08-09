import React from 'react';
import {  Button, Modal, Form } from 'react-bootstrap';
import EditGuru from '../Form/EditGuru';




function MyVerticallyCenteredModal(props) {
console.log('================propscxcxcx====================');
console.log(props.guru);
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
        <Form ClassName="form">
          <EditGuru guru={props.guru}/>
                </Form>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function PopUp(props) {
  const [modalShow, setModalShow] = React.useState(false);
console.log('===============props.isShow=====================');
console.log(props.isShow);
console.log('====================================');
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        guru= {props.guru}
      />
    </>
  );
}

export default PopUp;