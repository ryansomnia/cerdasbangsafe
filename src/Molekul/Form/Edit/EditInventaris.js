import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditInventaris extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kode_inventaris: props.laporaninventaris[0].kode_inventaris,
            tgl_pembelian: props.laporaninventaris[0].tgl_pembelian,
            keterangan: props.laporaninventaris[0].keterangan,
            jumlah: props.laporaninventaris[0].jumlah,
            catatan: props.laporaninventaris[0].catatan,
            tahun_ajaran: props.laporaninventaris[0].tahun_ajaran,
            wali_kelas: props.laporaninventaris[0].wali_kelas,
            image: props.laporaninventaris[0].image
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

    EditInventaris = () => {
        console.log(this.state.jumlah);
        console.log(this.state.wali_kelas);
        axios.post(api + "/editoneinventaris", {
            kode_inventaris: this.state.kode_inventaris,
            tgl_pembelian: this.getformatdate(this.state.tgl_pembelian),
            keterangan: this.state.keterangan,
            jumlah: this.state.jumlah,
            catatan: this.state.catatan,
            tahun_ajaran: this.state.tahun_ajaran,
            wali_kelas: this.state.wali_kelas,
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
                        <Form.Label>Tanggal Pembelian</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    <Form.Control id="tgl_pembelian" type="date" name="tgl_pembelian" value={this.state.tgl_pembelian} onChange={this.handleChange("tgl_pembelian")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Keterangan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>

                                    <Form.Control type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange("keterangan")} />
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
                        <Form.Label>Catatan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="catatan" value={this.state.catatan} onChange={this.handleChange("catatan")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Tahun Ajaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tahun_ajaran" value={this.state.tahun_ajaran} onChange={this.handleChange("tahun_ajaran")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <Form.Label>Wali Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="wali_kelas" value={this.state.wali_kelas} onChange={this.handleChange("wali_kelas")} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col>
                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.EditInventaris}>Kirim Perubahan</Button>
                        </div>
                    </Col>
                </Form>
            </Container>


        );
    }
}
