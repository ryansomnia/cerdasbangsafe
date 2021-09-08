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
            filename: null,
            response: ""

        }
    }

    handleChangeimage = (e) => {
        this.setState({ filename: e.target.files[0] });
       console.log("satuuu", e.target.files[0]);
       }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.filename === '' ||
            this.state.username.nis === '' ||
            this.state.username.nisn === '' ||
            this.state.username.nama_siswa === '' ||
            this.state.tgl_bayar === '' ||
            this.state.debit === '' ||
            this.state.seragam === '' 
        ) {
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
        const formData = new FormData();
        console.log("Mulai Masuk", this.state.filename);
        formData.append("filename",this.state.filename);
        formData.append("kode_bayar",this.state.kode_bayar);
        formData.append("nis",this.state.username.nis);
        formData.append("nisn",this.state.username.nisn);
        formData.append("nama",this.state.username.nama_siswa);
        formData.append("tgl_bayar",this.state.tgl_bayar);
        formData.append("seragam",this.state.seragam);
        formData.append("kredit",this.state.kredit);
        formData.append("debit",this.state.debit);
        formData.append("saldo",this.state.saldo);
      console.log("hajarrr", formData);
      console.log(this.state.filename);
      axios.post(api + '/addOneseragam', formData)
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
                }else{
                    swal({
                        title: "Pembayaran Seragam",
                        text: "Pembayaran Kamu Gagal",
                        type: "warning",
                        icon: "error"
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
                <hr />
                <Form >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama" value={this.state.username.nama_siswa} onChange={this.handleChange} placeholder={this.state.username.nama_siswa} readonly=""  />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Nomor Induk</Form.Label>
                            <Form.Control type="number" name="nis" value={this.state.username.nis} onChange={this.handleChange} placeholder={this.state.username.nis} readonly=""  />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>NISN</Form.Label>
                            <Form.Control type="number" name="nisn" value={this.state.username.nisn} onChange={this.handleChange}  placeholder={this.state.username.nisn} readonly="" />
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
                       <p><input type="file" name="filename" accept="image/*" onChange={this.handleChangeimage} /></p>
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