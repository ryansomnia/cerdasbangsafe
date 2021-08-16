import React, { Component } from "react";
import axios from 'axios'
import {Col,Row, FormGroup, Form, Button} from 'react-bootstrap';
import "./pembayaranspp.css";

const api ='http://localhost:5001'
export default class Pembayaranspp extends Component {
    constructor(props){
        super(props)

        this.state = {
            kode_spp       : [],
            tgl_bayar      : '',
            bulan          : '',
            jumlah         : '',
            ekstrakurikuler: '',
            status         : '',
            image          : '',
            nama_siswa     : '',
            kelas          : '',
            response : ""

        }
    }
handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

handleError = () =>{
    console.log('YE');
    if (this.state.image === ''){
        alert('Masih ada data yang belum di isi !')
    } else {
       this.AddOneData()
        
    }
}


AddOneData = () => {
    console.log(" Data Masuk");
    axios.post(api+ '/addOneLaporanSPP', {
    kode_spp: this.state.kode_spp,
    tgl_bayar: this.state.tgl_bayar,
    bulan: this.state.bulan,
    jumlah: this.state.jumlah,
    ekstrakurikuler: this.state.ekstrakurikuler,
    status: this.state.status,
    image: this.state.image,
    nama_siswa:this.state.nama_siswa,
    kelas:this.state.kelas
    })
    .then(json => {
        console.log(json,'data');
    })
}
render(){
    return(
        <div className="mt-4  main-admin ">
            <h4>Form Pembayaran</h4>
            <Form ClassName="form ">
                
            <Col>
                <Form.Label>Nama Siswa</Form.Label>
                <FormGroup >
                    <Row >
                        <Col >
                    <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} placeholder="Masukkan Nama Siswa"/>
                    </Col>
                    </Row>
                </FormGroup>
            </Col>

             <Col>   
             <Form.Label>Kelas</Form.Label>
                <FormGroup>
                    <Row>
                    <Col >
                    <Form.Control type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder="Masukkan Kelas Siswa"/>
                    </Col>
                    </Row>
                </FormGroup>
            </Col>
            
                <Col>
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
                </Col>

                <Col>
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
                </Col>

                <Col>
                <Form.Label>Jumlah</Form.Label>
                <FormGroup >
                     <Row>
                    <Col >
                        <Form.Control type="Number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Bayar"/>
                    </Col>
                    </Row>   
                </FormGroup>
                </Col>

            <Col>
            <Form.Label>Upload Bukti Pembayaran</Form.Label>
            <Form.Group >
                <Row><Col>
                <Form.Control type="file" name="image" value={this.state.image} accept="image/*" onChange={this.handleChange}/>
                </Col></Row>
            </Form.Group>
            </Col>
    <Col  className="d-flex justify-content-end">
    <Button variant="primary" onClick={this.handleError} >Bayar</Button>
   </Col>
    </Form>
</div>
        );
    }
}