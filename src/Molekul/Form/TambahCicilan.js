import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// import "./TambahComp.css";

const api ='http://192.168.1.142:5001'

export default class TambahCicilan extends Component {
    constructor(props){
        super(props)

        this.state = {
            kode_cicilan     : [],
            student_account	 : '',
            nis              : '',
            nisn             : '',
            nama             : '',
            tgl_bayar        : '',
            buku             : '',
            voucher_no       : '',
            debit            : '',
            kredit           : '',
            uang_pangkal     : '',
            seragam          : '',
            saldo            : '',
            image            : '',
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
       this.AddDataRegist()
        
    }
}


AddDataRegist = () => {
    console.log("Masuk");
    axios.post(api+ '//addOneLaporanSPP', {
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
                <h4>Form Tambah Data</h4>
                
                <Form ClassName="form">
                    <Col>
                    <Form.Label>
            
                        Kode Cicilan
                    </Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_cicilan" type="text" name="kode_cicilan"  value={this.state.kode_cicilan} onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Student Account</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="studen_account" value={this.state.studen_account}/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Nomor Induk</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="nis"    value={this.state.nis} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>NISN</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            
                                <Form.Control type="text" name="nisn" value={this.state.nisn} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Bayar</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Buku</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="buku" value={this.state.buku} />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Voucher No</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="voucher_no" value={this.state.voucher_no} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Debit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="debit" value={this.state.debit} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Kredit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="kredit" value={this.state.kredit} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Uang Pangkal</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="uang_pangkal" value={this.state.uang_pangkal} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Seragam</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="seragam" value={this.state.seragam} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Saldo</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="kredit" value={this.state.saldo} />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Image</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="file" name="image" value={this.state.image} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
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