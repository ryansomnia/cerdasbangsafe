// import {Component } from "react";
// import axios from 'axios'
// import { Link } from "react-router-dom";
// import qs from 'querystring'
// import {Col, Container, Row, FormGroup, Form, Button} from 'react-bootstrap';
// const api ='http://192.168.1.142:5001'


// export default class EditComp extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             nama_siswa : this.props.location.state.nama_siswa,
//             jenis_kelamin :  this.props.location.state.jenis_kelamin,
//             agama :  this.props.location.state.agama,
//             tgl_lahir :  this.props.location.state.tgl_lahir,
//             tempat_lahir :  this.props.location.state.tempat_lahir,
//             alamat :  this.props.location.state.alamat,
//             no_hp :  this.props.location.state.no_hp,
//             response : "",
//             display: 'nonea'

//         }
//     }

//     handleUpdate = () =>{
//         console.log('YE');
//         this.setState({[e.target.name] : e.target.value})
//     }

//     ubahData = (nama_siswa) => {
//         const data= qs.stringify({
//             nama_siswa: nama_siswa,
//             jenis_kelamin :  this.state.jenis_kelamin,
//             agama :  this.state.agama,
//             tgl_lahir :  this.state.tgl_lahir,
//             tempat_lahir :  this.state.tempat_lahir,
//             alamat :  this.state.alamat,
//             no_hp :  this.state.no_hp
//         })
//         axios.put(api+'/editOneguru', guru.editOneData)
//         .then(json => {
//             console.log(json,'data');
//         })
//     }

//     render() {
//         return (
//             <Container>
//                 <h4>Form Edit Data</h4>
//                 <Form ClassName="form">
//                     <Col>
//                     <Form.Label>Nama Siswa</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="text" name="nama_siswa" value={this.state.nama_siswa} onChange={this.handleChange}   placeholder="Masukkan Nama Siswa" />
//                             </Col>
//                         </Row>
//                     </FormGroup>
                   
                    
//                     <Form.Label>Jenis Kelamin</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange}   placeholder="Masukkan Jenis Kelamin"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>
                  
//                     <Form.Label>Agama</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="text" name="agama" value={this.state.agama} onChange={this.handleChange}    placeholder="Masukkan Agama"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>

//                     <Form.Label>Tanggal Lahir</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="date" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange}   placeholder="Masukkan Tanggal Lahir DD-MM-YY"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>

//                     <Form.Label>Tempat Lahir</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange}    placeholder="Masukkan Tempat Lahir"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>

//                     <Form.Label>Alamat</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="text" name="alamat" value={this.state.alamat}  onChange={this.handleChange}   placeholder="Masukkan Alamat Lengkap"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>

//                     <Form.Label>Nomor Handphone</Form.Label>
//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Form.Control type="number" name="no_hp"  value={this.state.no_hp} onChange={this.handleChange}   placeholder="Masukkan Nomor Handphone"/>
//                             </Col>
//                         </Row>
//                     </FormGroup>

//                     <FormGroup>
//                         <Row>
//                             <Col>
//                                 <Button type="button" onClick={this.handleUpdate}>Update</Button>
//                             </Col>
//                         </Row>
//                     </FormGroup>
//                     </Col>

//                 </Form>
//             </Container>


//         );
//     }
// }