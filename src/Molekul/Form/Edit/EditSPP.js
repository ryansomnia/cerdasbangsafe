import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';
import moment from 'moment';


const api = "http://localhost:5001";
export default class EditSPP extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        kode_spp: props.laporanspp[0].kode_spp,
        tgl_bayar: props.laporanspp[0].tgl_bayar,
        bulan: props.laporanspp[0].bulan,
        jumlah: props.laporanspp[0].jumlah,
        ekstrakurikuler: props.laporanspp[0].ekstrakurikuler,
        status: props.laporanspp[0].status,
        image: props.laporanspp[0].image
        };
        this.handleChange = this.handleChange.bind(this);
      }

      getformatdate(date) {
        let tanggalreturn = '';
        let d = new Date(date);
        if (!isNaN(d.getDate())) {
            tanggalreturn = moment(d).format("YYYY-MM-DD")
        }

        return tanggalreturn;
    }
      
    editSpp=()=>{
        console.log(this.state.status);
        console.log(this.state.jumlah);
        axios.post(api + "/editonespp", {
            kode_spp:this.state.kode_spp,
            tgl_bayar:this.getformatdate(this.state.tgl_bayar),
            bulan:this.state.bulan,
            jumlah:this.state.jumlah,
            ekstrakurikuler:this.state.ekstrakurikuler,
            status:this.state.status,
            image:this.state.image,
            id_user:this.state.id_user
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(event);
    };
    render() {
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
                                <Form.Control id="kode_spp" type="text" name="kode_spp"  value={this.state.kode_spp} onChange={this.handleChange("kode_spp")}  />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa}  onChange={this.handleChange("nama_siswa")} />
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="kelas"    value={this.state.kelas}  onChange={this.handleChange("kelas")}  />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Bayar</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar}  onChange={this.handleChange("tgl_bayar")} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Bulan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="bulan" value={this.state.bulan}  onChange={this.handleChange("bulan")}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Ekstrakulikuler</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="ekstrakurikuler" value={this.state.ekstrakurikuler}  onChange={this.handleChange("ekstrakurikuler")}  />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Status</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="status" value={this.state.status}  onChange={this.handleChange("status")}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Bukti Pembayaran</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="file" name="image" value={this.state.image}  onChange={this.handleChange("image")} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.editSpp}>Kirim Perubahan</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
                               
                        
        );
    }}
