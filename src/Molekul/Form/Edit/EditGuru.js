import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import moment from 'moment';
import swal from 'sweetalert';
import { Col, Row, FormGroup, Form, Button } from 'react-bootstrap';


const api = "http://localhost:5001";
export default class EditGuru extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id_guru: props.guru[0].id_guru,
            nama_guru: props.guru[0].nama_guru,
            jenis_kelamin: props.guru[0].jenis_kelamin,
            no_nuptk: props.guru[0].no_nuptk,
            tempat_lahir: props.guru[0].tempat_lahir,
            tgl_lahir: props.guru[0].tgl_lahir,
            pendidikan: props.guru[0].pendidikan,
            lulusan: props.guru[0].lulusan,
            jabatan: props.guru[0].jabatan,
            agama: props.guru[0].agama,
            status_karyawan: props.guru[0].status_karyawan
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

    editGuru = () => {
        console.log(this.state.nama_guru);
        console.log(this.state.jenis_kelamin);
        axios.post(api + "/editoneguru", {
            id_guru: this.state.id_guru,
            nama_guru: this.state.nama_guru,
            jenis_kelamin: this.state.jenis_kelamin,
            no_nuptk: this.state.no_nuptk,
            tempat_lahir: this.state.tempat_lahir,
            tgl_lahir: this.getformatdate(this.state.tgl_lahir),
            pendidikan: this.state.pendidikan,
            lulusan: this.state.lulusan,
            jabatan: this.state.jabatan,
            status_karyawan: this.state.status_karyawan,
            agama: this.state.agama
        })
        .then(function (response) {
            if (response.status == 200) {
                swal({
                    title: "Edit Data", 
                    text: "Data Anda berhasil di Ubah", 
                    type: "success",
                    icon: "success"
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
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(event);
    };

    render() {
        return (
            <div>
                <Form ClassName="form">
                    <Col>

                        <Form.Label>

                            Nama Guru
                        </Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control id="nama_guru" type="text" name="nama_guru" value={this.state.nama_guru} onChange={this.handleChange("nama_guru")} />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <select className="custom-select"  name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange("jenis_kelamin")} >
                                <option>Jenis Kelamin</option>
                                <option value="PR">Perempuan</option>
                                <option value="LK">Laki - Laki</option>
                            </select>
                        </FormGroup>

                        <Form.Label>No NUPTK</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>  
                                 <Form.Control type="text" name="no_nuptk" value={this.state.no_nuptk} onChange={this.handleChange("no_nuptk")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tempat Lahir</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>

                                    <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange("tempat_lahir")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Tanggal Lahir *</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange("tgl_lahir")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Pendidikan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="pendidikan" value={this.state.pendidikan} onChange={this.handleChange("pendidikan")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>Lulusan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="lulusan" value={this.state.lulusan} onChange={this.handleChange("lulusan")} />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Jabatan</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="jabatan" value={this.state.jabatan} onChange={this.handleChange("jabatan")} />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Status Karyawan</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="status_karyawan" value={this.state.status_karyawan} onChange={this.handleChange("status_karyawan")} >
                                <option>Pilih Status</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Tidak Aktif">Tidak Aktif</option>
                            </select>
                        </FormGroup>


                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <select className="custom-select" name="agama" value={this.state.agama} onChange={this.handleChange("agama")}  >
                                <option>Pilih Agama</option>
                                <option value="Kristen Protestan">Kristen Protestan</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Khonghucu">Khonghucu</option>
                            </select>
                        </FormGroup>


                        <div className="d-flex  justify-content-end">
                            <Button type="button" onClick={this.editGuru}>Kirim Perubahan</Button>
                        </div>

                    </Col>

                </Form>
            </div>
        );
    }
}
