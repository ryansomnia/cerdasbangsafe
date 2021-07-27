import React, { Component } from "react";
import { Container, Col, Row} from 'react-bootstrap';
import loginIcon1 from '../../Component/images/fasilitas.svg'
import loginIcon2 from '../../Component/images/bangunan.svg'
import loginIcon3 from '../../Component/images/pengajar.svg'
import loginIcon4 from '../../Component/images/team.svg'
import "./promosi.css";




export default class promosi extends Component {
  render() {
      return (
    
    <Container md-4 className="promosi">
    <Col className="text-center">
    <h4 >Kenapa Harus SDS Cerdas Bangsa ?</h4>
     <h6 >Alasan kenapa orang tua semua membawa putra/putrinya harus bergabung dengan SDS Cerdas Bangsa</h6>
     </Col>
     <br></br>
     <div className="unggul">
        <Row>
            <Col xs lg="3" className="text-center mt-8">
            <img className="icon-img"  src={loginIcon1} alt="icon"/><br/>
            Fasilitas Lengkap<br></br>
            Penunjang Belajar dengan kualitas premium.
            </Col>
        <Col xs lg="3" className="text-center mt-8">
        <img className="icon-img"  src={loginIcon2} alt="icon"/><br/>
        Lingkungan Nyaman<br/>
            Berada di lingkunganyang asri, aman dan kondusif.
        </Col>
        <Col xs lg="3" className="text-center mt-8">
        <img className="icon-img"  src={loginIcon3} alt="icon"/><br/>
         Pengajar Kompeten<br/>
         Guru yang Up-To-Date dengan perkembangan teknologi.
        </Col>
        <Col xs lg="3" className="text-center mt-8">
        <img className="icon-img"  src={loginIcon4} alt="icon"/><br/>
         Religious<br/>
         Menumbuhkan semangat religious peserta didik.
        </Col> 
        </Row>
        </div>
         <br></br>
         </Container> 
      



      );
  }
}
 