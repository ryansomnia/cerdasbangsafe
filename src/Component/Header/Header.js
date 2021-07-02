import React, { Component } from "react";
import { Container, Row, Col, Button, } from 'react-bootstrap';
import "./Header.css";
//xxxxx

export class Header extends Component {
  render() {
    return (
        <Container fluid >
          <Row>
            <Col className="logo" sm={3}>
            {/* <img className="logosd" src= "Image/logo.png" */}
                {/* alt="logo SDS Cerdas Bangsa"/>SD CERDAS BANGSA */}
            </Col>
            
            <Col className="navigator " sm={7} >
              <Row>
            {/* <div className="navbar"> */}
            <Col sm={{ span: 1, offset: 4 }} ><a href="/#"> Home</a></Col>
            <Col sm={1} > <a  href="/#"> Profil</a></Col>
            <Col sm={3} > <a href="/#" className="ml-2 "> Menu Utama</a> </Col>
            <Col sm={3} > <a href="/#"  className="ml-1"> Contact Us</a> </Col>
            {/* </div> */}
            </Row>
          </Col>
            <Col className= "account" sm={2}>
            <Button className= "login-btn">Login</Button>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Header;
