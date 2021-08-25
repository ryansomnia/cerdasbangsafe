import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahGuru.css";
import swal from 'sweetalert';


const api = 'http://localhost:5001'
export default class TambahGuru extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_guru: [],
            nama_guru: '',
            jenis_kelamin: '',
            no_nuptk: '',
            tempat_lahir: '',
            tgl_lahir: '',
            pendidikan: '',
            lulusan: '',
            jabatan: '',
            status_karyawan: '',
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
        if (this.state.nama_guru === '') {
            swal({
                title: "Tambah Data", 
                text: "Data Anda Gagal di Tambah", 
                type: "danger",
                icon: "warning"
              }).then(function () {
                window.location.reload();
              });
        } else {
            this.AddDataGuru()

        }
    }


    AddDataGuru = () => {
        console.log("Data Masuk");
        axios.post(api + '/addoneguru', {
            id_guru: this.state.id_guru,
            nama_guru: this.state.nama_guru,
            jenis_kelamin: this.state.jenis_kelamin,
            no_nuptk: this.state.no_nuptk,
            tempat_lahir: this.state.tempat_lahir,
            tgl_lahir: this.state.tgl_lahir,
            pendidikan: this.state.pendidikan,
            lulusan: this.state.lulusan,
            jabatan: this.state.jabatan,
            status_karyawan: this.state.status_karyawan,
            agama: this.state.agama,
            id_user: this.state.id_user
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
                        <Form.Label>Id_ Guru</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                    <Form.Control id="id_guru" type="text" name="id_guru" value={this.state.id_guru} onChange={this.handleChange} placeholder="Masukkan Id Guru" />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Nama Guru</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="text" name="nama_guru" value={this.state.nama_guru} onChange={this.handleChange} placeholder="Masukkan Nama Guru" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="Masukkan Jenis Kelamin" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>No NUPTK</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>

                                    <Form.Control type="number" name="no_nuptk" value={this.state.no_nuptk} onChange={this.handleChange} placeholder="Masukkan Nomor NUPTK" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange} placeholder="Masukkan Tempat Lahir" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange} placeholder="Masukkan Tanggal Lahir" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Pendidikan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="pendidikan" value={this.state.pendidikan} onChange={this.handleChange} placeholder="Masukkan Pendidikan " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Lulusan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="lulusan" value={this.state.lulusan} onChange={this.handleChange} placeholder="Masukkan Lulusan Sekolah" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jabatan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jabatan" value={this.state.jabatan} onChange={this.handleChange} placeholder="Masukkan Posisi Jabatan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Status Karyawan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="status_karyawan" value={this.state.status_karyawan} onChange={this.handleChange} placeholder="Masukkan Status Karyawan" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange} placeholder="Masukkan Agama" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Id User</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="id_user" value={this.state.id_user} onChange={this.handleChange} placeholder="Masukkan ID User" />
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