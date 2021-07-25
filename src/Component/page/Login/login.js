import {Component } from "react";
import { Form, Button,  Col, Row, Container, NavLink} from 'react-bootstrap';
import loginIcon from '../../images/user.svg'
import uiImg from '../../images/login.svg'
import  "./login.css";

export default class login extends Component {
render() {
    return (
        <Container className="mt-5">
            <Row> 
            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img"  src={loginIcon} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Login</Button>

                            <div className="text-left mt-3">
                                <NavLink href="#"><small className="reset">Lupa Passwaord</small></NavLink>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
            </Row>
        </Container>

        );
    }
}