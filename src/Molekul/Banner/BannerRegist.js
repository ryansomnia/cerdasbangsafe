import React, { Component } from "react";
import { Container,Button, Card, Accordion, Form} from 'react-bootstrap';
import "./BannerRegist.css";


export class Banner extends Component {
    render() { 
      return (
        <div className="bentuk">
        <Container md-4 className="bg-info" >
    
       <h1 id="judul">Pendaftaran Siswa Baru</h1>
        <h1 id="subjudul">Tahun ajaran 2030/2031, Fasilits lengkap, Pengajar yang terakreditasi.<br></br>
           Alamat Sekolah, Tlpn: 000 000 000, Email: kitapenuliscilik@gmail.com,
            Web: Penuliscilik.com.</h1>
        
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="0">
        Daftar!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nama Siswa</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Jenis Kelamin</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Agama</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Tanggal Lahir</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Tempat Lahir</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Alamat</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Nomor Handphone</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
    </Accordion>

      {/* <Button  variant='btn btn-outline-dark'>Daftar</Button> */}
      </Container>
      </div>
      );
    }
  }
  
  export default Banner;
  