import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditBulanan extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        kode_laporan:props.laporanbulanan[0].kode_laporan,
        tgl:props.laporanbulanan[0].tgl,
        keterangan:props.laporanbulanan[0].keterangan,
        debit:props.laporanbulanan[0].debit,
        kredit:props.laporanbulanan[0].kredit,
        saldo:props.laporanbulanan[0].saldo,
        jumlah:props.laporanbulanan[0].jumlah,
        status:props.laporanbulanan[0].status
        };
       
      }
    
      
EditBulanan=()=>{
        axios.post(api + "/editonebulanan", {
            kode_laporan:this.state.kode_laporan,  
            tgl :this.state.tgl ,
            keterangan:this.state.keterangan,
            debit:this.state.debit,
            kredit:this.state.kredit,
            saldo:this.state.saldo  ,
            jumlah :this.state.jumlah ,
            status:this.state.status
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
                    <Form.Label>Kode Laporan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_laporan" type="text" name="kode_laporan"  value={this.state.kode_laporan} onChange={this.handleChange}  />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Tanggal</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="date" name="tgl" value={this.state.tgl} />
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Keterangan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="keterangan"    value={this.state.keterangan} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Debit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="debit" value={this.state.debit} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Kredit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="kredit" value={this.state.kredit}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Saldo</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="saldo" value={this.state.saldo}  />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Jumlah</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="jumlah" value={this.state.jumlah}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    
                    <Form.Label>status</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="status" value={this.state.status} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.EditBulanan}>Kirim Pendaftaran</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
                               
                        
        );
    }}
