import React from 'react';
import {  Button, Modal} from 'react-bootstrap';
import EditKelas from '../../Form/Edit/EditKelas';








function MyVerticallyCenteredModal(props) {
console.log('================propscxcxcx====================');
console.log(props.kelas);
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
          <EditKelas kelas={props.kelas}/>      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Kelas(props) {
  const [modalShow, setModalShow] = React.useState(false);
console.log('===============props.isShow=====================');
console.log(props.isShow);
console.log('====================================');
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        kelas= {props.kelas}
      />
    </>
  );
}

export default Kelas;
