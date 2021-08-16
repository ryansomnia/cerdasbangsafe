import React from 'react';
import { Modal} from 'react-bootstrap';
import EditBulanan from '../../Form/Edit/EditBulanan';





function MyVerticallyCenteredModal(props) {
console.log('================propscxcxcx====================');
console.log(props.laporanbulanan);
console.log('====================================');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       Edit Data Laporan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <EditBulanan laporanbulanan={props.laporanbulanan}/>
               
          
      </Modal.Body>
    </Modal>
  );
}



function Bulanan(props) {
  const [modalShow, setModalShow] = React.useState(false);
console.log('===============props.isShow=====================');
console.log(props.isShow);
console.log('====================================');
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={props.isShow}
        onHide={() => setModalShow(modalShow)}
        laporanbulanan= {props.laporanbulanan}
      />
    </>
  );
}

export default Bulanan;