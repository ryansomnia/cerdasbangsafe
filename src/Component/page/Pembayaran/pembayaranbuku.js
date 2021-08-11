import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// import "./pembayaranspp.css";

const api ='http://192.168.1.142:5001'
export default class Pembayaranbuku extends Component {
    constructor(props){
        super(props)

        this.state = {
            kode_cicilan :[],
            student_account :'',
            nis :'',
            nisn :'',
            nama :'',
            tgl_bayar :'',
            buku :'',
            voucher_no :'',
            debit :'',
            kredit :'',
            uang_pangkal :"",
            seragam :'',
            saldo :'',
            image :'',
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
       this.AddDataCicilan()
        
    }
}


AddDataCicilan= () => {
    console.log("Data Masuk");
    axios.post(api+ '/addOneLaporanCicilan', {
    kode_cicilan     : this.state.kode_cicilan,
    student_account	 :this.state.student_account,
    nis              :this.state.nis,
    nisn             : this.state.nisn,
    nama             : this.state.nama,
    tgl_bayar        : this.state.tgl_bayar,
    buku             : this.state.buku,
    voucher_no       : this.state.voucher_no,
    debit            : this.state.debit,
    kredit           : this.state.kredit,
    uang_pangkal     : this.state.uang_pangkal,
    seragam          : this.state.seragam,
    saldo            : this.state.saldo,
    image            : this.state.image
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
                    <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Siswa"/>
                </FormGroup>

                <FormGroup as={Col} controlId="formGridPassword">
                    <Form.Label>Nomor Induk</Form.Label>
                    <Form.Control type="text" name="nis" value={this.state.nis} onChange={this.handleChange} placeholder="Masukkan Nomor Induk"/>
                </FormGroup>
                </Row>

                <FormGroup className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Buku</Form.Label>
                        <Form.Control type="text" name="buku" value={this.state.buku} onChange={this.handleChange} placeholder="Masukkan Nama Buku"/>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="Number" name="debit" value={this.state.debit} onChange={this.handleChange} placeholder="Masukkan Jumlah Bayar"/>
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