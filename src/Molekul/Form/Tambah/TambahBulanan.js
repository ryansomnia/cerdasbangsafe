import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahBulanan.css";
import swal from 'sweetalert';


const api = 'http://localhost:5001'
export default class TambahBulanan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_laporan: [],
            tgl: '',
            keterangan: '',
            debit: '',
            kredit: '',
            saldo: '',
            jumlah: '',
            status: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.keterangan === '') {
            swal({
                title: "Tambah Data", 
                text: "Data Anda Gagal di Tambah", 
                type: "danger",
                icon: "warning"
              }).then(function () {
                window.location.reload();
              });
        } else {
            this.AddOneData()

        }
    }


    AddOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOneLaporanBulanan', {
            kode_laporan: this.state.kode_laporan,
            tgl: this.state.tgl,
            keterangan: this.state.keterangan,
            debit: this.state.debit,
            kredit: this.state.kredit,
            saldo: this.state.saldo,
            jumlah: this.state.jumlah,
            status: this.state.status
        })
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
                        <Form.Label>Kode Laporan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                    <Form.Control id="kode_laporan" type="text" name="kode_laporan" value={this.state.kode_laporan} onChange={this.handleChange} placeholder="Masukkan Kode Laporan" />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Tanggal</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="date" name="tgl" value={this.state.tgl} onChange={this.handleChange} placeholder="Masukkan Tanggal Laporan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Keterangan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange} placeholder="Masukkan Keterangan Laporan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Debit</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange} placeholder="Masukkan Jumlah Debit" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Kredit</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="kredit" value={this.state.kredit} onChange={this.handleChange} placeholder="Masukkan Jumlah Kredit" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Saldo</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="saldo" value={this.state.saldo} onChange={this.handleChange} placeholder="Masukkan Jumlah Saldo" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Seluruh Dana" />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Status</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleChange} placeholder="Masukkan Status Laporan" />
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