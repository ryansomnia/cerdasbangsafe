import React from "react";
import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from "axios";
import "./Admin.css";
import { PureComponent } from "react";
import ModalEdit from '../../../Molekul/Modal/ModalEdit/ModalEditGuru'
import ModalKelas from '../../../Molekul/Modal/ModalEdit/ModalEditKelas'
import ModalTambahKelas from "../../../Molekul/Modal/ModalTambah/ModalTambahKelas";
import ModalTambahGuru from "../../../Molekul/Modal/ModalTambah/ModalTambahGuru";
import swal from 'sweetalert';

const api = "http://localhost:5001";
class Admin extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      kelas: [],
      guru: [],
      username:'',
      response: '',
      display: 'none',
      show: '',
      tampil: ''
    };
  }


  pageLogin(path) {
    console.log('logout', path);
    this.props.history.push(path)
  }

      editGuru =(item)=>{
      const data = this.state.guru.filter(i => i.id_guru == item.id_guru)
      this.setState({
        guru:data,
        show:'show' 
      })
    }
    editKelas =(item)=>{
      const data = this.state.kelas.filter(i => i.kode_kelas == item.kode_kelas)
      this.setState({
        kelas:data,
        tampil:'show'
        
      })
     
    }

  componentDidMount() {
    this.setState({
      username: JSON.parse(localStorage.getItem("user"))
  })
  console.log("data", this.state.username);

    axios.get(api + "/getkelas").then(res => {
      this.setState({
        kelas: res.data.values
      });
    });

    

    axios.get(api + "/getguru").then(res => {
      this.setState({
        guru: res.data.values
      });
    });
  
  }


  deleteGuru = (item) => {
    axios.post(api + "/deleteoneguru", {
      id_guru: item.id_guru
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          swal({
            title: "Hapud data", 
            text: "Data Anda berhasil di Hapus", 
            type: "success",
            icon: "success"
          }).then(function () {
            window.location.reload();
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteKelas = (item) => {
    axios.post(api + "/deleteOnekelas", {
      nama_kelas:item.nama_kelas
      
    })
    .then(function (response) {
     if (response.status == 200) {
      swal({
        title: "Hapud data", 
        text: "Data Anda berhasil di Hapus", 
        type: "success",
        icon: "success"
      }).then(function () {
        window.location.reload();
      })
     } 
      console.log(response.status);
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-brand">
            <span className="lab la-admin"></span>
            <h2>Admin SDCB</h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="/master" className="active">
                  <span className="las la-master"></span>
                  <span>Master</span>
                </a>
              </li>
              <li>
                <a href="/registrasi">
                  <span className="las la-registrasi"></span>
                  <span>Registrasi</span>
                </a>
              </li>
              <li>
                <a href="/spp">
                  <span className="las la-spp"></span>
                  <span>Pembayaran SPP</span>
                </a>
              </li>
              <li>
                <a href="/cicilan">
                  <span className="las la-inventaris"></span>
                  <span>Pembayaran Cicilan</span>
                </a>
              </li>
              <li>
                <a href="/inventaris">
                  <span className="las la-inventaris"></span>
                  <span>Inventari Sekolah</span>
                </a>
              </li>
              <li>
                <a href="/bulanan">
                  <span className="las la-bulanan"></span>
                  <span>Laporan Bulanan </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <header>
            <h2>
              <label for="">
                <span className="la la-bars"></span>
              </label>
              Dashboard
            </h2>

            <div className="user-wrapper">
              {/* <img src="Image/logo3.png" alt=""  style={{width:"40px",height:"40px"}}/> */}
              <div>
                <h5>sign in : {this.state.username.username}

                  <Button size="sm" size="sm" variant="danger" onClick={() => this.pageLogin('/login')}>LogOut</Button></h5>
              </div>
            </div>
          </header>
          <div className="main-admin">
            <div className="cards">
              <div className="card-single">
                <div>
                  <h1>554</h1>
                  <span>Siswa</span>
                </div>
                <div>
                  <span className="las la-user"></span>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>74</h1>
                  <span>Guru</span>
                </div>
                <div>
                  <span className="las la-user"></span>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>54</h1>
                  <span>Staff</span>
                </div>
                <div>
                  <span className="las la-user"></span>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>574</h1>
                  <span>Inventaris</span>
                </div>
                <div>
                  <span className="las la-user"></span>
                </div>
              </div>
            </div>

            <div className="recent-grid">

              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Kelas</h3>
                      <Col md={{ span: 3, offset: 7 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <p />
                    <ModalTambahKelas />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Kelas</td>
                            <td>Nama Kelas</td>
                            <td>Nama Guru</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.kelas.map(kelas =>
                            <tr key={kelas.kode_kelas}>
                              <td>{kelas.kode_kelas}</td>
                              <td>{kelas.nama_kelas}</td>
                              <td>{kelas.nama_guru}</td>
                              <td>
                                <div className="d-flex">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editKelas.bind(this, kelas)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteKelas.bind(this, kelas)}>
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <ModalKelas isShow={this.state.tampil} kelas={this.state.kelas} />

              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Guru</h3>
                      <Col md={{ span: 3, offset: 7 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <ModalTambahGuru />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Nama Guru</td>
                            <td>Jenis Kelamin</td>
                            <td>NO NUPTK</td>
                            <td>Tempat Lahir</td>
                            <td>Tgl Lahir</td>
                            <td>Pendidikan</td>
                            <td>Lulusan</td>
                            <td>Jabatan</td>
                            <td>Agama</td>
                            <td>Status Karyawan</td>

                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.guru.map(guru =>
                            <tr key={guru.id_guru}>
                              <td>{guru.nama_guru}</td>
                              <td>{guru.jenis_kelamin}</td>
                              <td>{guru.no_nuptk}</td>
                              <td>{guru.tempat_lahir}</td>
                              <td>{guru.tgl_lahir}</td>
                              <td>{guru.pendidikan}</td>
                              <td>{guru.lulusan}</td>
                              <td>{guru.jabatan}</td>
                              <td>{guru.agama}</td>
                              <td>{guru.status_karyawan}</td>
                              <td>

                                <div className="d-flex">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editGuru.bind(this, guru)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteGuru.bind(this, guru)}>
                                    Delete
                                  </Button>
                                </div>

                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <ModalEdit isShow={this.state.show} guru={this.state.guru} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin