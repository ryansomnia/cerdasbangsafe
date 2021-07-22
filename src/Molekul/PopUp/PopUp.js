import React from 'react';
import {  Button, Modal, FormGroup, Row, Col, Form } from 'react-bootstrap';
import "./PopUp.css";
import Alert from '../PopUp/alert';


function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Promo Diskon Tahun Baru
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <Container> */}
        <h5 >Daftarkan Putra/Putri Anda</h5>
        <Form ClassName="form">
                    <Col>
                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nama_siswa"    placeholder="Masukkan Nama Siswa" />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                <Form.Control type="text" name="jenis_kelamin"    placeholder="Masukkan Jenis Kelamin"/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Agama</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="agama"     placeholder="Masukkan Agama"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Lahir</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="date" name="tgl_lahir"   placeholder="Masukkan Tanggal Lahir DD-MM-YY"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tempat Lahir</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="tempat_lahir"     placeholder="Masukkan Tempat Lahir"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Alamat</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="alamat"  placeholder="Masukkan Alamat Lengkap"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Nomor Handphone</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="no_hp"   placeholder="Masukkan Nomor Handphone"/>
                            </Col>
                        </Row>
                    </FormGroup>

                   
                    </Col>

                </Form>
                {/* </Container> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button><Alert /></Button>
      </Modal.Footer>
    </Modal>
  );
}



function PopUp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Daftar
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PopUp;