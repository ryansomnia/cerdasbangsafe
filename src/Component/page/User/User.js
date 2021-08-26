import React, { Component } from "react";
import { Navbar, Form, Button, Dropdown } from "react-bootstrap";
import { FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle, FaBook, FaLandmark, FaTshirt } from "react-icons/fa";

import "./User.css";



export default class user extends Component {
    pageLogin(path) {
        console.log('logout', path);
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
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarseragam"><FaTshirt /> Seragam</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarbuku"><FaBook /> Buku</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/uangpangkal"><FaLandmark /> Uang Pangkal</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <a className="list-group-item-action list-group-item-light p-3" href="/profiluser"><FaUserCircle /> Profile</a>
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

                                            <Button size="sm" size="sm" variant="danger" onClick={() => this.pageLogin('/login')}>LogOut</Button>
                                        </Navbar.Text></li>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                    {/* <!-- Page content--> */}
                    <div className="container-fluid">
                        <div className="tampilan" style={{ padding: '0 1rem' }}>
                        <div class="card" style={{ width: '18rem', marginRight: "15px" }} >
                            <div class="card-body "
                            style={{ 
                                margin: "1em",
                                padding: "0 1.5rem",
                                }}>
                                <h5 class="card-title">Bayar Uang Pangkal </h5>
                                <p class="card-text">Anda dapat melakukan pembayaran dengan menekan tombol bayar ini</p>
                                <a href="/uangpangkal" class="card-link">klik Tombil !</a>
                            </div>
                        </div>
                        
                        <div class="card" style={{ width: '18rem',  marginRight: "15px" }}>
                            <div class="card-body"
                             style={{ 
                                margin: "1em",
                                padding: "0 1.5rem",
                                }}>
                                <h5 class="card-title">Bayar Buku ?</h5>
                                <p class="card-text">Anda dapat melakukan pembayaran dengan menekan tombol bayar ini.</p>
                                <a href="/bayarbuku" class="card-link">klik Tombil !</a>
                            </div>
                        </div>
                       

                        <div class="card" style={{ width: '18rem' }}>
                            <div class="card-body"
                             style={{ 
                                margin: "1em",
                                padding: "0 1.5rem",
                                }}>
                                <h5 class="card-title">Bayar Seragam ?</h5>
                                <p class="card-text">Anda dapat melakukan pembayaran dengan menekan tombol bayar ini.</p>
                                <a href="/bayarseragam" class="card-link">klik Tombil !</a>
                            </div>
                        </div>
                    </div>



                    </div>
                </div>
            </div>
        );

    }
}