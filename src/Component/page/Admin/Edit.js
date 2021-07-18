import React, { Component } from 'react'
import axios from 'axios'
// import qs from 'querystring'
// import {Table, Container, Button, NavLink} from 'react-bootstrap';
import { Link } from "react-router-dom";

// import { withRouter } from "react-router";
// const api ='http://192.168.1.34:5001'
const api = 'http://localhost:5001'
   
export class Edit extends Component {
    constructor(props) {
        super (props)
        this.state ={

        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    render() {
        return (
            <Container>
                 <h4>Form Edit Data</h4>
                 <Form ClassName="form">
                     <Col>
                     <Form.Label>Nama Siswa</Form.Label>
                   <FormGroup>
                       <Row>
                           <Col>
                               <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Masukkan Nama Siswa" />
                           </Col>
                       </Row>
                     </FormGroup>
                   
                    
                     <Form.Label>Jenis Kelamin</Form.Label>
                     <FormGroup>
                         <Row>
                             <Col>
                               <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Masukkan Jenis Kelamin"/>
                           </Col>
                       </Row>
                     </FormGroup>
                
                     <Form.Label>Agama</Form.Label>
                     <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Masukkan Agama"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Form.Label>Tanggal Lahir</Form.Label>
                     <FormGroup>
                         <Row>
                             <Col>
                                 <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange}   placeholder="Masukkan Tanggal Lahir DD-MM-YY"/>
                             </Col>
                         </Row>
                     </FormGroup>

                     <Form.Label>Tempat Lahir</Form.Label>
                     <FormGroup>
                         <Row>
                             <Col>
                                 <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange}    placeholder="Masukkan Tempat Lahir"/>
                             </Col>
                         </Row>
                     </FormGroup>

                     <Form.Label>Alamat</Form.Label>
                     <FormGroup>
                         <Row>
                             <Col>
                                 <Form.Control type="text" name="alamat" value={this.state.alamat}  onChange={this.handleChange}   placeholder="Masukkan Alamat Lengkap"/>
                             </Col>
                         </Row>
                     </FormGroup>

                     <Form.Label>Nomor Handphone</Form.Label>
                     <FormGroup>
                         <Row>
                             <Col>
                                 <Form.Control type="number" name="no_hp"  value={this.state.no_hp} onChange={this.handleChange}   placeholder="Masukkan Nomor Handphone"/>
                             </Col>
                         </Row>
                     </FormGroup>

                     <FormGroup>
                         <Row>
                             <Col>
                                 <Button type="button" onClick={this.handleUpdate}>Update</Button>
                             </Col>
                         </Row>
                     </FormGroup>
                     </Col>

                 </Form>
             </Container>

        )
    }
}

export default Edit
