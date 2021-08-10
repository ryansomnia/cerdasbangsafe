import React from 'react';
import {  Button, Modal, Form } from 'react-bootstrap';
import EditSpp from '../Form/EditSPP';




function MyVerticallyCenteredModal(props) {
console.log('================propscxcxcx====================');
console.log(props.lspp);
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
          <EditSpp lspp={props.lspp}/>
                </Form>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function SPP(props) {
  const [modalShow, setModalShow] = React.useState(false);
console.log('===============props.isShow=====================');
console.log(props.isShow);
console.log('====================================');
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        lspp= {props.lspp}
      />
    </>
  );
}

export default SPP;