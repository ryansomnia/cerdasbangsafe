import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';


const api = "http://localhost:5001";
export default class EditSpp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kode_spp: props.laporanspp[0].kode_spp,
            tgl_bayar: props.laporanspp[0].tgl_bayar,
            bulan: props.laporanspp[0].bulan,
            jumlah: props.laporanspp[0].jumlah,
            ekstrakurikuler: props.laporanspp[0].ekstrakurikuler,
            status: props.laporanspp[0].status,
            nama_siswa: props.laporanspp[0].nama_siswa,
            kelas: props.laporanspp[0].kelas,
            image: props.laporanspp[0].image
        };
        this.handleChange = this.handleChange.bind(this);
    }

    getformatdate(date) {
        let tanggalreturn = '';
        let d = new Date(date);
        if (!isNaN(d.getDate())) {
            tanggalreturn = moment(d).format("YYYY-MM-DD")
        }

        return tanggalreturn;
    }

    editSpp = () => {
        console.log(this.state.kelas);
        console.log(this.state.nama_siswa);
        axios.post(api + "/editonespp", {
            kode_spp: this.state.kode_spp,
            tgl_bayar: this.getformatdate(this.state.tgl_bayar),
            bulan: this.state.bulan,
            jumlah: this.state.jumlah,
            ekstrakurikuler: this.state.ekstrakurikuler,
            status: this.state.status,
            nama_siswa: this.state.nama_siswa,
            kelas: this.state.kelas,
            image: this.state.image
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    swal({
                        title: "Edit data", 
                        text: "Data Anda berhasil di Ubah", 
                        type: "success"
                      }).then(function () {
                        window.location.reload();
                      });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(event);
    };
    render() {
        return (
            <Container>
                <Form ClassName="form">
                    <Col>
                        <Form.Label>Nama Siswa</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control id="nama_siswa" type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange("nama_siswa")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col><Form.Control type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange("kelas")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Bulan</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="bulan" value={this.state.bulan} onChange={this.handleChange("bulan")} >
                                <option>Pilih Bulan</option>
                                <option value="Januari">Januari</option>
                                <option value="Februari">Februari</option>
                                <option value="Maret">Maret</option>
                                <option value="April">April</option>
                                <option value="Mei">Mei</option>
                                <option value="Juni">Juni</option>
                                <option value="Juli">Juli</option>
                                <option value="Agustus">Agustus</option>
                                <option value="September">September</option>
                                <option value="Oktober">Oktober</option>
                                <option value="November">November</option>
                                <option value="Desember">Desember</option>
                            </select>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Tanggal Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange("tgl_bayar")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange("jumlah")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Ekstrakurikuler</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="ekstrakurikuler" value={this.state.ekstrakurikuler} onChange={this.handleChange} >
                                <option>Pilih Ekstrakurikuler</option>
                                <option value="-">Tidak Ada</option>
                                <option value="Komputer">Komputer</option>
                                <option value="Pramuka">Pramuka</option>
                                <option value="Bahasa Asing">Bahasa Asing</option>
                            </select>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Status</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="status" value={this.state.status} onChange={this.handleChange("status")} >
                                <option>Pilih Status</option>
                                <option value="Berhasil">Berhasil</option>
                                <option value="Tidak Berhasil">Tidak Berhasil</option>
                            </select>
                        </FormGroup>
                    </Col>
                    <Col>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.editSpp}>Kirim Perubahan</Button>
                        </div>
                    </Col>

                </Form>
            </Container>


        );
    }
}
