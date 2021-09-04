import React from "react";
import { Button, Form, Col } from 'react-bootstrap';
import axios from "axios";
import "./Admin_spp.css";
import swal from 'sweetalert';
import { PureComponent } from "react";
import ModalTambahInventaris from "../../../Molekul/Modal/ModalTambah/ModalTambahInventaris";
import ModalEdit from '../../../Molekul/Modal/ModalEdit/ModalEditInventaris'
import ReactToPrint from 'react-to-print';
import CetakInventaris from "../../Cetak/CetakInventaris";

const api = "http://localhost:5001";
class Admin_inventaris extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporaninventaris: [],
      username:'',
      response: '',
      display: 'none',
      show: ''
    };
  }


  editinventaris = (item) => {
    const data = this.state.laporaninventaris.filter(i => i.kode_inventaris == item.kode_inventaris)
    this.setState({
      laporaninventaris: data,
      show: 'show'
    })
  }

  componentDidMount() {
    this.setState({
      username: localStorage.getItem("username")
    })
    axios.get(api + "/getlaporaninventaris").then(res => {
      this.setState({
        laporaninventaris: res.data.values
      });
    });
  }

  deleteinventaris = (item) => {
    axios.post(api + "/deleteoneinventaris", {
      kode_inventaris: item.kode_inventaris

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
                <a href="/cicilan">
                  <span className="las la-cicilan"></span>
                  <span>Pembayaran Cicilan</span>
                </a>
              </li>
              <li>
                <a href="/inventaris" className="active">
                  <span className="las la-inventaris"></span>
                  <span>Inventaris Sekolah</span>
                </a>
              </li>
              <li>
                <a href="/bulanan">
                  <span className="las la-bulanan"></span>
                  <span>Laporan Bulanan</span>
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
              <h4>sign in : {this.state.username} 
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
                  <span>inventaris</span>
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
                      <h3>Table Inventaris Sekolah</h3>
                      <Col md={{ span: 3, offset: 6 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>
                    <ModalTambahInventaris />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                          <td>Kode Pembelian</td>
                            <td>Tanggal Pembelian</td>
                            <td>Nama Inventaris</td>
                            <td>Jumlah</td>
                            <td>Catatan</td>
                            <td>Tahun Ajaran</td>
                            <td>Wali Kelas</td>
                            <td>Bukti pembelian</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.laporaninventaris.map(laporaninventaris =>
                            <tr key={laporaninventaris.kode_inventaris}>
                               <td>{laporaninventaris.kode_inventaris}</td>
                              <td>{laporaninventaris.tgl_pembelian}</td>
                              <td>{laporaninventaris.keterangan}</td>
                              <td>{laporaninventaris.jumlah}</td>
                              <td>{laporaninventaris.catatan}</td>
                              <td>{laporaninventaris.tahun_ajaran}</td>
                              <td>{laporaninventaris.wali_kelas}</td>
                              <td>{laporaninventaris.image}</td>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editinventaris.bind(this, laporaninventaris)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deleteinventaris.bind(this, laporaninventaris)}>
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
                        return <Button variant="dark" href="#">Cetak</Button>; }}
                      content={() => this.componentRef} />
                    <CetakInventaris ref={el => (this.componentRef = el)} />
                  </div>
                </div>
              </div>
              <ModalEdit isShow={this.state.show} laporaninventaris={this.state.laporaninventaris} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_inventaris