import React, { Component } from "react";
import { Button, Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import { withRouter } from "react-router";
//xxxxx

class Header extends Component {
  pageLogin(path){
    console.log('TEst 1',path);
    this.props.history.push(path)
  }
  render() {
    return (
      <Navbar className="Navbar" expand="lg">
  <Container fluid>
    <Navbar.Brand className="Judul" href="/home" >
           <img className="logosd" src= "Image/logo.png" 
               alt="logo SDS Cerdas Bangsa"/>SD CERDAS BANGSA
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="menu">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/profil">Profil</Nav.Link>
        <NavDropdown title="Menu Utama" id="basic-nav-dropdown">
          <NavDropdown.Item href="/galery">Galeri</NavDropdown.Item>
          <NavDropdown.Item href="/menuUtama">Kalender Akademik</NavDropdown.Item>
          <NavDropdown.Item href="/menuUtama">Pembayaran SPP</NavDropdown.Item>
          <NavDropdown.Item href="/menuUtama">Pembayaran Cicilan</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        <Nav.Link><Button className= "login-btn" onClick={() => this.pageLogin('/login')} >Login</Button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
      // <div className="Nav">
      //   <Container fluid >
      //     <Row>
      //       <Col className="logo" sm={3}>
      //       <img className="logosd" src= "Image/logo.png" 
      //            alt="logo SDS Cerdas Bangsa"/>SD CERDAS BANGSA


      //       </Col>
            
      //       <Col className="navigator " sm={7} >
      //         <Row>
      //       {/* <div className="navbar"> */}
      //       <Col sm={{ span: 1, offset: 4 }} ><a href="/#"> Home</a></Col>
      //       <Col sm={1} > <a  href="/login"> Profil</a></Col>
      //       <Col sm={3} > <a href="/menuUtama" className="ml-2 "> Menu Utama</a> </Col>
      //       <Col sm={3} > <a href="/#"  className="ml-1"> Contact Us</a> </Col>
      //       {/* </div> */}
      //       </Row>
      //     </Col>
      //       <Col className= "account" sm={2}>
      //       <Button className= "login-btn" onClick={() => this.pageLogin('/login')}>Login</Button>
      //       </Col>
      //     </Row>
      //   </Container>
      //   </div>
    );
  }
}

export default withRouter (Header);
 
