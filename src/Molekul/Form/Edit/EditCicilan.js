import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditCicilan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kode_cicilan: props.laporancicilan[0].kode_cicilan,
            nis: props.laporancicilan[0].nis,
            nisn: props.laporancicilan[0].nisn,
            nama: props.laporancicilan[0].nama,
            tgl_bayar: props.laporancicilan[0].tgl_bayar,
            debit: props.laporancicilan[0].debit,
            kredit: props.laporancicilan[0].kredit,
            uang_pangkal: props.laporancicilan[0].uang_pangkal,
            saldo: props.laporancicilan[0].saldo,
            image: props.laporancicilan[0].image
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


    EditCicilan = () => {
        console.log(this.state.nis);
        console.log(this.state.nama);
        axios.post(api + "/editonecicilan", {
            kode_cicilan: this.state.kode_cicilan,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama: this.state.nama,
            tgl_bayar: this.getformatdate(this.state.tgl_bayar),
            debit: this.state.debit,
            kredit: this.state.kredit,
            uang_pangkal: this.state.uang_pangkal,
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
                        <Form.Label>Uang Pangkal</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="uang_pangkal" value={this.state.uang_pangkal} onChange={this.handleChange("uang_pangkal")} />
                                </Col>
                            </Row>
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
                            <Button type="button" onClick={this.EditCicilan}>Kirim Perubahan</Button>
                        </div>
                    </Col>
                </Form>
            </Container>


        );
    }
}
