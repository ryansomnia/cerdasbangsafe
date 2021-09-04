import React, { Component } from "react";
import { Row, Button, Card, Col } from "react-bootstrap";
import "./styleUser.css";
import MOdalEditProfile from "../User/profil"



export default class user extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siswa:[],
            username: [],
            response: '',
            show: '',
        };
    }
    pageLogin(path) {
        console.log('logout', path);
        this.props.history.push(path)
    }

    editSiswa = (item) => {
        const data = this.state.siswa.filter(i => i.nis == item.nis)
        this.setState({
            siswa: data,
            show: 'show'
        })
    }

    componentDidMount() {
        this.setState({
            username: JSON.parse(localStorage.getItem("siswa"))
        })
        console.log("data", this.state.username);

    }


    render() {
        return (
            <div className="awal is-preload">
                <div id="wrapper">
                    <div id="main">
                        <div className="inner">

                            {/* <!-- Header --> */}
                            <div className="header">
                                <div className="logo">
                                    <a> Signed in as: {this.state.username.nama_siswa} </a>
                                </div>
                                <div className="login">
                                    <button onClick={() => this.pageLogin('/login')}>LogOut</button></div>
                            </div>

                            {/* <!-- Banner --> */}
                            <div className="main-banner">
                                <div className="container-fluid">
                                    <Row className="justify-content: center">
                                        <div className="col-md-12">
                                            <div className="banner-content">
                                                <Row>
                                                    <div className="col-md-12">
                                                        <div className="banner-caption">
                                                            <h4>Hello, {this.state.username.nama_siswa} Selamat Datang di <em> Website</em> SDSC.</h4>
                                                            <span>Lebih Mudah Melakukan Pembayaran</span>
                                                            <p>Sebagai media informasi dan komunikasi <strong>WEB SDS CERDAS BANGSA</strong> dikembangkan dalam rangka meningkatkan layanan sekolah kepada peserta didik dan orang tua.</p>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            {/* <!-- Services --> */}
                            <div class="services">
                                <div class="container-fluid">
                                    <Row className="justify-content-md-center">
                                        <div class="col-md-4">
                                            <div class="service-item first-item">
                                                <div class="icon"> <img src="Image/percent.png" alt="" /></div>
                                                <h4>Bayar SPP?</h4>
                                                <p>Kamu dapat melakukan pembayarandengan <br /> <a rel="nofollow" href="/bayarspp">Klik disini</a> </p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="service-item first-item">
                                                <div class="icon"> <img src="Image/books.png" alt="" /></div>
                                                <h4>Bayar Buku?</h4>
                                                <p>Kamu dapat melakukan pembayaran dengan<br /> <a rel="nofollow" href="/bayarbuku">Klik disini</a> </p>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <div class="col-md-4">
                                            <div class="service-item second-item">
                                                <div class="icon"> <img src="Image/uniform.png" alt="" /></div>
                                                <h4>Bayar Seragam?</h4>
                                                <p>Kamu dapat melakukan pembayaran dengan<br /><a rel="nofollow" href="/bayarseragam">Klik disini</a></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="service-item third-item">
                                                <div class="icon"> <img src="Image/school.png" alt="" /></div>
                                                <h4>Bayar Uang Pangkal?</h4>
                                                <p>Kamu dapat melakukan pembayaran dengan<br /> <a rel="nofollow" href="/uangpangkal">Klik disini</a></p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <Card>
                            <Card.Body>
                            <div class ="content mb-0">
                            <Row>

                            <Col md="10">
                            <h3 class ="pt-3 pb-3 ">Data Pribadi </h3>
                            </Col>
                            <Col md="auto" >
                            <h4 class ="pt-3 pb-3">
                            <Button variant="outline-success" onClick={this.editSiswa.bind(this.state.username.nis)}>
                            Edit
                            </Button></h4>
                            <MOdalEditProfile isShow={this.state.show} siswa={this.state.siswa} />
                            </Col>
                                        </Row>

                            <div class ="list-group list-custom-large mb-4">

                            <div className="form-group">
                            <label for="nis">NIS</label>
                            <input type ="text" class ="form-control" id="nis" placeholder={this.state.username.nis} name="nim"  readonly ="" />
                            </div>

                            <div className="form-group">
                            <label for="nama">Nama Siswa</label>
                            <input type ="text" className="form-control" id="nama" placeholder={this.state.username.nama_siswa}  readonly ="" />
                            </div>

                            <div className="form-group">
                            <label for="nomorhp">Kelas</label>
                            <input type ="text" className="form-control" id="kelas" placeholder={this.state.username.kelas}  readonly ="" />
                            </div>

                            <div className="form-group">
                            <label for="tgllahir">Tanggal Lahir</label>
                            <input type ="text" className="form-control" id="tgllahir" placeholder={this.state.username.tgl_lahir}  readonly =""  />
                            </div>

                            <div className="form-group">
                            <label for="tempatlahir">Tempat Lahir</label>
                            <input type ="text" className="form-control" id="tempatlahir" placeholder={this.state.username.tempat_lahir} readonly ="" />
                            </div>

                            <div className="form-group">
                            <label for="alamat">Alamat</label>
                            <input type ="text" className="form-control" id="alamat" placeholder={this.state.username.alamat}  readonly ="" />
                            </div>

                            <div className="form-group">
                            <label for="nomorhp">Nomor Hp</label>
                            <input type ="text" className="form-control" id="nomorhp" placeholder={this.state.username.no_hp}  readonly ="" />
                            </div>


                            </div>
                            </div>
                            </Card.Body>
                            </Card>


                            </div>
                            </div>

                        </div>
                    </div>
                    );

    }
}