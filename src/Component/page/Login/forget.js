import React from "react";
import {  Col, Row, Container, Card, Button } from 'react-bootstrap';
import uiImg from '../../images/login.svg'
import { PureComponent } from "react";
import {FaWhatsapp } from "react-icons/fa";
import  "./login.css";

export default class forget extends PureComponent {


    render() {
        return (
            <Container  >
                <Row >
                    <Col lg={5} md={6} className="data text-center mt-5 " >
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:"20px"}}>Lupa Password ??</Card.Title>
                                <Card.Text className="text-center">
                                    lupa kata sandi Anda? Tidak masalah. Anda dapat menghubungi pihak administrasi 
                                    SDS Cerdas Bangsa Untuk Masalah lupa sandi atau password untuk login,Klik untuk hubungi.
                                </Card.Text>
                                <a href={'https://wa.me/6289605804229'}><FaWhatsapp />+6289605804229</a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={7} md={6}className="box">
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                </Row>
            </Container>

        );
    }
}