import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahInventaris.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class TambahInventaris extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_inventaris: [],
            tgl_pembelian: '',
            keterangan: '',
            jumlah: '',
            catatan: '',
            tahun_ajaran: '',
            wali_kelas: '',
            filename: null,
            response: ""

        }
    }

    handleChangeimage = (e) => {
        this.setState({ filename: e.target.files[0] });
       console.log("satuuu", e.target.files[0]);
       }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.image === '' ||
            this.state.kode_inventaris === '' ||
            this.state.tgl_pembelian === '' ||
            this.state.keterangan === '' ||
            this.state.jumlah === '' ||
            this.state.tahun_ajaran === '' ||
            this.state.wali_kelas === ''


        ) {
            swal({
                title: "Tambah data",
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
        console.log(" Data Mau Masuk");
        const formData = new FormData();
        console.log("Mulai Masuk", this.state.filename);
        formData.append("filename",this.state.filename);
        formData.append("kode_inventaris",this.state.kode_inventaris);
        formData.append("tgl_pembelian",this.state.tgl_pembelian);
        formData.append("keterangan",this.state.keterangan);
        formData.append("jumlah",this.state.jumlah);
        formData.append("catatan",this.state.catatan);
        formData.append("tahun_ajaran",this.state.tahun_ajaran);
        formData.append("wali_kelas",this.state.wali_kelas);
      console.log("hajarrr", formData);
      console.log(this.state.filename);
      axios.post(api + '/addOneLaporanInventaris', formData)
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
                        <Form.Label>Tanggal Pembelian</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="date" name="tgl_pembelian" value={this.state.tgl_pembelian} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembelian" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Keterangan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange} placeholder="Masukkan Keterangan Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Barang " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Catatan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="catatan" value={this.state.catatan} onChange={this.handleChange} placeholder="Masukkan Catatan " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tahun Ajaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tahun_ajaran" value={this.state.tahun_ajaran} onChange={this.handleChange} placeholder="Masukkan Tahun Ajaran " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Wali Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="wali_kelas" value={this.state.wali_kelas} onChange={this.handleChange} placeholder="Masukkan Nama Wali Kelas " />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <input type="file" name="filename" accept="image/*" onChange={this.handleChangeimage} />
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