import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, FormGroup, Form, Button } from 'react-bootstrap';
// import "./Pembayaranbuku.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'

export default class Pembayaranbuku extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_cicilan: [],
            username:'',
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

    componentDidMount() {
        this.setState({
          username: JSON.parse (localStorage.getItem("siswa"))
        })
        console.log( "data", this.state.username);

    }

    AddOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOnebuku', {
            kode_cicilan: this.state.kode_cicilan,
            nis: this.state.username.nis,
            nisn: this.state.username.nisn,
            nama: this.state.username.nama_siswa,
            tgl_bayar: this.state.tgl_bayar,
            buku: this.state.buku,
            debit: this.state.debit,
            kredit: this.state.kredit,
            saldo: this.state.saldo,
            image: this.state.image
        })
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Pembayaran Buku",
                        text: "Pembayaran Kamu Berhasil di Proses",
                        type: "success",
                        icon: "success"
                    }).then(function () {
                        window.location.reload();
                    });
                }
            })
    }

    render() {
        return (
            <div className="mt-4  main-admin ">
                <h5>Form Pembayaran Buku</h5>
                <hr />
                <Form >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama" value={this.state.username.nama_siswa} onChange={this.handleChange}  placeholder={this.state.username.nama_siswa} readonly="" />
                        </div>

                        <div className="form-group col-md-6">
                            <Form.Label>Nomor Induk</Form.Label>
                            <Form.Control type="number" name="nis" value={this.state.username.nis} onChange={this.handleChange} placeholder={this.state.username.nis} readonly="" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>NISN</Form.Label>
                            <Form.Control type="number" name="nisn" value={this.state.username.nisn} onChange={this.handleChange} placeholder={this.state.username.nisn} readonly="" />
                        </div>

                        <div className="form-group col-md-6">
                            <Form.Label>Tanggal Bayar</Form.Label>
                            <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange} placeholder="Masukkan Tanggal Pembayaran" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Buku</Form.Label>
                            <Form.Control type="text" name="buku" value={this.state.buku} onChange={this.handleChange} placeholder="Masukkan Nama Buku" />
                        </div>

                        <div className="form-group col-md-6">
                            <Form.Label>Jumlah Bayar</Form.Label>
                            <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange} placeholder="Rp." />
                        </div>
                    </div>

                    <div className="form">
                        <div className="form-group ">
                            <Form.Label>Bukti Pembayaran</Form.Label>
                            <Form.Control type="file" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Masukkan Bukti Pembayaran" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <Button variant="primary" onClick={this.handleError} >Bayar</Button>
                    </div>

                </Form>
            </div>
        );
    }
}