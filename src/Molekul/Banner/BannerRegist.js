import React, { Component } from "react";
import { Container, Col} from 'react-bootstrap';
import "./BannerRegist.css";
import PopUp from '../PopUp/PopUp';



export default class Banner extends Component {
  render() {
      return (
      <div className="bentuk">
    <Container md-4  >
    
    <h4 id="judul">Pendaftaran Siswa Baru</h4>
     <h3 id="subjudul">Tahun ajaran 2030/2031, Fasilits lengkap, Pengajar yang terakreditasi.<br></br>
        Alamat Sekolah, Tlpn: 000 000 000, Email: kitapenuliscilik@gmail.com,
         Web: Penuliscilik.com.</h3>
         
         <Col>
         <PopUp />
         </Col>
         <br></br>
        
       </Container>
       
  
          </div>


      );
  }
}