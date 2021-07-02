import React, { Component } from "react";
import { Container, Row, Col, Button,Card } from 'react-bootstrap';
import "./BannerRegist.css";


export class Banner extends Component {
    render() {
      return (
        <Container md-4  >
       <h1>Apa yang Kamu Cari</h1>
       <Button>Klik Lah</Button>
        <Row >
        <Col className="lokal" sm="4" >
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
</Row>

      </Container>
      );
    }
  }
  
  export default Banner;
  