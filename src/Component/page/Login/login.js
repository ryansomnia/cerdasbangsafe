import {Component } from "react";
import { Form, Button,  Col, Row, Container, NavLink} from 'react-bootstrap';
import loginIcon from '../../images/user.svg'
import uiImg from '../../images/login.svg'
import  "./login.css";

export default class login extends Component {
render() {
    return (
        <Container  >
            <Row > 
            <Col lg={4} md={5} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img"  src={loginIcon} alt="icon"/>
                        <Form  className="masuk">
                            <Form.Group controlId="formBasicEmail" className="text-left">
                            <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="text-left">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className= "btn-orange" variant="danger btn-block">Login</Button>

                            <div className="text-left mt-3">
                                <NavLink href="#"><small className="reset">Lupa Passwaord</small></NavLink>
                            </div>
                            <br/>

                            <div className="peringatan">  
                            jika belum mendaftar silahkan melakukan pendaftaran terlebih dahulu melalui link di bawah ini.</div><br/>
                           <Button href="/tambahcomp" variant="success btn-block">Daftar</Button>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12} className="box">
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
            </Row>
        </Container>

        );
    }
}