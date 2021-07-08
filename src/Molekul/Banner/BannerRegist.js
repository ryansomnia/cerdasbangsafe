import React, { Component } from "react";
import { Container,Button, Col } from 'react-bootstrap';
import "./BannerRegist.css";


export class Banner extends Component {
    render() { 
      return (
        <div className="bentuk">
        <Container md-4 >
      <h1 id="tanda">"</h1> 
       <h1 id="judul">SDS Cerdas Bangsa … Siap Mendidik anak Anda!</h1>
        <h1 id="subjudul">Tahun ajaran 2030/2031, Fasilits lengkap, Pengajar yang terakreditasi.<br></br>
           Alamat Sekolah, Tlpn: 000 000 000, Email: kitapenuliscilik@gmail.com,
            Web: Penuliscilik.com.</h1>
            <Col md={{ span: 6, offset: 5 }}>
            <Button >Daftar</Button>
            </Col>

        {/* <Row >
        <Col  sm="4" >
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          <Card.Title>Judul Situ</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

<Col sm="4">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          <Card.Title>Judul Apa</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

<Col sm="4">
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          <Card.Title>Judul Ini</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row> */}

      </Container>
      </div>
      );
    }
  }
  
  export default Banner;
  