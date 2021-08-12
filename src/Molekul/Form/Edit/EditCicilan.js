import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditCicilan extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        kode_cicilan:props.laporancicilan[0].kode_cicilan,
        student_account:props.laporancicilan[0].student_account,
        nis :props.laporancicilan[0].nis ,
        nisn:props.laporancicilan[0].nisn,
        nama:props.laporancicilan[0].nama,
        tgl_bayar:props.laporancicilan[0].tgl_bayar,
        buku:props.laporancicilan[0].buku,
        voucher_no:props.laporancicilan[0].voucher_no,
        debit:props.laporancicilan[0].debit,
        kredit:props.laporancicilan[0].kredit,
        uang_pangkal:props.laporancicilan[0].uang_pangkal,
        seragam:props.laporancicilan[0].seragam,
        saldo:props.laporancicilan[0].saldo,
        image:props.laporancicilan[0].image
        };
       
      }
    
      
EditCicilan=()=>{
        axios.post(api + "/editonecicilan", {
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
                    <Form.Label>Kode Cicilan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="kode_cicilan" type="text" name="kode_cicilan"  value={this.state.kode_cicilan} />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Student Account</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="studen_account" value={this.state.studen_account} />
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>Nomor Induk</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="number" name="nis"    value={this.state.nis} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>NISN</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            
                                <Form.Control type="number" name="nisn" value={this.state.nisn}  />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Nama Siswa</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nama" value={this.state.nama}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Bayar</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="date" name="tgl_bayar" value={this.state.tgl_bayar}  />
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
                                <Form.Control type="number" name="voucher_no" value={this.state.voucher_no} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Debit</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.EditCicilan}>Kirim Perubahan</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
                               
                        
        );
    }}
