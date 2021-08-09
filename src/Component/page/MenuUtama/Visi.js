import { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Visi.css";


export default class visi extends Component {



render() {
    return (
              
<div>
        <Header/>

        <Container>
        <Row  className="section-title  portflio-section-title bg-blog-section padd-title">

            <Col lg="12" className=" col-12">
                <div className="text-center">
                    <h2 className="title-h2">Visi dan Misi</h2>

                    <ol class="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                        <a href="/home">
                            Beranda</a></li>
                        <li className="breadcrumb-item">
                        <a href="/visi">
                             Visi dan Misi 
                        </a></li>

                    </ol>
                </div>
            </Col>
        </Row>



       
<Row className="pd-bt-60 pd-tp-100 content-portfolio">

    <Col md="12">
        <div className="img-portfolio">
                <img src="#" alt="" />
        </div>

        <div className="description-portfolio">
            <Row>
                <Col md="12">
                    <p/>
                    <p/><h2>VISI</h2>

                <div className="blockquote">
                    <p>Terciptanya sekolah ramah anak, Unggul dalam prestasi, berkarakter, berakar pada budaya bangsa dan berwawasan lingkungan berdasarkan IMTAQ dan IPTEK.</p>
                </div>

                <h2>MISI</h2>

                <div className="blockquote">
                            <ol>
                                <li>Menumbuhkan semangat religious, kedisiplinan dan kekeluargaan pada seluruh warga sekolah.</li>
                                <li>Meningkatkan pelayanan maksimal pada kegiatan pembelajaran dan pengembangan diri.</li>
                                <li>Meningkatkan prestasi akademik maupun non akademik sesuai dengan perkembangan IPTEK dan tuntutan masyarakat.</li>
                                <li>Menumbuhkan semangat patriotisme melalui peringatan hari-hari besar Nasional.</li>
                                <li>Meningkatkan kedisiplinan dalam semua aspek kepada seluruh warga sekolah.</li>
                                <li>Membudayakan kegiatan 5 S yaitu Senyum, Salam, Sapa, Semangat dan Sepenuh hati pada selutuh warga sekolah.</li>
                            </ol>
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
