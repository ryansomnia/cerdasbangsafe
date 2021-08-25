import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
<<<<<<< HEAD
import {Col, Row, FormGroup, Form, Button, Container} from 'react-bootstrap';
=======
import { Col, Row, FormGroup, Form, Button, Container } from 'react-bootstrap';
>>>>>>> bd3b4743c0fd186d3b875cecfd1d8c49823eafbe
import swal from 'sweetalert';

const api = "http://localhost:5001";
export default class EditKelas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nama_kelas: props.kelas[0].nama_kelas,
            kode_kelas: props.kelas[0].kode_kelas,
            nama_guru: props.kelas[0].nama_guru
        };
        this.handleChange = this.handleChange.bind(this);
    }


    editKelas = () => {
        console.log(this.state.kelas);
        console.log(this.state.nama_siswa);
        axios.post(api + "/editOnedata", {
<<<<<<< HEAD
            nama_kelas : this.state.nama_kelas,
            kode_kelas : this.state.kode_kelas,
            nama_guru : this.state.nama_guru
          })
          .then(function (response) {
            if (response.status == 200) {
                swal({
                    title: "Tambah data", 
                    text: "data mu berhasil ditambah", 
                    type: "success"
                  }).then(function () {
                    window.location.reload();
                  });
            } 

            console.log(response);
          })
          .catch(function (error) {
            swal({
                title: "Tambah data", 
                text: `data mu tidak berhasil ditambah Error : ${error}`, 
                type: "danger"
              }).then(function () {
                window.location.reload();
              });
         
          });
      } 
=======
            nama_kelas: this.state.nama_kelas,
            kode_kelas: this.state.kode_kelas,
            nama_guru: this.state.nama_guru
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    swal({
                        title: "Edit data", 
                        text: "Data Anda berhasil di Ubah", 
                        type: "success",    
                        icon: "success"
                      }).then(function () {
                        window.location.reload();
                      });
                }
            })
            .catch(function (error) {
                console.log(error);
                if (error) {
                    swal({
                        title: "Edit data", 
                        text: "Data Anda Gagal di Ubah", 
                        type: "danger",
                        icon: "Warning"
                      }).then(function () {
                        window.location.reload();
                      });
                }
            });
    }
>>>>>>> bd3b4743c0fd186d3b875cecfd1d8c49823eafbe

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(event);
    };

    render() {
        return (
            <Container>
                <Form ClassName="form">
                    <Col>

                        <Form.Label>Kode Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control id="kode_kelas" type="text" name="kode_kelas" value={this.state.kode_kelas} onChange={this.handleChange("kode_kelas")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Nama Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_kelas" value={this.state.nama_kelas} onChange={this.handleChange("nama_kelas")} />
                                </Col>
                            </Row>
                        </FormGroup>



                        <Form.Label>Wali Kelas</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="nama_guru" value={this.state.nama_guru} onChange={this.handleChange("nama_guru")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.editKelas}>Kirim Perubahan</Button>
                        </div>

                    </Col>
                </Form>
            </Container>

        );
    }
}
