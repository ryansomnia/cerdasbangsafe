import React from 'react';
import { Modal } from 'react-bootstrap';
import EditSiswa from '../../Form/Edit/EditSiswa';




function MyVerticallyCenteredModal(props) {
    console.log('================propscxcxcx====================');
    console.log(props.siswa);
    console.log('====================================');
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Data Siswa
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditSiswa siswa={props.siswa} />

            </Modal.Body>
        </Modal>
    );
}



function Siswa(props) {
    const [modalShow, setModalShow] = React.useState(false);


    console.log('===============props.isShow=====================');
    console.log(props.isShow);
    console.log('====================================');
    return (
        <>

            <MyVerticallyCenteredModal
                show={props.isShow}
                onHide={() => setModalShow(modalShow)}
                laporanspp={props.siswa}
            />
        </>
    );
}

export default Siswa;