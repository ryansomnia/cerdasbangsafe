import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./contactUs.css";
export default class contactUs extends Component {
  render() {
      const styles = {
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9632480258765!2d106.82942356130458!3d-6.526325888394594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c142ef50a08f%3A0x84cd17f55a50f8c6!2sTK-SD%20Cerdas%20Bangsa!5e0!3m2!1sid!2sid!4v1625821137958!5m2!1sid!2sid',
        width: '100%',
        height:'330px',
        frameborder:'0',
        style:'border:0',
        loading:"lazy",
        allowfullscreen: true
    };
    
    return (
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
                    <iframe title="maps" 
                    style = {styles}></iframe>
                    
                    </div>
                </Col>
                <Col md={4}>
                <div class="left-content">
                <h4>Tentang kantor kami</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.
                    <br></br> <br></br>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.
                    </p>
                    <ul className="social-icons">
                <li><a href={'http://google.com'}><i className="fa fa-facebook"></i></a></li>
                <li><a href={'http://google.com'}><i className="fa fa-twitter"></i></a></li>
                <li><a href={'http://google.com'}><i className="fa fa-linkedin"></i></a></li>
                <li><a href={'http://google.com'}><i className="fa fa-behance"></i></a></li>
              </ul>
                </div>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
