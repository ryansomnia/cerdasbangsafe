import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditInventaris extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        kode_inventaris:props.laporaninventaris[0].kode_inventaris,
        tgl_pembelian:props.laporaninventaris[0].tgl_pembelian,
        keterangan:props.laporaninventaris[0].keterangan,
        jumlah:props.laporaninventaris[0].jumlah,
        catatan:props.laporaninventaris[0].catatan,
        tahun_ajaran:props.laporaninventaris[0].tahun_ajaran,
        wali_kelas:props.laporaninventaris[0].wali_kelas,
        image :props.laporaninventaris[0].image 
        };
       
      }
    
      
EditInventaris=()=>{
        axios.post(api + "/editoneinventaris", {
            kode_inventaris :this.state.kode_inventaris,
            tgl_pembelian :this.state.tgl_pembelian,
            keterangan :this.state.keterangan,
            jumlah :this.state.jumlah ,
            catatan :this.state.catatan,
            tahun_ajaran :this.state.tahun_ajaran,
            wali_kelas :this.state.wali_kelas,
            image :this.state.image
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

     handleChange(event) {
    // this.setState({value: event.target.value});
  }

    render() {
        return(
            <Container>
                <Form ClassName="form">
                    <Col>
                    <Form.Label>Kode Inventaris</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_inventaris" type="text" name="kode_inventaris"  value={this.state.kode_inventaris} onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Tanggal Pembelian</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="date" name="tgl_pembelian" value={this.state.tgl_pembelian}  />
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Keterangan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="keterangan"    value={this.state.keterangan}   />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Jumlah</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="jumlah" value={this.state.jumlah}  />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Catatan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="catatan" value={this.state.catatan}   />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tahun Ajaran</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="tahun_ajaran" value={this.state.tahun_ajaran}  />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Wali Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="wali_kelas" value={this.state.wali_kelas}  />
                            </Col>
                        </Row>
                    </FormGroup>

                    
                    <Form.Label>Bukti Pembayaran</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="file" name="image" value={this.state.image}   />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.EditInventaris}>Kirim Perubahan</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
                               
                        
        );
    }}
