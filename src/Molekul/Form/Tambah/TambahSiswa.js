import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahSPP.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class TambahSiswa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nis: [],
            nisn: '',
            nama_siswa: '',
            jenis_kelamin: '',
            tgl_lahir: '',
            tempat_lahir: '',
            alamat: '',
            nama_orangtua: '',
            no_hp1: '',
            no_hp2: '',
            agama: '',
            id_user: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.image === '') {
            alert('Masih ada data yang belum di isi !')
        } else {
            this.addOneData()

        }
    }


    addOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOneSiswa', {
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama_siswa: this.state.nama_siswa,
            jenis_kelamin: this.state.jenis_kelamin,
            tgl_lahir: this.state.tgl_lahir,
            tempat_lahir: this.state.tempat_lahir,
            alamat: this.state.alamat,
            nama_orangtua: this.state.nama_orangtua,
            no_hp1: this.state.no_hp1,
            no_hp2: this.state.no_hp2,
            agama: this.state.agama,
            id_user: this.state.id_user
        })
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Tambah data", 
                        text: "Data Anda berhasil ditambah", 
                        type: "success"
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
                                    <Form.Control id="nama_siswa" type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Induk</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nis" value={this.state.nis} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>NISN</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nisn" value={this.state.nisn} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Orang Tua</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_orangtua" value={this.state.nama_orangtua} onChange={this.handleChange} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Alamat</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
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