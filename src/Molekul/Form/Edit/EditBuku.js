import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditBuku extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kode_bayar: props.buku[0].kode_bayar,
            nis: props.buku[0].nis,
            nisn: props.buku[0].nisn,
            nama: props.buku[0].nama,
            tgl_bayar: props.buku[0].tgl_bayar,
            buku: props.buku[0].buku,
            debit: props.buku[0].debit,
            kredit: props.buku[0].kredit,
            saldo: props.buku[0].saldo,
            image: props.buku[0].image
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


    EditBuku = () => {
        console.log(this.state.nis);
        console.log(this.state.nama);
        axios.post(api + "/editonebuku", {
            kode_bayar: this.state.kode_bayar,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama: this.state.nama,
            tgl_bayar: this.getformatdate(this.state.tgl_bayar),
            buku: this.state.buku,
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
                        <Form.Label>Buku</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="buku" value={this.state.buku} onChange={this.handleChange("buku")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.EditBuku}>Kirim Perubahan</Button>
                        </div>
                    </Col>
                </Form>
            </Container>


        );
    }
}
