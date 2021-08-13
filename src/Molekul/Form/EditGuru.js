import axios from "axios";
import React, { Component } from "react";
// import axios from 'axios'
import moment from 'moment';
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
            status_karyawan: props.guru[0].status_karyawan,
            agama: props.guru[0].agama,
            id_user: props.guru[0].id_user
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
        // const {id_guru,nama_guru,jenis_kelamin,no_nuptk,tempat_lahir,tgl_lahir,pendidikan,lulusan,jabatan, status_karyawan, agama, id_user} = this.state
        // console.log('hereee',id_guru,nama_guru, jenis_kelamin, no_nuptk, tempat_lahir, tgl_lahir, pendidikan,lulusan,jabatan, status_karyawan, agama, id_user );
        console.log(this.state.jenis_kelamin);
        console.log(this.state.nama_guru);
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
            agama: this.state.agama,
            id_user: this.state.id_user
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

    // handleChange(event) {
    //     console.log(event);
    //     this.setState({
    //         nama_guru: event.target.nama_guru,
    //         jenis_kelamin: event.target.jenis_kelamin,
    //         no_nuptk: event.target.no_nuptk,
    //         tempat_lahir: event.target.tempat_lahir,
    //         tgl_lahir: event.target.tgl_lahir,
    //         pendidikan: event.target.pendidikan,
    //         lulusan: event.target.lulusan,
    //         jabatan: event.target.jabatan,
    //         status_karyawan: event.target.status_karyawan,
    //         agama: event.target.agama,
    //         id_user: event.target.id_user
    //     });
    //     console.log(this.state.nama_guru)

    // }


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
                                    {/* <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Tulis nama lengkap calon siswa" /> */}
                                    <Form.Control id="nama_guru" type="text" name="nama_guru" value={this.state.nama_guru} onChange={this.handleChange("nama_guru")} />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Jenis Kelamin</Form.Label>
                        <FormGroup>
                            <Row >
                                <Col>
                                    {/* <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Tulis jenis kelamin calon siswa"/> */}
                                    <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange("jenis_kelamin")} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Form.Label>No NUPTK</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    {/* <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Tulis agama calon siswa"/> */}
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
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="status_karyawan" value={this.state.status_karyawan} onChange={this.handleChange("status_karyawan")} />
                                </Col>
                            </Row>
                        </FormGroup>


                        <Form.Label>Agama</Form.Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange("agama")} />
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
    }
}
