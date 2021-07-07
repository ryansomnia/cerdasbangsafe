import {Component } from "react";
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import  "./login.css";

export default class login extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col sm="4">
            <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Masukan NIM</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     Jangan Masukkan Nomor Togel yah..!
                    </Form.Text>
                </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Masukkan Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  <Button variant="primary" type="submit">
    Masuk
  </Button>
</Form>
</Col>
</Row>
</Container>
        );
    }
}