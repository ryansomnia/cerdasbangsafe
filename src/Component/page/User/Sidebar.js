import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import Pembayaranspp from '../Pembayaran/pembayaranspp';
import {FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle,FaSignOutAlt } from "react-icons/fa";

import "./User.css";



export default class Sidebar extends Component {
  render() {
    return (
        <div class="d-flex" id="wrapper">
        {/* <!-- Sidebar--> */}
        <div className="border-end" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">Menu</div>
            <div className="list-group list-group-flush">
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaDesktop /> Dashboard</a>
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaIdCard/> Pembayaran SPP</a>
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaMoneyCheckAlt/> Pembayaran Cicilan</a>
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaUserCircle/> Profile</a>
                <a className="list-group-item-action list-group-item-light p-3" href="#!"><FaSignOutAlt/> Log Out</a>
            </div>
        </div>
        {/* <!-- Page content wrapper--> */}
        <div id="page-content-wrapper">
            {/* <!-- Top navigation--> */}
            <Navbar className="expand-lg bg-light border-bottom">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                            Signed in as: <a href="#login">Naruto</a>
                        </Navbar.Text></li>
                        </ul>
                    </div>
                </div>
            </Navbar>
            {/* <!-- Page content--> */}
            <div className="container-fluid">
                <p><Pembayaranspp/></p>
                
            </div>
        </div>
    </div>
        );
    }
    }
        