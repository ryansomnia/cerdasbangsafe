import {Component } from "react";
import { Form, Button,  Card, Row} from 'react-bootstrap';
import  "./login.css";

export default class login extends Component {
    render() {
        return (
           
            <div  className="body">
                <div className="container">
                <Row className="justify-content-md-center">
                    <Card style={{ width: '20rem' }} bg="success">
                    <Card.Body>
                    <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Masukan NIM</Form.Label>
                    <Form.Control type="email" placeholder="Enter Nim" />
                    <Form.Text>Jangan Masukkan Nomor Togel Yah..!</Form.Text>
                </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Masukkan Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

  <Button variant="primary" type="submit">Masuk</Button>

            </Form>
        </Card.Body>
        </Card>
    </Row>
    </div>
    </div>
        );
    }
}