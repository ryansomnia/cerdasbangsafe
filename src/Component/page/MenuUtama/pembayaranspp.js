import React, { Component } from "react";
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
import "./pembayaranspp.css";


export default class Pembayaranspp extends Component {

render(){
    return(
        <Container  className="mt-5">
            <h4>Form Pembayaran</h4>
            <Form>
                <Row className="mb-3">
                <FormGroup as={Col} controlId="formGridEmail">
                    <Form.Label>Nama Siswa</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama Siswa" />
                </FormGroup>

                <FormGroup as={Col} controlId="formGridPassword">
                    <Form.Label>Nim Siswa</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Nim Siswa" />
                </FormGroup>
                </Row>

  <FormGroup className="mb-3" controlId="formGridAddress1">
        <Form.Label>SPP Bulan</Form.Label>
        <Form.Control placeholder="Masukkan Pembayaran Bulan Keberapa" />
  </FormGroup>

  <FormGroup className="mb-3" controlId="formGridAddress2">
        <Form.Label>Kelas</Form.Label>
        <Form.Control placeholder="Masukkan Kelas Siswa" />
  </FormGroup>

     <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload Bukti Pembayaran</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  

    <div className="d-flex justify-content-end">
    <Button variant="primary " type="submit">Bayar</Button>
   </div>
</Form>
           </Container>
        );
    }
}