import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./Pembayaranseragam.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'

export default class Pembayaranseragam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_cicilan: [],
            student_account: '',
            nis: '',
            nisn: '',
            nama: '',
            tgl_bayar: '',
            buku: '',
            voucher_no: '',
            debit: '',
            kredit: '',
            uang_pangkal: "",
            seragam: '',
            saldo: '',
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
            this.AddOneData()

        }
    }


    AddOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOneLaporanCicilan', {
            kode_cicilan: this.state.kode_cicilan,
            student_account: this.state.student_account,
            nis: this.state.nis,
            nisn: this.state.nisn,
            nama: this.state.nama,
            tgl_bayar: this.state.tgl_bayar,
            buku: this.state.buku,
            voucher_no: this.state.voucher_no,
            debit: this.state.debit,
            kredit: this.state.kredit,
            uang_pangkal: this.state.uang_pangkal,
            seragam: this.state.seragam,
            saldo: this.state.saldo,
            image: this.state.image
        })
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Pembayaran Seragam",
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
                <h5>Form Pembayaran Seragam</h5>
                <Form >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Siswa" />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Nomor Induk</Form.Label>
                            <Form.Control type="number" name="nis" value={this.state.nis} onChange={this.handleChange} placeholder="Masukkan Nomor Induk Siswa" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>NISN</Form.Label>
                            <Form.Control type="number" name="nisn" value={this.state.nisn} onChange={this.handleChange} placeholder="Masukkan NISN Siswa" />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Tanggal Bayar</Form.Label>
                            <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembayaran" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Jumlah Bayar</Form.Label>
                            <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange} placeholder="Rp." />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Seragam</Form.Label>
                            <FormGroup>
                                <select className="custom-select" name="seragam" value={this.state.seragam} onChange={this.handleChange} >
                                    <option>Pilih Nama Seragam </option>
                                    <option value="Seragam Olahraga">Seragam Olahraga</option>
                                    <option value="Seragam Batik">Seragam Batik</option>
                                    <option value="Seragam Cerdas Bangsa">Seragam Cerdas Bangsa</option>
                                </select>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="form">
                    <div className="form-group">
                        <Form.Label>Bukti Pembayaran</Form.Label>
                        <Form.Control type="file" name="image" accept="image/*" value={this.state.image} onChange={this.handleChange} placeholder="Masukkan Bukti Pembayaran" />
                    </div>
                    </div>


                    <div className="d-flex justify-content-end">
                        <Button variant="primary" onClick={this.handleError} >Bayar</Button>
                    </div>

                </Form>
            </div >
        );
    }
}