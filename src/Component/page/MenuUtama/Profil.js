import { Component } from 'react'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Container, Row, Col, Table} from 'react-bootstrap';
import "./Visi.css";



export default class profil extends Component {
    render() {
        return (
              
            <div>
             <Header/>
            
             <Container>
        <Row  className="section-title  portflio-section-title bg-blog-section padd-title">

            <Col lg="12" className=" col-12">
                <div className="text-center">
                    <h2 className="title-h2">Profil Sekolah</h2>

                    <ol class="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                        <a href="/home">
                            Beranda</a></li>
                        <li className="breadcrumb-item">
                        <a href="/profil">
                             Profil Sekolah 
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
                    <p/><h2>Profil</h2>

                <div className="blockquote">
                    <p> SDS CERDAS BANGSA adalah salah satu satuan pendidikan dengan jenjang SD di Cimandala, Kec. Sukaraja, Kab. Bogor, Jawa Barat. 
                        Dalam menjalankan kegiatannya, SDS CERDAS BANGSA berada di bawah naungan Kementerian Pendidikan dan Kebudayaan.</p>
                </div>

                <h2>Akreditasi</h2>

                <div className="blockquote">
                            <p>SDS CERDAS BANGSA memiliki akreditasi A, berdasarkan sertifikat 02.00/330/BAP-SM/XI/2017.</p>
                </div>
                <h3>Identitas Satuan Pendidikan</h3>
                <Table responsive>
                        <tbody>
                            <tr>
                            <td>Nama</td>
                            <td>SDS CERDAS BANGSA</td>
                            </tr>
                            <tr>
                            <td>NPSN</td>
                            <td>20268724</td>
                            </tr>
                            <tr>
                            <td>Alamat</td>
                            <td>Jl. Raya Bogor Jakarta, Desa Cimandala</td>
                            </tr>
                            <tr>
                            <td>Kode Pos</td>
                            <td>16710</td>
                            </tr>
                            <tr>
                            <td>Status Sekolah</td>
                            <td>swasta</td>
                            </tr>
                            <tr>
                            <td>Jenjang Pendidikan</td>
                            <td>SD</td>
                            </tr>
                        </tbody>
                        </Table>
 
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
