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
      <Container fluid className="list">
        <Navbar.Brand className="Judul" href="/home" >
           <img className="logosd" src= "Image/logo.png" 
               alt="logo SDS Cerdas Bangsa"/>SD CERDAS BANGSA
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu">
        <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <NavDropdown title="Menu Utama" id="basic-nav-dropdown">
        <NavDropdown.Item href="/profil">Profil Sekolah</NavDropdown.Item>
          <NavDropdown.Item href="/visi">Visi & Misi</NavDropdown.Item>
          <NavDropdown.Item href="/strukturorganisasi">Sturktur Organisasi</NavDropdown.Item>
          <NavDropdown.Item href="/galery">Galeri</NavDropdown.Item>
          <NavDropdown.Item href="/menuUtama">Kalender Akademik</NavDropdown.Item>
          <NavDropdown.Item href="/">Fasilitas</NavDropdown.Item>
          <NavDropdown.Item href="/">Berita Sekolah</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        <Nav.Link><Button className= "btn-orange" variant="warning" onClick={() => this.pageLogin('/login')} >Login</Button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
    );
  }
}

export default withRouter (Header);
 
