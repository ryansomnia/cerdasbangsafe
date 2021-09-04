import axios from "axios";
import React, { Component } from "react";
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditSeragam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kode_bayar: props.seragam[0].kode_bayar,
            nis: props.seragam[0].nis,
            nisn: props.seragam[0].nisn,
            nama: props.seragam[0].nama,
            tgl_bayar: props.seragam[0].tgl_bayar,
            seragam: props.seragam[0].seragam,
            debit: props.seragam[0].debit,
            kredit: props.seragam[0].kredit,
            saldo: props.seragam[0].saldo,
            image: props.seragam[0].image
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


    EditSeragam = () => {
        console.log(this.state.nis);
        console.log(this.state.nama);
        axios.post(api + "/editoneseragam", {
            kode_bayar: this.state.kode_bayar,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama: this.state.nama,
            tgl_bayar: this.getformatdate(this.state.tgl_bayar),
            seragam: this.state.seragam,
            debit: this.state.debit,
            kredit: this.state.kredit,
            saldo: this.state.saldo,
            image: this.state.image
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
                        type: "danger",
                        icon: "Warning"
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
                        <Form.Label>Nomor Induk</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="nis" value={this.state.nis} onChange={this.handleChange("nis")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>NISN</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>

                                    <Form.Control type="number" name="nisn" value={this.state.nisn} onChange={this.handleChange("nisn")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Nama Siswa</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange("nama")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Tanggal Bayar</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange("tgl_bayar")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                    <Form.Label>Seragam</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="seragam" value={this.state.seragam} onChange={this.handleChange ("seragam")} >
                                <option>Pilih Seragam </option>
                                <option value="Seragam Olahraga">Seragam Olahraga</option>
                                <option value="Seragam Batik">Seragam Batik</option>
                                <option value="Seragam Cerdas Bangsa">Seragam Cerdas Bangsa</option>
                            </select>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Debit</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange("debit")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Kredit</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="kredit" value={this.state.kredit} onChange={this.handleChange("kredit")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.EditSeragam}>Kirim Perubahan</Button>
                        </div>
                    </Col>
                </Form>
            </Container>


        );
    }
}
