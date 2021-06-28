import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import "./Header.css";
//xxxxx

export class Header extends Component {
  render() {
    return (
        <Container fluid className="header">
          <Row>
            <Col className="logo" sm={2}>Logo</Col>
            <Col className="navigator" sm={8}>Navigasi</Col>
            <Col className= "account" sm={2}>login/logout/regist</Col>
          </Row>
        </Container>
    );
  }
}

export default Header;
