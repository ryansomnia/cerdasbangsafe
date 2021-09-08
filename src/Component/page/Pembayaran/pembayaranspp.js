import React, { Component } from "react";
import axios from 'axios'
import { FormGroup, Form, Button } from 'react-bootstrap';
import "./pembayaranspp.css";
import swal from 'sweetalert';

const api = 'http://localhost:5001'
export default class Pembayaranspp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kode_spp: [],
            username: '',
            tgl_bayar: '',
            bulan: '',
            jumlah: '',
            ekstrakurikuler: '',
            status: '',
            filename: null,
            nama_siswa: '',
            kelas: '',
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
        console.log('YEsssssss');
        if (
            this.state.bulan === '' ||
            this.state.jumlah === '' ||
            this.state.filename === '' ||
            this.state.username.nama_siswa === '' ||
            this.state.username.kelas === ''
        ) {
            swal({
                title: "Pembayaran SPP",
                text: "Ada Data Yang Belum di Isi",
                type: "warning",
                icon: "warning"
            })
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


    AddOneData = (e) => {
        console.log(" Data Mau Masuk");
        const formData = new FormData();
        console.log("Mulai Masuk", this.state.filename);
        formData.append("filename",this.state.filename);
        formData.append("jumlah",this.state.jumlah);
        formData.append("kode_spp",this.state.kode_spp);
        formData.append("bulan",this.state.bulan);
        formData.append("tgl_bayar",this.state.tgl_bayar);
        formData.append("ekstrakurikuler",this.state.ekstrakurikuler);
        formData.append("status",this.state.status);
        formData.append("nama_siswa",this.state.username.nama_siswa);
        formData.append("kelas",this.state.username.kelas);
      console.log("hajarrr", formData);
      console.log(this.state.filename);
      axios.post(api + '/addOneLaporanSPP', formData) 
            // kode_spp: this.state.kode_spp,
            // tgl_bayar: this.state.tgl_bayar,
            // bulan: this.state.bulan,
            // jumlah: this.state.jumlah,
            // ekstrakurikuler: this.state.ekstrakurikuler,
            // status: this.state.status,
            // filename: this.state.filename.name,
            // nama_siswa: this.state.username.nama_siswa,
            // kelas: this.state.username.kelas
        
        // ,{
        //         
          
          
            .then(json => {
                console.log(json, 'data');
                if (json.status == 200) {
                    swal({
                        title: "Pembayaran SPP",
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
                <Form className="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Form.Label>Nama Siswa</Form.Label>
                            <Form.Control type="text" name="nama_siswa" value={this.state.username.nama_siswa} onChange={this.handleChange} placeholder={this.state.username.nama_siswa} readonly="" />
                        </div>
                        <div className="form-group col-md-6">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control type="text" name="kelas" value={this.state.username.kelas} onChange={this.handleChange} placeholder={this.state.username.kelas} readonly="" />
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
                            <input type="file" name="filename" accept="image/*" onChange={this.handleChangeimage} />
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