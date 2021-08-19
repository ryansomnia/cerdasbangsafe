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
    
    login = () => {
        axios.post(api + "/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    swal({
                        title: "Edit data",
                        text: "Data Anda berhasil di Ubah",
                        type: "success",
                        icon: "success"
                    }).then(function () {
                        window.location.href="/user";
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log('====================================');
                console.log("Gagal");
                console.log('====================================');
            });
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }


    render() {
        return (
            <Container  >

                <Row >
                    <Col lg={5} md={5} sm={12} className="text-center mt-5 p-4" >
                        <Card style={{ width: '25rem' }}>
                            <Card.Body >

                                <img className="icon-img" src={loginIcon} alt="icon" />

                                <Form className="masuk">
                                    <Form.Group className="text-left">
                                        <Form.Label>NIM</Form.Label>
                                        <Form.Control type="text" placeholder="Username" name="username"  value={this.state.username} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group className="text-left">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} onChange={this.handleChange} />
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

            </Container>

        );
    }
}
