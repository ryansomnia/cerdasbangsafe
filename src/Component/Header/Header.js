import React, { Component } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import "./Header.css";
//xxxxx

export class Header extends Component {
  render() {
    return (
        <Container fluid >
          <Row>
            <Col className="logo" sm={2}>Logo</Col>
            <Col className="navigator" sm={8}>Navigasi</Col>
            <Col className= "account" sm={2}>
            <Button className= "login-btn">Login</Button>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Header;
