import { Component } from 'react'
import { Container, Card, Button, Row, Col} from 'react-bootstrap';
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
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image/IMG_0201.JPG" />
                <Card.Body>
                    <Card.Title>Acara Hut Kemerdekaan RI Ke 78</Card.Title>
                    <Button variant="primary">Lihat Banyak</Button>
                </Card.Body>
            </Card> 
        </Col>

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image/IMG_0201.JPG" />
                <Card.Body>
                    <Card.Title>Acara Penerimaan Rapot</Card.Title>
                    <Button variant="primary">Liat Banyak</Button>
                </Card.Body>
            </Card> 
        </Col>

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image/IMG_0201.JPG" />
                <Card.Body>
                    <Card.Title>Acara Hari Guru</Card.Title>
                    <Button variant="primary">Liat Banyak</Button>
                </Card.Body>
            </Card> 
        </Col>
     </Row>
</Container>
          <Footer/>
          
        </div>
        )
    }
}