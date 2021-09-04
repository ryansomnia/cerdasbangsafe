import React, { Component } from "react";
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
// import "./pembayaranpangkal.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'

export default class Pembayaranpangkal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_cicilan: [],
            username: '',
            nis: '',
            nisn: '',
            nama: '',
            tgl_bayar: '',
            debit: '',
            kredit: '',
            uang_pangkal: "",
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
        if (this.state.image === '' ||
            this.state.username.nis === '' ||
            this.state.username.nisn === '' ||
            this.state.username.nama_siswa === '' ||
            this.state.tgl_bayar === '' ||
            this.state.debit === '' ||
            this.state.uang_pangkal === '' ||
            this.state.image === ''
        ) {
            swal({
                title: "Pembayaran Gagal", 
                text: "Ada Data Yang Belum di Isi", 
                type: "danger",
                icon: "warning"
              }).then(function () {
                window.location.reload();
              });
        } else {
            this.AddOneData()
        }
    }

    componentDidMount() {
        this.setState({
            username: JSON.parse(localStorage.getItem("siswa"))
        })
        console.log("data", this.state.username);

    }


    AddOneData = () => {
        console.log("Data Masuk");
        axios.post(api + '/addOneLaporanCicilan', {
            kode_cicilan: this.state.kode_cicilan,
            nis: this.state.username.nis,
            nisn: this.state.username.nisn,
            nama: this.state.username.nama_siswa,
            tgl_bayar: this.state.tgl_bayar,
            debit: this.state.debit,
            kredit: this.state.kredit,
            uang_pangkal: this.state.uang_pangkal,
            saldo: this.state.saldo,
            image: this.state.image
        })
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Pembayaran Uang Pangkal",
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
                <h5>Form Pembayaran</h5>
                <hr />
                <Form >

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama" value={this.state.username.nama_siswa} onChange={this.handleChange} placeholder={this.state.username.nama_siswa} readonly="" />
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
                            <Form.Label>Debit</Form.Label>
                            <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange} placeholder="Masukkan Jumlah Debit" />
                        </div>

                        <div className="form-group col-md-6">
                            <Form.Label>Jumlah Bayar</Form.Label>
                            <Form.Control type="number" name="uang_pangkal" value={this.state.uang_pangkal} onChange={this.handleChange} placeholder="Rp." />
                        </div>
                    </div>

                    <div className="form">
                        <div className="form-group ">
                            <Form.Label>Bukti Pembayaran</Form.Label>
                            <Form.Control type="file" name="image" accept="image/*" value={this.state.image} onChange={this.handleChange} placeholder="Masukkan Bukti Pembayaran" />
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