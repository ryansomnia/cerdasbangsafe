import React, { Component } from "react";
import { Container} from 'react-bootstrap';
import "./BannerRegist.css";
import PopUp from '../PopUp/PopUp';



export default class Banner extends Component {
  render() {
      return (
          <div >
             <Container md-4 className="bg-info" >
    
    <h1 id="judul">Pendaftaran Siswa Baru</h1>
     <h1 id="subjudul">Tahun ajaran 2030/2031, Fasilits lengkap, Pengajar yang terakreditasi.<br></br>
        Alamat Sekolah, Tlpn: 000 000 000, Email: kitapenuliscilik@gmail.com,
         Web: Penuliscilik.com.</h1>
         <PopUp />
       </Container>
       
  
          </div>


      );
  }
}
 