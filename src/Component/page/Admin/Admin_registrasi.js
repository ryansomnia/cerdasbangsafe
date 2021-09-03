import React from "react";
import { Button, Form, Col } from 'react-bootstrap';
import axios from "axios";
import "./Admin_registrasi.css";
import swal from 'sweetalert';
import { PureComponent } from "react";
import ModalEditSiswa from "../../../Molekul/Modal/ModalEdit/ModalEditSiswa";
import ModalTambahSiswa from "../../../Molekul/Modal/ModalTambah/ModalTambahSiswa"

const api = "http://localhost:5001";
class Admin_registrasi extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      siswa: [],
      username:'',
      response: '',
      show: '',
    };
  }

  editSiswa = (item) => {
    const data = this.state.siswa.filter(i => i.id_regist == item.id_regist)
    this.setState({
      siswa: data,
      show: 'show'
    })
  }


  componentDidMount() {
    this.setState({
      username: localStorage.getItem("username")
    })
    axios.get(api + "/getSiswa").then(res => {
      this.setState({
        siswa: res.data.values
      });
    });
  }

  deleteSiswa = (item) => {
    axios.post(api + "/deleteOnesiswa", {
      id_regist: item.id_regist

    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          swal({
            title: "Hapus data",
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
                <a href="/master" >
                  <span className="las la-master"></span>
                  <span>Master</span>
                </a>
              </li>
              <li>
                <a href="/registrasi" className="active">
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
                  <span className="las la-cicilan"></span>
                  <span>Pembayaran Cicilan</span>
                </a>
              </li>
              <li>
                <a href="/inventaris">
                  <span className="las la-inventaris"></span>
                  <span>Inventaris Sekolah</span>
                </a>
              </li>
              <li>
                <a href="/bulanan">
                  <span className="las la-bulanan"></span>
                  <span>Laporan </span>
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
              <img src="Image/logo3.png" style={{width:"40px",height:"40px"}} alt="" />
              <div>
              <h4>Sing In : {this.state.username} 
                <Button size="sm" size="sm" variant="danger" onClick={() => this.pageLogin('/home')}>LogOut</Button></h4>
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
                  <span>Inventari</span>
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
                      <h3>Table Siswa</h3>
                      <Col md={{ span: 3, offset: 5 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <ModalTambahSiswa />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Nama Siswa</td>
                            <td>Nomor Induk</td>
                            <td>NISN</td>
                            <td>Jenis Kelamin</td>
                            <td>Tanggal Lahir</td>
                            <td>Tempat Lahir</td>
                            <td>Alamat</td>
                            <td>Agama</td>
                            <td>Nama Ayah</td>
                            <td>Nama Ibu</td>
                            <td>Nomor Telephone </td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>


                          {this.state.siswa.map(siswa =>
                            <tr key={siswa.id_user}>
                              <td>{siswa.nama_siswa}</td>
                              <td>{siswa.nis}</td>
                              <td>{siswa.nisn}</td>
                              <td>{siswa.jenis_kelamin}</td>
                              <td>{siswa.tgl_lahir}</td>
                              <td>{siswa.tempat_lahir}</td>
                              <td>{siswa.alamat}</td>
                              <td>{siswa.agama}</td>
                              <td>{siswa.nama_ayah}</td>
                              <td>{siswa.nama_ibu}</td>
                              <td>{siswa.no_hp}</td>
                              <td>
                                <div className="d-flex">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editSiswa.bind(this, siswa)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteSiswa.bind(this, siswa)}>
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
              <ModalEditSiswa isShow={this.state.show} siswa={this.state.siswa} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_registrasi