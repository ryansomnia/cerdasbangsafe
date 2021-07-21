import { Component } from 'react'
import { Container, Col, Row, Image} from 'react-bootstrap';
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./galery.css";
export default class galery extends Component {
    render() {
        return (
            <div>
           <Header/> 
            <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image className="picture" src="image/IMG_0201.JPG" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image className="picture" src="image/IMG_8561.JPG" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image className="picture" src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
            </Container>
          <Footer/>
          
        </div>
        )
    }
}