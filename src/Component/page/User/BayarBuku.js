import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Dropdown , Container, Row, Col} from "react-bootstrap";
import {FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle,FaSignOutAlt } from "react-icons/fa";
import Pembayaranbuku from "../Pembayaran/pembayaranbuku";

import "./User.css";



export default class bayarbuku extends Component {
  render() {
    return (
        <div className="d-flex" id="wrapper">
        {/* <!-- Sidebar--> */}
        <div className="border-end" id="sidebar-wrapper">
            <div class="sidebar-heading">Menu</div>
            <div className="list-group list-group-flush">
                <a className="list-group-item-action list-group-item-light p-3" href="/user"><FaDesktop /> Dashboard</a>
                <a className="list-group-item-action list-group-item-light p-3" href="/bayarspp"><FaIdCard/> Pembayaran SPP</a>
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
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaUserCircle/> Profile</a>
                <a className="list-group-item-action list-group-item-light p-3" href="/login"><FaSignOutAlt/> Log Out</a>
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
            <Container fluid>
             <Row>
            <Col  md={{ span: 6, offset: 3 }}>
            <Pembayaranbuku/>
            </Col>
            </Row>
            </Container>
        </div>
    </div>
        );
    }
    }
        