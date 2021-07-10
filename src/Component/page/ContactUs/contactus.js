import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./contactUs.css";
import Header from "../../Header/Header";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
export default class contactUs extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="contact-us">
        <div class="find-us">
          <Container>
            <Row>
              <Col md={12}>
              <div class="section-heading">
              <h2>Lokasi kami pada Maps</h2>
                </div>
              </Col>
                <Col md={8}>
                    <div id="map">
                    <div dangerouslySetInnerHTML={{ __html: "<iframe  src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9632480258765!2d106.82942356130458!3d-6.526325888394594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c142ef50a08f%3A0x84cd17f55a50f8c6!2sTK-SD%20Cerdas%20Bangsa!5e0!3m2!1sid!2sid!4v1625821137958!5m2!1sid!2sid' width='100%' height='330px' frameborder='0' style='border:0' allowfullscreen />"}} />
                    </div>
                </Col>
                <Col md={4}>
                <div class="left-content">
                <h4>Tentang kantor kami</h4>
                <p>Kantor kami ber-Alamat di Jl. Ruko Megapolitan, Cimandala, Kec. Sukaraja, Bogor, Jawa Barat Kode POS 16710
                    <br></br> <br></br>Untuk mendapatkan arah, anda dapat klik maps di sebelah kiri berikut. 
                    
                    </p>
                    <ul className="social-icons">
                <li><a href={'https://www.facebook.com/cerdas.bangsa.35'}><FaFacebookF /></a></li>
                <li><a href={'https://www.instagram.com/explore/locations/1024492749/tksd-cerdas-bangsa/'}><FaInstagram /></a></li>
                <li><a href={'https://wa.me/6289605804229'}><FaWhatsapp /></a></li>
              </ul>
                </div>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
      </div>
    );
  }
}
