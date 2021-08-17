import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Dropdown, Card, Col, Row } from "react-bootstrap";
import { FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle, FaSignOutAlt, FaBook, FaLandmark, FaTshirt } from "react-icons/fa";
import Iconseragam from '../../images/seragam.svg'
import IconBuku from '../../images/buku.svg'
import uangpangkal from '../../images/pangkal.svg'

import "./User.css";



export default class user extends Component {
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
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarseragam"><FaTshirt /> Seragam</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarbuku"><FaBook /> Buku</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/uangpangkal"><FaLandmark /> Uang Pangkal</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaUserCircle /> Profile</a>
                        <a className="list-group-item-action list-group-item-light p-3" href="/login"><FaSignOutAlt /> Log Out</a>
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
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="mr-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </li>
                                    <li>
                                        <Navbar.Text>
                                            Signed in as: <a href="#login">Siswa</a>
                                        </Navbar.Text></li>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                    {/* <!-- Page content--> */}
                    <div className="container-fluid">
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <img className="icon-img" variant="top" src={Iconseragam} alt="seragam" />
                                    <Card.Body>
                                        <Card.Title>Bayar Seragam</Card.Title>
                                        <Card.Text>
                                            Anda dapat melakukan pembayaran dengan menekan tombol bayar ini.
                                        </Card.Text>
                                        <Button href="/bayarseragam" variant="primary">Bayar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <img className="icon-img" src={IconBuku} alt="buku" />
                                    <Card.Body>
                                        <Card.Title>Bayar Buku</Card.Title>
                                        <Card.Text>
                                            Anda dapat melakukan pembayaran dengan menekan tombol bayar ini.
                                        </Card.Text>
                                        <Button href="/bayarbuku" variant="primary">Bayar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <img className="icon-img" variant="top" src={uangpangkal} alt="uangpangkal" />
                                    <Card.Body>
                                        <Card.Title>Bayar Uang Pangkal</Card.Title>
                                        <Card.Text>
                                            Anda dapat melakukan pembayaran dengan menekan tombol bayar ini.
                                        </Card.Text>
                                        <Button href="/uangpangkal" variant="primary">Bayar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>


                    </div>
                </div>
            </div>
        );
    }
}
