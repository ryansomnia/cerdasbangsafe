import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// import "./TambahCicilan.css";

const api ='http://localhost:5001'

export default class TambahCicilan extends Component {
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
    if (this.state.nama === ''){
        alert('Masih ada data yang belum di isi !')
    } else {
       this.AddOneData()
        
    }
}


AddOneData= () => {
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
            <Container>    
                <Form ClassName="form">
                    <Col>
                    <Form.Label>Kode Cicilan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_cicilan" type="text" name="kode_cicilan"  value={this.state.kode_cicilan} onChange={this.handleChange}  placeholder="Masukkan Kode Cicilan"/>
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Student Account</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="student_account" value={this.state.student_account} onChange={this.handleChange}  placeholder="Masukkan Studen Account"/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Nomor Induk</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="number" name="nis"    value={this.state.nis} onChange={this.handleChange}  placeholder="Masukkan Nomor Induk Siswa" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>NISN</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            
                                <Form.Control type="number" name="nisn" value={this.state.nisn} onChange={this.handleChange}  placeholder="Masukkan NISN Siswa" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nama" value={this.state.nama} onChange={this.handleChange}  placeholder="Masukkan Nama Siswa" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Bayar</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange}  placeholder="Masukkan Tanggal Pembayaran" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Buku</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="buku" value={this.state.buku} onChange={this.handleChange}  placeholder="Masukkan Nama Buku" />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Voucher No</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="voucher_no" value={this.state.voucher_no} onChange={this.handleChange}  placeholder="Masukkan Nomor Voucher" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Debit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="debit" value={this.state.debit} onChange={this.handleChange}  placeholder="Masukkan Jumlah Debit" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Kredit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="kredit" value={this.state.kredit} onChange={this.handleChange}  placeholder="Masukkan Jumlah Kredit" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Uang Pangkal</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="uang_pangkal" value={this.state.uang_pangkal} onChange={this.handleChange}  placeholder="Masukkan Jumlah Uang Pangkal" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Seragam</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="seragam" value={this.state.seragam} onChange={this.handleChange}  placeholder="Masukkan Nominal Bayar" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Saldo</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="saldo" value={this.state.saldo} onChange={this.handleChange}  placeholder="Masukkan Jumlah Saldo" />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Bukti Pembayaran</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="file" name="image" accept="image/*" value={this.state.image} onChange={this.handleChange}  placeholder="Masukkan Bukti Pembayaran" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col md={{ span: 5, offset: 10 }}>
                            <Button type="button" onClick={this.handleError}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
        );
    }
}