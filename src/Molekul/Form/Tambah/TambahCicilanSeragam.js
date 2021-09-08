import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';

import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class TambahCicilanSeragam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kode_bayar: [],
            nis: '',
            nisn: '',
            nama: '',
            tgl_bayar: '',
            seragam: '',
            debit: '',
            kredit: '',
            saldo: '',
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
        if (this.state.filename === '' ||
            this.state.kode_bayar === '' ||
            this.state.nis === '' ||
            this.state.nisn === '' ||
            this.state.nama === '' ||
            this.state.tgl_bayar === '' ||
            this.state.seragam === '' ||
            this.state.debit === '' ||
            this.state.kredit === '' 
        ) {
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
        const formData = new FormData();
        console.log("Mulai Masuk", this.state.filename);
        formData.append("filename",this.state.filename);
        formData.append("kode_bayar",this.state.kode_bayar);
        formData.append("nis",this.state.nis);
        formData.append("nisn",this.state.nisn);
        formData.append("nama",this.state.nama);
        formData.append("tgl_bayar",this.state.tgl_bayar);
        formData.append("seragam",this.state.seragam);
        formData.append("kredit",this.state.kredit);
        formData.append("debit",this.state.debit);
        formData.append("saldo",this.state.saldo);
      console.log("hajarrr", formData);
      console.log(this.state.filename);
      axios.post(api + '/addOneseragam', formData)
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
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Siswa" />
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

                        <Form.Label>Tanggal Bayar</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembayaran" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Seragam</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="seragam" value={this.state.seragam} onChange={this.handleChange} >
                                <option>Pilih Seragam </option>
                                <option value="Seragam Olahraga">Seragam Olahraga</option>
                                <option value="Seragam Batik">Seragam Batik</option>
                                <option value="Seragam Cerdas Bangsa">Seragam Cerdas Bangsa</option>
                            </select>
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

                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <p><input type="file" name="filename" accept="image/*" onChange={this.handleChangeimage} /></p>
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