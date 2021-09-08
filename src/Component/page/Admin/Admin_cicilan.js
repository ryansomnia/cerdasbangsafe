import React from "react";
import { Button, Form, Col } from 'react-bootstrap';
import axios from "axios";
import "./Admin_cicilan.css";
import swal from 'sweetalert';
import { PureComponent } from "react";
import ModalTambahCicilan from "../../../Molekul/Modal/ModalTambah/ModalTambahCicilan";
import ModalTambahCicilanBuku from "../../../Molekul/Modal/ModalTambah/ModalTambahBuku";
import ModalTambahSeragam from "../../../Molekul/Modal/ModalTambah/ModalTambahSeragam";
import ModalEdit from '../../../Molekul/Modal/ModalEdit/ModalEditCicilan'
import ModalEditBuku from '../../../Molekul/Modal/ModalEdit/ModalBuku'
import ModalEditSeragam from '../../../Molekul/Modal/ModalEdit/ModalSeragam'


const api = "http://localhost:5001";
class Admin_cicilan extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporancicilan: [],
      buku:[],
      username:'',
      seragam:[],
      response: '',
      display: 'none',
      show: '',
      muncul:'',
      tampil:'',
    };

  }


  editcicilan = (item) => {
    const data = this.state.laporancicilan.filter(i => i.kode_cicilan == item.kode_cicilan)
    this.setState({
      laporancicilan: data,
      show: 'show'
    })
  }

  editbuku = (item) => {
    const data = this.state.buku.filter(i => i.kode_bayar == item.kode_bayar)
    this.setState({
      buku: data,
      muncul: 'show'
    })
  }
  editseragam = (item) => {
    const data = this.state.seragam.filter(i => i.kode_bayar == item.kode_bayar)
    this.setState({
      seragam: data,
      tampil: 'show'
    })

  }

  componentDidMount() {
    this.setState({
      username: JSON.parse(localStorage.getItem("user"))
  })
  console.log("data", this.state.username);
    axios.get(api + "/getlaporancicilan").then(res => {
      this.setState({
        laporancicilan: res.data.values
      });
    });

    axios.get(api + "/getbuku").then(res => {
      this.setState({
        buku: res.data.values
      });
    });

    axios.get(api + "/getseragam").then(res => {
      this.setState({
        seragam: res.data.values
      });
    });

  }

  deletecicilan = (item) => {
    axios.post(api + "/deleteonecicilan", {
      kode_cicilan: item.kode_cicilan

    })
      .then(function (response) {
        console.log(response); if (response.status == 200) {
          swal({
            title: "Hapus data",
            text: "Data Anda berhasil Hapus",
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

  deletebuku = (item) => {
    axios.post(api + "/deleteonebuku", {
      kode_bayar: item.kode_bayar

    })
      .then(function (response) {
        console.log(response); if (response.status == 200) {
          swal({
            title: "Hapus data",
            text: "Data Anda berhasil Hapus",
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

  deleteseragam = (item) => {
    axios.post(api + "/deleteoneseragam", {
      kode_bayar: item.kode_bayar

    })
      .then(function (response) {
        console.log(response); if (response.status == 200) {
          swal({
            title: "Hapus data",
            text: "Data Anda berhasil Hapus",
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
                <a href="/registrasi" >
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
                <a href="/cicilan" className="active">
                  <span className="las la-cicilan"></span>
                  <span>Pembayaran Cicilan</span>
                </a>
              </li>
              <li>
                <a href="/inventaris" >
                  <span className="las la-inventaris"></span>
                  <span>Inventaris Sekolah</span>
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
              {/* <img src="Image/logo3.png" style={{width:"40px",height:"40px"}} alt="" /> */}
              <div>
              <h4>Sing In : {this.state.username.username}
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
                  <span>Inventaris</span>
                </div>
                <div>
                  <span className="las la-user"></span>
                </div>
              </div>
            </div>

            {/* Tabel Cicilan Buku */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Pembayaran Cicilan Buku</h3>
                      <Col md={{ span: 3, offset: 5 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <ModalTambahCicilanBuku />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Bayar</td>
                            <td>No Induk</td>
                            <td>No NISN</td>
                            <td>Nama Siswa</td>
                            <td>Tanggal Bayar</td>
                            <td>Buku</td>
                            <td>Debit</td>
                            <td>Kredit</td>
                            <td>Bukti Bayar</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.buku.map(buku=>
                            <tr key={buku.kode_bayar}>
                              <td>{buku.kode_bayar}</td>
                              <td>{buku.nis}</td>
                              <td>{buku.nisn}</td>
                              <td>{buku.nama}</td>
                              <td>{buku.tgl_bayar}</td>
                              <td>{buku.buku}</td>
                              <td>Rp. {buku.debit}</td>
                              <td>Rp. {buku.kredit}</td>
                              <td><a href={buku.image}><img src={buku.image} style={{width:"100px"}} /></a></td>
                              <td>
                                <div className="d-flex ">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editbuku.bind(this, buku)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deletebuku.bind(this, buku)}>
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          )}
                          <ModalEditBuku isShow={this.state.muncul} buku={this.state.buku} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabel Cicilan Seragam */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Cicilan Seragam</h3>
                      <Col md={{ span: 3, offset: 6 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <ModalTambahSeragam/>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                        <tr>
                            <td>Kode Bayar</td>
                            <td>No Induk</td>
                            <td>No NISN</td>
                            <td>Nama Siswa</td>
                            <td>Tanggal Bayar</td>
                            <td>Seragam</td>
                            <td>Debit</td>
                            <td>Kredit</td>
                            <td>Bukti Bayar</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.seragam.map(seragam=>
                            <tr key={seragam.kode_bayar}>
                              <td>{seragam.kode_bayar}</td>
                              <td>{seragam.nis}</td>
                              <td>{seragam.nisn}</td>
                              <td>{seragam.nama}</td>
                              <td>{seragam.tgl_bayar}</td>
                              <td>{seragam.seragam}</td>
                              <td>Rp. {seragam.debit}</td>
                              <td>Rp. {seragam.kredit}</td>
                              <td><a href={seragam.image}><img src={seragam.image} style={{width:"100px"}} /></a></td>
                              <td>
                                <div className="d-flex ">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editseragam.bind(this, seragam)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteseragam.bind(this, seragam)}>
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          )}
                            <ModalEditSeragam isShow={this.state.tampil} seragam={this.state.seragam} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabel Cicilan Uang Pangkal */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Cicilan Uang Pangkal</h3>
                      <Col md={{ span: 3, offset: 5 }}  >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>

                    <ModalTambahCicilan />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Bayar</td>
                            <td>No Induk</td>
                            <td>No NISN</td>
                            <td>Nama Siswa</td>
                            <td>Tanggal Bayar</td>
                            <td>Uang Pangkal</td>
                            <td>Debit</td>
                            <td>Kredit</td>
                            <td>Bukti Bayar</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>

                          {this.state.laporancicilan.map(laporancicilan =>
                            <tr key={laporancicilan.kode_cicilan}>
                              <td>{laporancicilan.kode_cicilan}</td>
                              <td>{laporancicilan.nis}</td>
                              <td>{laporancicilan.nisn}</td>
                              <td>{laporancicilan.nama}</td>
                              <td>{laporancicilan.tgl_bayar}</td>
                              <td>Rp. {laporancicilan.uang_pangkal}</td>
                              <td>Rp. {laporancicilan.debit}</td>
                              <td>Rp. {laporancicilan.kredit}</td>
                              <td><a href={laporancicilan.image}><img src={laporancicilan.image} style={{width:"100px"}} /></a></td>  
                              <td>
                                <div className="d-flex">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editcicilan.bind(this, laporancicilan)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deletecicilan.bind(this, laporancicilan)}>
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
              <ModalEdit isShow={this.state.show} laporancicilan={this.state.laporancicilan} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_cicilan