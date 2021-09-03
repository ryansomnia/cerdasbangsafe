import React, { Component } from "react";
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';
import loginIcon from '../../images/user.svg'
import uiImg from '../../images/login.svg'
import "./login.css";
import axios from "axios";
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: [],
            password: '',
            response: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    login = () => {
        axios.post(api + "/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(json => {
                console.log(json.data.values, 'data');
                if (json.data.message == "success") {
                    if (json.data.message == "success" && json.data.values[0].role == "admin") {
                        localStorage.setItem("username", json.data.values[0].username)
                        swal({
                            title: "Login",
                            text: "Anda Berhasil Login ",
                            type: "success",
                            icon: "success"
                        }).then(function () {
                            window.location.href = "/master";
                        });

                    } else {
                        const data = JSON.stringify (json.data.values[0])
                        localStorage.setItem("siswa", data)
                        swal({
                            title: "Login",
                            text: "Anda Berhasil Login ",
                            type: "success",
                            icon: "success"

                        }).then(function () {
                            window.location.href = "/user";
                        });

                    }

                } else {
                    swal({
                        title: "Login Gagal",
                        text: "Username atau Password tidak sesuai",
                        type: "danger",
                        icon: "error"
                    }).then(function () {
                        window.location.reload();
                    });
                }

            })

    }

    render() {
        return (
            <Container >

                <Row >
                    <Col lg={5} md={5} sm={12} className="text-center mt-5 p-4" >
                        <Card style={{ width: '25rem' }}>
                            <Card.Body >

                                <img className="icon-img" src={loginIcon} alt="icon" />

                                <Form className="masuk">
                                    <Form.Group className="text-left">
                                        <Form.Label>NIM</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Masukkan  UserName" />
                                    </Form.Group>

                                    <Form.Group className="text-left">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                    </Form.Group>
                                    <div className="d-flex text-left">
                                        <Row>
                                            <Col md="auto">
                                                <a className="reset" href="/lupapassword">Lupa Passwaord?</a>
                                            </Col>
                                            <Col xs lg="5">
                                                <Button onClick={this.login} className="btn-orange" variant="danger btn-block">Login</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <br />
                                </Form>
                           

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={7} md={6} sm={12} className="box">
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                </Row>

            </Container >

        );
    }


}






