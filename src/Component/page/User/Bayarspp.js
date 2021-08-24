import React, { Component } from "react";
import { Navbar, Form, Button, Dropdown, Container, Row, Col } from "react-bootstrap";
import Pembayaranspp from '../Pembayaran/pembayaranspp';
import { FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle } from "react-icons/fa";
import "./Bayarspp.css";


export default class bayarspp extends Component {
    pageLogin(path){
        console.log('logout',path);
        this.props.history.push(path)
      }

    render() {
        return (
            <div className="d-flex" id="wrapper">
                {/* <!-- Sidebar--> */}
                <div className="border-end" id="sidebar-wrapper">
                    <div class="sidebar-heading">Menu</div>
                    <div className="list-group list-group-flush">
                        <a className="list-group-item-action list-group-item-light p-3" href="/user"><FaDesktop /> Dashboard</a>
                        <a className="list-group-item-action list-group-item-light p-3" href="/bayarspp"><FaIdCard /> Pembayaran SPP</a>
                        <Dropdown className=" list-group-item-action list-group-item-light"   >
                            <Dropdown.Toggle className="list-group-item-action list-group-item-light" variant="light" id="dropdown-split-basic" >
                                <FaMoneyCheckAlt /> Pembayaran Cicilan
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarseragam">Seragam</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarbuku">Buku</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/uangpangkal">Uang Pangkal</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaUserCircle /> Profile</a>
                    </div>
                </div>
                {/* <!-- Page content wrapper--> */}
                <div id="page-content-wrapper">
                    {/* <!-- Top navigation--> */}
                    <Navbar className="expand-lg  border-bottom ">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <Form className="d-flex">
                                        </Form>
                                    </li>
                                    <li>
                                        <Navbar.Text>
                                            Signed in as: <a href="#login" className="btn-space">Siswa</a>
                                            <Button size="sm" variant="danger" onClick={() => this.pageLogin('/login')}>LogOut</Button>
                                        </Navbar.Text></li>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                    {/* <!-- Page content--> */}
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Pembayaranspp />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
