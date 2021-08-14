import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// import "./TambahSPP.css";

const api ='http://localhost:5001'

export default class TambahSPP extends Component {
    constructor(props){
        super(props) 

        this.state = {
        kode_spp:[],
        tgl_bayar:'',
        bulan:'',	
        jumlah:'',
        ekstrakurikuler:'',
        status:'',
        image:'',
        nama_siswa:'',
        kelas:'',
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
       this.addOneData()
        
    }
}


addOneData = () => {
    console.log("Data Masuk");
    axios.post(api+ '/addOneLaporanSPP', {
    kode_spp: this.state.kode_spp,
    tgl_bayar: this.state.tgl_bayar,
    bulan: this.state.bulan,
    jumlah: this.state.jumlah,
    ekstrakurikuler : this.state.ekstrakurikuler,
    status: this.state.status,
    nama_siswa:this.state.nama_siswa,
    kelas:this.state.kelas,
    image: this.state.image
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
                    <Form.Label>
            
                        Kode SPP
                    </Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_spp" type="text" name="kode_spp"  value={this.state.kode_spp} onChange={this.handleChange} placeholder="Masukkan Kode SPP"/>
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}  placeholder="Masukkan Nama Siswa"/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="kelas"    value={this.state.kelas} onChange={this.handleChange}  placeholder="Masukkan Kelas Siswa" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Bayar</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar} onChange={this.handleChange}  placeholder="Masukkan Tanggal Bayar" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Bulan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="bulan" value={this.state.bulan} onChange={this.handleChange}  placeholder="Masukkan Bulan" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Ekstrakulikuler</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="ekstrakurikuler" value={this.state.ekstrakurikuler} onChange={this.handleChange}  placeholder="Masukkan Ekstrakulikuler" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Jumlah</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col> 
                                <Form.Control type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange}  placeholder="Masukkan Jumlah Dana" />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Status</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleChange}  placeholder="Masukkan Status" />
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
                        <Row >
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