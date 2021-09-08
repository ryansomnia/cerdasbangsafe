import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pembayaranbuku from "../Pembayaran/pembayaranbuku";
import axios from "axios";



const api = "http://localhost:5001";
export default class bayarbuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: [],
            buku: []
        };
    }
    pageLogin(path) {
        console.log('logout', path);
        this.props.history.push(path)
    }

    dashboard(path) {
        console.log('dasboard', path);
        this.props.history.push(path)
    }

    componentDidMount() {
        this.setState({
            username: JSON.parse(localStorage.getItem("siswa"))
        })
        console.log("data", this.state.username);

        axios.post(api + "/getbukubyKode").then(res => {
            this.setState({
                buku: res.data.values
            });
        });

    }


    render() {
        return (
            <div className="awal is-preload">
                <div id="wrapper">
                    <div id="main">
                        <div className="inner">

                            {/* <!-- Header --> */}
                            <div className="header">
                                <div className="login">
                                    <button onClick={() => this.dashboard('/user')}>Home</button></div>
                                <div className="logo">
                                    <a> Signed in as:{this.state.username.nama_siswa}</a>
                                </div>
                                <div className="login">
                                    <button onClick={() => this.pageLogin('/login')}>LogOut</button></div>
                            </div>


                            {/* <!-- Page content--> */}
                            <Container fluid>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Pembayaranbuku />
                                    </Col>
                                </Row>
                            </Container>

                            <div className="card-body">
                                <h4>  Riwatat Pembayaran</h4>
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Kode bayar</td>
                                                <td>Nama Siswa</td>
                                                <td>Nis</td>
                                                <td>Tanggal Bayar</td>
                                                <td>SPP Bulan</td>
                                                <td>Ekstrakulikuler</td>
                                                <td>Jumlah Bayar</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.buku.map(buku =>
                                                <tr key={buku.kode_bayar}>
                                                <td>{buku.kode_bayar}</td>
                                                <td>{buku.nis}</td>
                                                <td>{buku.nisn}</td>
                                                <td>{buku.nama}</td>
                                                <td>{buku.tgl_bayar}</td>
                                                <td>{buku.buku}</td>
                                                <td>Rp. {buku.debit}</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
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
                    </div>
                </div>
            </div>
            </div >
        );
    }
}
