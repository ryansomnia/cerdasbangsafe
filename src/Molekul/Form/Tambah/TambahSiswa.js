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
            nama_ayah: '',
            nama_ibu:'',
            no_hp: '',
            agama: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.image === '') {
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
        axios.post(api + '/addOneSiswa', {
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama_siswa: this.state.nama_siswa,
            jenis_kelamin: this.state.jenis_kelamin,
            tgl_lahir: this.state.tgl_lahir,
            tempat_lahir: this.state.tempat_lahir,
            alamat: this.state.alamat,
            nama_ayah: this.state.nama_ayah,
            nama_ibu: this.state.nama_ibu,
            no_hp: this.state.no_hp,
            agama: this.state.agama
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
                        <Form.Label>Nama Siswa</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control id="nama_siswa" type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}  placeholder="Masukkan Nama Siswa " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Induk</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nis" value={this.state.nis} onChange={this.handleChange} placeholder="Masukkan NIS Siswa "  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>NISN</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nisn" value={this.state.nisn} onChange={this.handleChange} placeholder="Masukkan NISN Siswa "  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange} placeholder="Masukkan Tanggal Lahir Siswa "  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange} placeholder="Masukkan Tempat Lahir Siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <select className="custom-select"  name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} >
                                <option>Jenis Kelamin Siswa</option>
                                <option value="PR">Perempuan</option>
                                <option value="LK">Laki - Laki</option>
                            </select>
                        </FormGroup>


                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="agama" value={this.state.agama} onChange={this.handleChange}  >
                                <option>Pilih Agama</option>
                                <option value="Kristen Protestan">Kristen Protestan</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Khonghucu">Khonghucu</option>
                            </select>
                        </FormGroup>

                        <Form.Label>Nama Ayah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_ayah" value={this.state.nama_ayah} onChange={this.handleChange} placeholder="Masukkan Nama Ayah Siswa"  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Ibu</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_ibu" value={this.state.nama_ibu} onChange={this.handleChange} placeholder="Masukkan Nama Ibu Siswa"  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Alamat</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukkan Alamat Siswa"   />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Telephone</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="no_hp" value={this.state.no_hp} onChange={this.handleChange}  placeholder="Masukkan Nomor Telephone Orang Tua"  />
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