import React, { Component } from "react";
import { Navbar, Form, Button, Dropdown, Col, Row } from "react-bootstrap";
import { FaDesktop, FaIdCard, FaMoneyCheckAlt, FaUserCircle, FaBook, FaLandmark, FaTshirt } from "react-icons/fa";
import loginIcon from '../../images/user.svg'

export default class profilUser extends Component {
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
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarseragam"><FaTshirt /> Seragam</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/bayarbuku"><FaBook /> Buku</Dropdown.Item>
                                <Dropdown.Item className="list-group-item-action list-group-item-light" href="/uangpangkal"><FaLandmark /> Uang Pangkal</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <a className="list-group-item-action list-group-item-light p-3" href="/profiluser"><FaUserCircle /> Profile</a>
                    </div>
                </div>

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

                    <div className="container-fluid">
                        <Row className="gutters ">
                            <Col xl={3} lg={3} md={12} col-sm={12} >
                                <div className="card h-100 ">
                                    <div className="card-body  ">
                                        <div className="account-settings ">
                                            <div className="user-profile">
                                                <div className="user-avatar ">
                                                    <img className="icon-img " src={loginIcon} alt="Andreas Pasaribu" />
                                                </div>
                                            </div>
                                            <div className="setting-links">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xl={9} lg={9} md={12} sm={12}>
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="card-title">Profile Siswa</div>
                                    </div>
                                    <div className="card-body">
                                        <Row className="gutters">
                                            <Col xl={10} lg={10} md={10} sm={100} >
                                                <div className="form-group">
                                                    <label for="fullName">NIS</label>
                                                    <input type="text" class="form-control" id="fullName" placeholder="12345678" name="nim" value="12345678" readonly="" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="eMail">Nama</label>
                                                    <input type="email" className="form-control" id="eMail" placeholder="Siswa" readonly="" name="name" value="Siswa" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="phone">Email</label>
                                                    <input type="text" className="form-control" id="phone" placeholder="siswa@gmail.com" readonly="" name="email" value="siswa@gmail.com" />
                                                </div>

                                                <div className="form-group">
                                                    <label for="addRess">Kelas</label>
                                                    <input type="text" className="form-control" id="addRess" placeholder="1A" value="1A" readonly="" />
                                                </div>

                                            </Col>

                                            <Col xl={12} lg={12} md={12} sm={12} >
                                                <div className="text-right">
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Col>

                        </Row>
                    </div>

                </div>
            </div>
        );
    }
}
