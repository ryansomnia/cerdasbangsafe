import React, { Component } from "react";
import axios from 'axios'
import { Col, Container, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./TambahInventaris.css";

const api = 'http://localhost:5001'

export default class TambahInventaris extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_inventaris: [],
            tgl_pembelian: '',
            keterangan: '',
            jumlah: '',
            catatan: '',
            tahun_ajaran: '',
            wali_kelas: '',
            image: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.image === '') {
            alert('Masih ada data yang belum di isi !')
        } else {
            this.addOneData()

        }
    }


    addOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOneLaporanInventaris', {
            kode_inventaris: this.state.kode_inventaris,
            tgl_pembelian: this.state.tgl_pembelian,
            keterangan: this.state.keterangan,
            jumlah: this.state.jumlah,
            catatan: this.state.catatan,
            tahun_ajaran: this.state.tahun_ajaran,
            wali_kelas: this.state.wali_kelas,
            image: this.state.image
        })
            .then(json => {
                console.log(json, 'data');
            })
    }

    render() {
        return (
            <Container>
                <Form ClassName="form">
                    <Col>
                        <Form.Label>Kode Inventaris</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                    <Form.Control id="kode_inventaris" type="text" name="kode_inventaris" value={this.state.kode_inventaris} onChange={this.handleChange} placeholder="Masukkan Kode Inventaris " />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Tanggal Pembelian</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="date" name="tgl_pembelian" value={this.state.tgl_pembelian} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembelian" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Keterangan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                    <Form.Control type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange} placeholder="Masukkan Keterangan Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Jumlah</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Barang " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Catatan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="catatan" value={this.state.catatan} onChange={this.handleChange} placeholder="Masukkan Catatan " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tahun Ajaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tahun_ajaran" value={this.state.tahun_ajaran} onChange={this.handleChange} placeholder="Masukkan Tahun Ajaran " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Wali Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="wali_kelas" value={this.state.wali_kelas} onChange={this.handleChange} placeholder="Masukkan Nama Wali Kelas " />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="file" name="image" accept="image/*" value={this.state.image} onChange={this.handleChange} placeholder="Masukkan Bukti Pembayaran" />
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