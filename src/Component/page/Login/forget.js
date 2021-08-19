import React from "react";
import { Form, Col, Row, Container, Card, Button } from 'react-bootstrap';
import loginIcon from '../../images/user.svg'
import uiImg from '../../images/login.svg'
import { PureComponent } from "react";
// import  "./login.css";

export default class forget extends PureComponent {


    render() {
        return (
            <Container  >
                <Row >
                    <Col lg={4} md={5} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className="text-left">
                                    lupa kata sandi Anda? Tidak masalah. Beri tahu kami alamat email Anda
                                    dan kami akan mengirimkan email berisi tautan pengaturan ulang kata sandi
                                    yang memungkinkan Anda memilih yang baru.
                                </Card.Text>
                                <Form.Group controlId="formBasicEmail" className="text-left">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Button className="reset" href="/login">Email Pemulihan</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8} md={6} sm={12} className="box">
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                </Row>
            </Container>

        );
    }
}