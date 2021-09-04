import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';

import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class TambahCicilanBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kode_bayar: [],
            nis: '',
            nisn: '',
            nama: '',
            tgl_bayar: '',
            buku: '',
            debit: '',
            kredit: '',
            saldo: '',
            image: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.image === '' ||
            this.state.kode_bayar === '' ||
            this.state.nis === '' ||
            this.state.nisn === '' ||
            this.state.nama === '' ||
            this.state.tgl_bayar === '' ||
            this.state.buku === '' ||
            this.state.debit === '' ||
            this.state.kredit === '' ||
            this.state.saldo === '' ) {
            swal({
                title: "Tambah Data",
                text: "Masih Ada Data Yang Kosong",
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
        axios.post(api + '/addOnebuku', {
            kode_bayar: this.state.kode_bayar,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama: this.state.nama,
            tgl_bayar: this.state.tgl_bayar,
            buku: this.state.buku,
            debit: this.state.debit,
            kredit: this.state.kredit,
            saldo: this.state.saldo,
            image: this.state.image
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
                        <Form.Label>Kode Bayar</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                    <Form.Control id="kode_bayar" type="text" name="kode_bayar" value={this.state.kode_bayar} onChange={this.handleChange} placeholder="Masukkan Kode Cicilan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Induk</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="number" name="nis" value={this.state.nis} onChange={this.handleChange} placeholder="Masukkan Nomor Induk Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>NISN</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>

                                    <Form.Control type="number" name="nisn" value={this.state.nisn} onChange={this.handleChange} placeholder="Masukkan NISN Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Siswa</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Bayar</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembayaran" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Buku</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="buku" value={this.state.buku} onChange={this.handleChange} placeholder="Masukkan Nama Buku" />
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
                                    <Form.Control type="text" name="kredit" value={this.state.kredit} onChange={this.handleChange} placeholder="Masukkan Jumlah Kredit" />
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

                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="file" name="image" accept="image/*" value={this.state.image} onChange={this.handleChange} placeholder="Masukkan Bukti Pembayaran" />
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