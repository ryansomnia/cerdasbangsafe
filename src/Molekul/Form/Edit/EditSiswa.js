import axios from "axios";
import React, { Component } from "react";
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditSiswa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_regist: props.siswa[0].id_regist,
            nis: props.siswa[0].nis,
            nisn: props.siswa[0].nisn,
            nama_siswa: props.siswa[0].nama_siswa,
            jenis_kelamin: props.siswa[0].jenis_kelamin,
            tgl_lahir: props.siswa[0].tgl_lahir,
            tempat_lahir: props.siswa[0].tempat_lahir,
            alamat: props.siswa[0].alamat,
            nama_ayah: props.siswa[0].nama_ayah,
            nama_ibu: props.siswa[0].nama_ibu,
            no_hp: props.siswa[0].no_hp,
            agama: props.siswa[0].agama
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
        console.log(this.state.nis);
        console.log(this.state.nama_siswa);
        axios.post(api + "/editOneSiswa", {
            id_regist: this.state.id_regist,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama_siswa: this.state.nama_siswa,
            jenis_kelamin: this.state.jenis_kelamin,
            tgl_lahir: this.getformatdate(this.state.tgl_lahir),
            tempat_lahir: this.state.tempat_lahir,
            alamat: this.state.alamat,
            nama_ayah: this.state.nama_ayah,
            nama_ibu: this.state.nama_ibu,
            no_hp: this.state.no_hp,
            agama: this.state.agama
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    swal({
                        title: "Edit data",
                        text: "Data Anda berhasil di Ubah",
                        type: "success",
                        icon: "success"
                      }).then(function () {
                        window.location.reload();
                      });
                }
            })
            .catch(function (error) {
                if (error) {
                    swal({
                        title: "Edit data", 
                        text: "Data Anda Gagal di Ubah", 
                        type: "warning",
                        icon: "danger"
                      }).then(function () {
                        window.location.reload();
                      });
                }
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
                            <select className="custom-select"  name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange("jenis_kelamin")} >
                                <option>Jenis Kelamin Siswa</option>
                                <option value="PR">Perempuan</option>
                                <option value="LK">Laki - Laki</option>
                            </select>
                        </FormGroup>

                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="agama" value={this.state.agama} onChange={this.handleChange ("agama")}  >
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
                                    <Form.Control type="text" name="nama_ayah" value={this.state.nama_ayah} onChange={this.handleChange("nama_ayah")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Ibu</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_Ibu" value={this.state.nama_ibu} onChange={this.handleChange("nama_ibu")} />
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

                        <Form.Label>Nomor Telephone</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange("no_hp")} />
                                </Col>
                            </Row>
                        </FormGroup>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.editSiswa}>Kirim Perubahan</Button>
                        </div>

                    </Col>
                </Form>
            </Container>

        );
    }
}
