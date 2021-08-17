import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditSiswa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nis: props.siswa[0].siswa.nis,
            nisn: props.siswa[0].siswa.nisn,
            nama_siswa: props.siswa[0].siswa.nama_siswa,
            jenis_kelamin: props.siswa[0].siswa.jenis_kelamin,
            tgl_lahir: props.siswa[0].siswa.tgl_lahir,
            tempat_lahir: props.siswa[0].siswa.tempat_lahir,
            alamat: props.siswa[0].siswa.alamat,
            nama_orangtua: props.siswa[0].siswa.nama_orangtua,
            no_hp1: props.siswa[0].siswa.no_hp1,
            no_hp2: props.siswa[0].siswa.no_hp2,
            agama: props.siswa[0].siswa.agama,
            id_user: props.siswa[0].siswa.id_user
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

    editSiswa = () => {
        console.log(this.state.nisn);
        console.log(this.state.nis);
        axios.post(api + '/editOnedata', {
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama_siswa: this.state.nama_siswa,
            jenis_kelamin: this.state.jenis_kelamin,
            tgl_lahir: this.getformatdate(this.state.tgl_lahir),
            tempat_lahir: this.state.tempat_lahir,
            alamat: this.state.alamat,
            nama_orangtua: this.state.nama_orangtua,
            no_hp1: this.state.no_hp1,
            no_hp2: this.state.no_hp2,
            agama: this.state.agama,
            id_user: this.state.id_user
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

                        <Form.Label>Nomor Induk</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nis" value={this.state.nis} onChange={this.handleChange("nis")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>NISN</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nisn" value={this.state.nisn} onChange={this.handleChange("nisn")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange("tgl_lahir")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange("tempat_lahir")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange("jenis_kelamin")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange("agama")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Orang Tua</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_orangtua" value={this.state.nama_orangtua} onChange={this.handleChange("nama_orangtua")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Alamat</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange("alamat")} />
                                </Col>
                            </Row>
                        </FormGroup>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.editKelas}>Kirim Perubahan</Button>
                        </div>

                    </Col>
                </Form>
            </Container>

        );
    }
}
