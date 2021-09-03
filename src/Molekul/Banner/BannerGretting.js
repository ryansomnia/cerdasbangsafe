import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import "./BannerGretting.css";


export class BannerGretting extends Component {
    render() {
        return (
                <div className="baris">
                <Container >

                    <Row >
                        <Col Col sm={4}>
                            <img className="kepsek" src="Image/IMG_0201.JPG"
                                alt="Gambar Kepsek" /><br></br>Tiarma Rosauli S,kom
                        </Col>

                        <Col sm={8}>
                            <h1 > Sambutan Kepala Sekolah Cerdas Bangsa<br></br>
                                Salam sejahtera dan tetap semangat.<br></br>
                                Selamat datang di website SDS CERDAS BANGSA
                                <br/>Sebagai media informasi dan komunikasi webSDS CERDAS BANGSA dan dikembangkan dalam rangka meningkatkan layanan sekolah kepada peserta didik dan orang tua.<br/>
                                Kualitas layanan menjadi salah satu misi sekolah dan kaitannya dengan transparansi dan akuntabilitas sekolah.
                                Melaksanakan amanah sebagai pimpinan di SDS CERDAS BANGSA,
                                harapan untuk menjadikan sekolah besar dengan bertabur prestasi baik akademik maupun non akademik terus meningkat. Sekolah yang akan melahirkan generasi yang kreatif, inovatif, religius yang
                                berwawasan lingkungan serta mengabdi kepada bangsa dan negara. Mendorong terus berkembangnya inovasi dan kreasi warga sekolah. Meningkatkan kekeluargaan dan kerjasama dengan
                                seluruh komponen berlandaskan semangat 5S (senyum, sapa, salam, sopan dan santun).
                                Dari lubuk hati yang dalam, saya mengajak seluruh warga sekolah,orang tua, masyarakat dan stakeholder,
                                marilah kita bergandeng tangan dan berkolaborasi untuk menciptakan
                                sekolah yang nyaman, aman dan menyenangkan bagi putra-putri kita dalam menuntut ilmu. Tetap mempertahankan image SDS CERDAS BANGSA sebagai sekolah unggulan baik di Jakarta Barat, DKI Jakarta maupun Indonesia serta
                                'Sekolah tempat kunjungan/rujukan sekolah lain dari seluruh Indonesia' karena keunggulan yang telah dimiliki, sekolah penyelenggara Sistem Kit Semester (SKS),
                                pelayanan bagi peserta didik yang memiliki potensi untuk menyelesaikan pendidikan di SMA selama 4 semester, dan adaptasi kurikulum dan penilaian melalui kerjasama dan afiliasi dengan
                                University Of Cambridge International Examination dalam melaksanakan ujian internasional pada tingkat IGCSE dan As/A Level. Hingga pada akhirnya mencapai visi sekolah yang berprestasi hingga tingkat dunia.</h1>
                        </Col>

                    </Row>
                </Container>
                </div>
        );
    }
}

export default BannerGretting;
