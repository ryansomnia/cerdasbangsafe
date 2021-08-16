import React from 'react';
import {  Button, Modal } from 'react-bootstrap';
import EditInventaris from '../../Form/Edit/EditInventaris';







function MyVerticallyCenteredModal(props) {
console.log('================propscxcxcx====================');
console.log(props.laporaninventaris);
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
          <EditInventaris laporaninventaris={props.laporaninventaris}/>
                
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Inventaris(props) {
  const [modalShow, setModalShow] = React.useState(false);
console.log('===============props.isShow=====================');
console.log(props.isShow);
console.log('====================================');
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        laporaninventaris= {props.laporaninventaris}
      />
    </>
  );
}

export default Inventaris;
