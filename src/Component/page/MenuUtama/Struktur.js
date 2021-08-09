import { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import so from '../../images/strukturorganisasi.png'
import "./Struktur.css";


export default class strukturorganisasi extends Component {



render() {
    return (
              
<div>
        <Header/>

        <Container>
        <Row  className="section-title  portflio-section-title bg-blog-section padd-title">

            <Col lg="12" className=" col-12">
                <div className="text-center">
                    <h2 className="title-h2">Struktur Organisasi</h2>

                    <ol class="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                        <a href="/home">
                            Beranda</a></li>
                        <li className="breadcrumb-item">
                        <a href="/strukturorganisasi">
                             Struktur Organisasi 
                        </a></li>
                    </ol>
                </div>
            </Col>
        </Row>



       
<Row className="pd-bt-60 pd-tp-100 content-portfolio">

    <Col md="12">

        <div className="description-portfolio">
            <Row >
                <Col md="12">
                    <p/>
                    <p/><h2>Struktur Organisasi</h2>
                    <div className="justify-content-end">
                    <img className="struktur w-100" src={so} alt="strukturorganisasi"/>
                     </div>
               
                    
                          <p></p> 
                    </Col>
                </Row>
                </div>
            </Col>
    </Row>

    </Container>

        <Footer/>
    </div>

        )
    }
}
