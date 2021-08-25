import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, FormGroup, Form, Button } from 'react-bootstrap';
import "./pembayaranspp.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class Pembayaranspp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_spp: [],
            tgl_bayar: '',
            bulan: '',
            jumlah: '',
            ekstrakurikuler: '',
            status: '',
            image: '',
            nama_siswa: '',
            kelas: '',
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
            this.AddOneData()

        }
    }


    AddOneData = () => {
        console.log(" Data Masuk");
        axios.post(api + '/addOneLaporanSPP', {
            kode_spp: this.state.kode_spp,
            tgl_bayar: this.state.tgl_bayar,
            bulan: this.state.bulan,
            jumlah: this.state.jumlah,
            ekstrakurikuler: this.state.ekstrakurikuler,
            status: this.state.status,
            image: this.state.image,
            nama_siswa: this.state.nama_siswa,
            kelas: this.state.kelas
        })
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Pembayaran SPP",
                        text: "Pembayaran Kamu Berhasil di Proses",
                        type: "success",
                        icon:"success"
                    }).then(function () {
                        window.location.reload();
                    });
                }
            })
    }
    render() {
        return (
            <div className="mt-4  main-admin ">
                <h4>Form Pembayaran</h4>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} placeholder="Masukkan Nama Siswa" />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder="Masukkan Kelas Siswa" />
                        </div>
                    </div>
                    <div className="form-group">
                        <Form.Label>SPP Bulan</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="bulan" value={this.state.bulan} onChange={this.handleChange} >
                                <option>Pilih Bulan yang ingin di Bayar</option>
                                <option value="Januari">Januari</option>
                                <option value="Februari">Februari</option>
                                <option value="Maret">Maret</option>
                                <option value="April">April</option>
                                <option value="Mei">Mei</option>
                                <option value="Juni">Juni</option>
                                <option value="Juli">Juli</option>
                                <option value="Agustus">Agustus</option>
                                <option value="September">September</option>
                                <option value="Oktober">Oktober</option>
                                <option value="November">November</option>
                                <option value="Desember">Desember</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <Form.Label>Ekstrakurikuler</Form.Label>
                        <FormGroup >
                            <select className="custom-select" name="ekstrakurikuler" value={this.state.ekstrakurikuler} onChange={this.handleChange} >
                                <option>Pilih Ekstrakurikule  yang ingin di Bayar</option>
                                <option value="-">Tidak Ada</option>
                                <option value="Komputer">Komputer</option>
                                <option value="Pramuka">Pramuka</option>
                                <option value="Bahasa Asing">Bahasa Asing</option>
                            </select>
                        </FormGroup>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <Form.Label>Jumlah Bayar</Form.Label>
                            <Form.Control type="Number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Rp." />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Upload Bukti Pembayaran</Form.Label>
                            <Form.Control type="file" name="image" value={this.state.image} accept="image/*" onChange={this.handleChange} />
                        </div>

                    </div>
                    <div className="justify-content-end">
                        <Button variant="primary" onClick={this.handleError} >Bayar</Button>
                    </div>
                </Form>
            </div>
        );
    }
}