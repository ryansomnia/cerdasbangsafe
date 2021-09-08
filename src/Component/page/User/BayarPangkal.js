import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pembayaranpangkal from "../Pembayaran/pembayaranpangkal";
import axios from "axios";
// import "./Bayarpangkal.css";

const api = "http://localhost:5001";
export default class bayarpangkal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: [],
            laporancicilan: []
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

        axios.post(api + "/getCicilanbyKode").then(res => {
            this.setState({
                seragam: res.data.values
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


                            <Container fluid>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Pembayaranpangkal />
                                    </Col>
                                </Row>
                            </Container>

                            <div className="card-body">
                                <h4>  Riwatat Pembayaran</h4>
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Kode Bayar</td>
                                                <td>No Induk</td>
                                                <td>No NISN</td>
                                                <td>Nama Siswa</td>
                                                <td>Tanggal Bayar</td>
                                                <td>Seragam</td>
                                                <td>Jumlah Bayar</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.state.laporancicilan.map(laporancicilan =>
                                                <tr key={laporancicilan.kode_cicilan}>
                                                    <td>{laporancicilan.kode_cicilan}</td>
                                                    <td>{laporancicilan.nis}</td>
                                                    <td>{laporancicilan.nisn}</td>
                                                    <td>{laporancicilan.nama}</td>
                                                    <td>{laporancicilan.tgl_bayar}</td>
                                                    <td>Rp. {laporancicilan.uang_pangkal}</td>
                                                    <td>Rp. {laporancicilan.debit}</td>
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
            </div>

        );
    }
}
