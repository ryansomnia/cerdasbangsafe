import axios from "axios";
import React, { Component } from "react";
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            username:[]
        }
    }

    getformatdate(date) {
        let tanggalreturn = '';
        let d = new Date(date);
        if (!isNaN(d.getDate())) {
            tanggalreturn = moment(d).format("YYYY-MM-DD")
        }

        return tanggalreturn;
    }

    componentDidMount() {
        this.setState({
            username: JSON.parse(localStorage.getItem("siswa"))
        })
        console.log("data", this.state.username);
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
                                    <Form.Control id="nama_siswa" type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange()} placeholder={this.state.username.nama_siswa} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange()} placeholder={this.state.username.tgl_lahir}  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange()} placeholder={this.state.username.tempat_lahir}  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Alamat</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange()} placeholder={this.state.username.alamat}  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Telephone</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange()} placeholder={this.state.username.no_hp}  />
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
