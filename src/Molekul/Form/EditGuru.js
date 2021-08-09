import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import {Col, Row, FormGroup, Form, Button} from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditGuru extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        id_guru:props.guru[0].id_guru,
        nama_guru:props.guru[0].nama_guru,
        jenis_kelamin:props.guru[0].jenis_kelamin,
        no_nuptk:props.guru[0].no_nuptk,
        tempat_lahir:props.guru[0].tempat_lahir,
        tgl_lahir:props.guru[0].tgl_lahir,
        pendidikan:props.guru[0].pendidikan,
        lulusan:props.guru[0].lulusan,
        jabatan:props.guru[0].jabatan,
        status_karyawan:props.guru[0].status_karyawan,
        agama:props.guru[0].agama,
        id_user:props.guru[0].id_user
        };
       
      }
    
      
editGuru=()=>{
        axios.post(api + "/editoneguru", {
            id_guru:this.state.id_guru,
            nama_guru:this.state.nama_guru,
            jenis_kelamin:this.state.jenis_kelamin,
            no_nuptk:this.state.no_nuptk,
            tempat_lahir:this.state.tempat_lahir,
            tgl_lahir:this.state.tgl_lahir,
            pendidikan:this.state.pendidikan,
            lulusan:this.state.lulusan,
            jabatan:this.state.jabatan,
            status_karyawan:this.state.status_karyawan,
            agama:this.state.agama,
            id_user:this.state.id_user
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
            <div>
                <Form ClassName="form">
                    <Col>
                    
                    <Form.Label>
            
                        Nama Guru
                    </Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                <Form.Control id="nama_guru" type="text" name="nama_guru"  value={this.state.nama_guru} onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </FormGroup>
                   
                    
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <FormGroup>
                        <Row >
                            <Col>
                                {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin}/>
                            </Col>
                        </Row>
                    </FormGroup>
                  
                    <Form.Label>No NUPTK</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
                                <Form.Control type="text" name="no_nuptk"    value={this.state.no_nuptk} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tempat Lahir</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            
                                <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Tanggal Lahir *</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Pendidikan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="pendidikan" value={this.state.pendidikan} />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <Form.Label>Lulusan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="lulusan" value={this.state.lulusan} />
                            </Col>
                        </Row>
                    </FormGroup>

                    
                    <Form.Label>Jabatan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="jabatan" value={this.state.jabatan} />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Form.Label>Status Karyawan</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="status_karyawan" value={this.state.status_karyawan} />
                            </Col>
                        </Row>
                    </FormGroup>

                    
                    <Form.Label>Agama</Form.Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="agama" value={this.state.agama} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={this.editGuru}>Kirim Pendaftaran</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </div>
        );
    }}