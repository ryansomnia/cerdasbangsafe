import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, FormGroup, Form, Button } from 'react-bootstrap';
import "./pendaftaran.css";

const api = 'http://192.168.1.142:5001'

export default class Registrasi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama_siswa: [],
            jenis_kelamin: '',
            agama: '',
            tgl_lahir: '',
            tempat_lahir: '',
            alamat: '',
            no_hp: '',
            response: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleError = () => {
        console.log('YE');
        if (this.state.jenis_kelamin === '') {
            alert('Mana Kelamin Mu')
        } else {
            this.AddDataRegist()

        }
    }


    AddDataRegist = () => {
        console.log("Masuk");
        axios.post(api + '/firstRegist', {
            nama_siswa: this.state.nama_siswa,
            jenis_kelamin: this.state.jenis_kelamin,
            agama: this.state.agama,
            tgl_lahir: this.state.tgl_lahir,
            tempat_lahir: this.tempat_lahir,
            alamat: this.state.alamat,
            no_hp: this.state.no_hp
        })
            .then(json => {
                console.log(json, 'data');
                // if(json.data.status === 200){
                //     this.setState({
                //     res: data.status.values,
                //     display: 'block'})
                // }else {
                //     this.setState({
                //     res: data.status.values,
                //     display: 'block'})
                //  }
            })
    }

    render() {
        return (
            <div>
                <Form ClassName="form">
                    <Col>
                        <Form.Label>
                            Nama lengkap calon peserta didik *
                        </Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange} placeholder="Tulis nama lengkap calon siswa" />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="Tulis jenis kelamin calon siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange} placeholder="Tulis agama calon siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir *</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange} placeholder="Tulis Tanggal Lahir DD-MM-YY" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange} placeholder="Tulis tempat lahir calon siswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Alamat</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Tulis alamat lengkap" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nomor Handphone</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="number" name="no_hp" value={this.state.no_hp} onChange={this.handleChange} placeholder="Tulis nomor handphone aktif " />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.handleError} >Kirim Pendaftaran</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                </Form>
            </div>
        );
    }
}