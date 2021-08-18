import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditBulanan extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kode_laporan: props.laporanbulanan[0].kode_laporan,
            tgl: props.laporanbulanan[0].tgl,
            keterangan: props.laporanbulanan[0].keterangan,
            debit: props.laporanbulanan[0].debit,
            kredit: props.laporanbulanan[0].kredit,
            saldo: props.laporanbulanan[0].saldo,
            jumlah: props.laporanbulanan[0].jumlah,
            status: props.laporanbulanan[0].status
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


    EditBulanan = () => {
        console.log(this.state.jumlah);
        console.log(this.state.keterangan);
        axios.post(api + "/editonebulanan", {
            kode_laporan: this.state.kode_laporan,
            tgl: this.getformatdate(this.state.tgl),
            keterangan: this.state.keterangan,
            debit: this.state.debit,
            kredit: this.state.kredit,
            saldo: this.state.saldo,
            jumlah: this.state.jumlah,
            status: this.state.status
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
                console.log(error); if (error) {
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
                        <Form.Label>Tanggal</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="date" name="tgl" value={this.state.tgl} onChange={this.handleChange("tgl")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Keterangan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control id="keterangan" type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange("keterangan")} />
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
                        <Form.Label>Saldo</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="saldo" value={this.state.saldo} onChange={this.handleChange("saldo")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange("jumlah")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Status</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="status" value={this.state.status} onChange={this.handleChange("status")} >
                                <option>Pilih Status</option>
                                <option value="Berhasil">Berhasil</option>
                                <option value="Tidak Berhasil">Tidak Berhasil</option>
                            </select>
                        </FormGroup>
                    </Col>

                    <Col>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.EditBulanan}>Kirim Perubahan</Button>
                        </div>
                    </Col>
                </Form>
            </Container>


        );
    }
}
