import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// import "./TambahComp.css";

const api ='http://192.168.1.142:5001'

export default class TambahSPP extends Component {
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
    kode_spp: this.state.kode_spp,
    tgl_bayar: this.state.tgl_bayar,
    bulan: this.state.bulan,
    jumlah: this.state.jumlah,
    ekstrakulikuler: this.state.ekstrakulikuler,
    status: this.state.status,
    image: this.state.image
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
            
                        Kode SPP
                    </Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_spp" type="text" name="kode_spp"  value={this.state.kode_spp} onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa}/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="kelas"    value={this.state.kelas} />
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

                    <Form.Label>Bulan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="bulan" value={this.state.bulan} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Ekstrakulikuler</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="ekstrakulikuler" value={this.state.ekstrakulikuler} />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Status</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="status" value={this.state.status} />
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