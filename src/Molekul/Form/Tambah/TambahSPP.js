import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahSPP.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class TambahSPP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tgl_bayar: [],
            bulan: '',
            jumlah: '',
            ekstrakurikuler: '',
            status: '',
            filename: null,
            nama_siswa: '',
            kelas: '',
            response: ""

        }
    }
    handleChangeimage = (e) => {
        this.setState({ filename: e.target.files[0] });
       console.log("Test", e.target.files[0]);
       }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.filename === '' ||
        this.state.tgl_bayar  === '' ||
        this.state.bulan  === '' ||
        this.state.jumlah  === '' ||
        this.state.nama_siswa  === '' ||
        this.state.kelas  === '' ) {
            swal({
                title: "Tambah Data", 
                text: "Data Anda Gagal di Tambah", 
                type: "danger",
                icon: "warning"
              }).then(function () {
                window.location.reload();
              });
        } else {
            this.addOneData()

        }
    }


    addOneData = () => {
        console.log("Data Masuk");
        const formData = new FormData();
        console.log("Mulai Masuk", this.state.filename);
        formData.append("filename",this.state.filename);
        formData.append("jumlah",this.state.jumlah);
        formData.append("kode_spp",this.state.kode_spp);
        formData.append("bulan",this.state. bulan);
        formData.append("tgl_bayar",this.state.tgl_bayar);
        formData.append("ekstrakurikuler",this.state.ekstrakurikuler);
        formData.append("status",this.state.status);
        formData.append("nama_siswa",this.state.nama_siswa);
        formData.append("kelas",this.state.kelas);
      console.log("hajarrr", formData);
      console.log(this.state.filename);
      axios.post(api + '/addOneLaporanSPP', formData) 
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Tambah data",
                        text: "Data Anda berhasil ditambah",
                        type: "success",
                        icon: "success"
                      }).then(function () {
                        window.location.reload();
                      });
                }
            })
    }

    render() {
        return (
            <Container>
                <Form ClassName="form">
                    <Col>
                        <Form.Label>Nama Siswa</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} placeholder="Masukkan Nama Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder="Masukkan Kelas Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Bayar</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange} placeholder="Masukkan Tanggal Bayar" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Bulan</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="bulan" value={this.state.bulan} onChange={this.handleChange} >
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

                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Dana" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Status</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="status" value={this.state.status} onChange={this.handleChange} >
                                <option>Pilih Status</option>
                                <option value="Berhasil">Berhasil</option>
                                <option value="Tidak Berhasil">Tidak Berhasil</option>
                            </select>
                        </FormGroup>

                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <input type="file" name="filename"  accept="image/*" onChange={this.handleChangeimage} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.handleError}>Submit</Button>
                        </div>
                    </Col>

                </Form>
            </Container>
        );
    }
}