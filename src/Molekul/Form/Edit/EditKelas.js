import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditKelas extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                nama_kelas:props.kelas[0].nama_kelas,
                kode_kelas:props.kelas[0].kode_kelas,
                nama_guru:props.kelas[0].nama_guru
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      
editKelas=()=>{
        console.log(this.state.kelas);
        console.log(this.state.nama_siswa);
        axios.post(api + "/editOnedata", {
            nama_kelas : this.state.nama_kelas,
            kode_kelas : this.state.kode_kelas,
            nama_guru : this.state.nama_guru
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
               
                <Form.Label>Kode Kelas</Form.Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Form.Control id="kode_kelas" type="text" name="kode_kelas"  value={this.state.kode_kelas} onChange={this.handleChange("kode_kelas")}/>
                        </Col>
                    </Row>
                </FormGroup>
                
                <Form.Label>Nama Kelas</Form.Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Form.Control type="text" name="nama_kelas"  value={this.state.nama_kelas} onChange={this.handleChange("nama_kelas")}  />
                        </Col>
                    </Row>
                </FormGroup>
               
                
              
                <Form.Label>Wali Kelas</Form.Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Form.Control type="text" name="nama_guru"  value={this.state.nama_guru} onChange={this.handleChange("nama_guru")} />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                      
                <Col md={{ span: 5, offset: 9 }} >
                <FormGroup><Row><Col> <Button type="button" onClick={this.editKelas}>Kirim Perubahan</Button></Col></Row></FormGroup>
                </Col>
               
                    </Row>
                </FormGroup>
                </Col>

            </Form>
        </Container>
                          
        );
    }}
