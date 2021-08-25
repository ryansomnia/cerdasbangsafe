import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
import swal from 'sweetalert';
// import "./TambahKelas.css";
import swal from 'sweetalert';

const api ='http://localhost:5001'
export default class TambahKelas extends Component {
    constructor(props){
        super(props)

        this.state = {
            nama_kelas:[],
            kode_kelas:'',
            nama_guru:'',
            response : ""
 
        }
    }


handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

handleError = () =>{
    console.log('YE');
<<<<<<< HEAD
    if (this.state.nama_guru === '' || this.state.kode_kelas === '' || this.state.nama_kelas === ''){
        
        swal({
            icon: "warning",
            text: "data mu ada yang belum ter isi"
=======
    if (this.state.nama_guru === ''
       
    ){
        swal({
            title: "Tambah Data", 
                text: "Data Anda Gagal di Tambah", 
            type: "danger",
            icon: "warning"
          }).then(function () {
            window.location.reload();
>>>>>>> bd3b4743c0fd186d3b875cecfd1d8c49823eafbe
          });
    } else {
       this.addOneData()
        
    }
}

addOneData= () => {
    console.log("Data Masuk");
    axios.post(api+ '/addOneKelas', {
        nama_kelas : this.state.nama_kelas,
        kode_kelas : this.state.kode_kelas,
        nama_guru : this.state.nama_guru
    })
    .then(json => {
        console.log(json,'data');
<<<<<<< HEAD
        console.log('===============json=====================');
        console.log(json.status);
        console.log('====================================');
        if (json.status == 200) {
            swal({
                title: "Tambah data", 
                text: "data mu berhasil ditambah", 
                type: "success"
              }).then(function () {
                window.location.reload();
              });
        } else {
            swal({
                title: "Tambah data", 
                text: "data mu tidak berhasil ditambah", 
                type: "danger"
=======
        if (json.status == 200) {
            swal({
                title: "Tambah data", 
                text: "Data Anda berhasil ditambah", 
                type: "success",
                icon: "success"
>>>>>>> bd3b4743c0fd186d3b875cecfd1d8c49823eafbe
              }).then(function () {
                window.location.reload();
              });
        }
    })
}

    render(){
        return(
            <Container>
                <Form ClassName="form">
                    <Col>
                   
                    <Form.Label>Kode Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control id="kode_kelas" type="text" name="kode_kelas"  value={this.state.kode_kelas} onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Nama Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nama_kelas"  value={this.state.nama_kelas} onChange={this.handleChange}  />
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                  
                    <Form.Label>Wali Kelas</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nama_guru"  value={this.state.nama_guru} onChange={this.handleChange}  />
                            </Col>
                        </Row>
                    </FormGroup>

                   <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.handleError}>Submit</Button>
                    </div>  
                    </Col>

                </Form>
            </Container>
        );
    }
}