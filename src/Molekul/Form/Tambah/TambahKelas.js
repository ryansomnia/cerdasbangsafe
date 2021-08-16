import React, { Component } from "react";
import axios from 'axios'
import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
import swal from 'sweetalert';
// import "./TambahKelas.css";

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
    if (this.state.nama_guru === '' || this.state.kode_kelas === '' || this.state.nama_kelas === ''){
        
        swal({
            icon: "warning",
            text: "data mu ada yang belum ter isi"
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
        console.log('===============json=====================');
        console.log(json.status);
        console.log('====================================');
        if (json.status == 200) {
            swal({
                icon: "success",
                text: "data mu telah sukses bertambah"
              });
        } else {
            swal({
                icon: "danger",
                text: "data mu tidak sukses ditambah"
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