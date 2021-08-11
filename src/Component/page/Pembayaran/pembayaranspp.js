import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
import "./pembayaranspp.css";

const api ='http://192.168.1.142:5001'
export default class Pembayaranspp extends Component {
    constructor(props){
        super(props)

        this.state = {
            kode_spp       : [],
            tgl_bayar      : '',
            bulan          : '',
            jumlah         : '',
            ekstrakulikuler: '',
            status         : '',
            image          : '',
            nama_siswa     : '',
            kelas          :'',
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
       this.AddDataSPP()
        
    }
}


AddDataSPP = () => {
    console.log(" Data Masuk");
    axios.post(api+ '/addOneLaporanSPP', {
    kode_spp: this.state.kode_spp,
    tgl_bayar: this.state.tgl_bayar,
    bulan: this.state.bulan,
    jumlah: this.state.jumlah,
    ekstrakulikuler: this.state.ekstrakulikuler,
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
        <div className="main-admin">
        <Container  className="mt-5">
            <h4>Form Pembayaran</h4>
            <Form>
                <Row className="mb-3">
                <FormGroup as={Col} controlId="formGridEmail">
                    <Form.Label>Nama Siswa</Form.Label>
                    <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} placeholder="Masukkan Nama Siswa"/>
                </FormGroup>

                <FormGroup as={Col} controlId="formGridPassword">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder="Masukkan Kelas Siswa"/>
                </FormGroup>
                </Row>

                <FormGroup className="mb-3" controlId="formGridAddress1">
                        <Form.Label>SPP Bulan</Form.Label>
                        <Form.Control type="text" name="bulan" value={this.state.bulan} onChange={this.handleChange} placeholder="Masukkan SPP Bulan"/>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="Number" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukkan Jumlah Bayar"/>
                </FormGroup>

     <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload Bukti Pembayaran</Form.Label>
    <Form.Control type="file" name="image" value={this.state.image} onChange={this.handleChange}/>
  </Form.Group>
  

    <div className="d-flex justify-content-end sticky " 
    activeKey="/home"
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >

    <Button variant="primary" onClick={this.handleError} >Bayar</Button>
   </div>
</Form>
           </Container>
           </div>
        );
    }
}