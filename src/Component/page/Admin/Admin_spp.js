import React from "react";
import { Button, Form, Col } from 'react-bootstrap';
import axios from "axios";
import "./Admin_spp.css";
import swal from 'sweetalert';
import { PureComponent } from "react";
import ModalTambahSpp from '../../../Molekul/Modal/ModalTambah/ModalTambahSpp';
import ModalEditSpp from '../../../Molekul/Modal/ModalEdit/ModalEditSpp'
import { CetakSpp } from "../../Cetak/CetakSpp";
import ReactToPrint from 'react-to-print';




const api = "http://localhost:5001";
class Admin_spp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporanspp: [],
      response: '',
      username:'',
      filename:'',
      display: 'none',
      show: ''
    };
  }
 


  editSpp = (item) => {
    const data = this.state.laporanspp.filter(i => i.kode_spp == item.kode_spp)
    this.setState({
      laporanspp: data,
      show: 'show'
    })
  }

  componentDidMount() {
    this.setState({
      username: JSON.parse(localStorage.getItem("user"))
  })
  console.log("data", this.state.username);
    axios.get(api + "/getLaporanSPP").then(res => {
      this.setState({
        laporanspp: res.data.values
      });
    });
  }

  deleteSpp = (item) => {
    axios.post(api + "/deleteonespp", {
      kode_spp: item.kode_spp
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
                <a href="/registrasi">
                  <span className="las la-registrasi"></span>
                  <span>Registrasi</span>
                </a>
              </li>
              <li>
                <a href="/spp" className="active">
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
              {/* <img src="Image/logo3.png" style={{width:"40px",height:"40px"}}alt="" /> */}
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

            <div className="recent-grid">
              <div className="project ">
                <div className="card ">
                  <div className="card-header">
                    <Form className="d-flex">
                      <h3>Table Pembayaran SPP</h3>
                      <Col md={{ span: 3, offset: 5 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>

                    <ModalTambahSpp />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Nama Siswa</td>
                            <td>Kelas</td>
                            <td>Tanggal Bayar</td>
                            <td>Bulan </td>
                            <td>Ekstrakulikuler</td>
                            <td>Jumlah</td>
                            <td>Image</td>
                            <td>Status</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>


                          {this.state.laporanspp.map(laporanspp =>

                            <tr key={laporanspp.kode_spp}>
                              <td>{laporanspp.nama_siswa}</td>
                              <td>{laporanspp.kelas}</td>
                              <td>{laporanspp.tgl_bayar}</td>
                              <td>{laporanspp.bulan}</td>
                              <td>{laporanspp.ekstrakurikuler}</td>
                              <td>Rp. {laporanspp.jumlah}</td>
                              <td><a href={laporanspp.image}><img src={laporanspp.image} style={{width:"100px"}} /></a></td>
                              <td>{laporanspp.status}</td>
                              <td>
                                <div className="d-flex">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editSpp.bind(this, laporanspp)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteSpp.bind(this, laporanspp)}>
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
                  <div className="d-flex card-footer  justify-content-end">
                    <ReactToPrint
                      trigger={() => {
                        return <Button variant="dark" href="#">Cetak</Button>;
                      }}
                      content={() => this.componentRef}/>
                    <CetakSpp ref={el => (this.componentRef = el)} />
                  </div>
                </div>
              </div>
              <ModalEditSpp isShow={this.state.show} laporanspp={this.state.laporanspp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_spp