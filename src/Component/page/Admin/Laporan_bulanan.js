import React from "react";
import { Button, Form, Col } from 'react-bootstrap';
import axios from "axios";
import "./Laporan_bulanan.css";
import swal from 'sweetalert';
import { PureComponent } from "react";
import ModalEdit from '../../../Molekul/Modal/ModalEdit/ModalEditBulanan'
import ModalTambahLaporan from "../../../Molekul/Modal/ModalTambah/ModalTambahLaporan";


const api = "http://localhost:5001";
class laporan_bulanan extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporanbulanan: [],
      response: '',
      display: 'none',
      show: ''
    };

  }


  editbulanan = (item) => {
    const data = this.state.laporanbulanan.filter(i => i.kode_laporan == item.kode_laporan)
    this.setState({
      laporanbulanan: data,
      show: 'show'

    })

    console.log('====================================');
    console.log(item);
    console.log('====================================');

  }

  componentDidMount() {
    axios.get(api + "/getlaporanbulanan").then(res => {
      this.setState({
        laporanbulanan: res.data.values
      });
    });

  }
  deletelaporan = (item) => {
    console.log('masuk')

    console.log('====================================');
    console.log(item);
    console.log('====================================');

    axios.post(api + "/deleteonebulanan", {
      kode_laporan: item.kode_laporan

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
                <a href="/cicilan" >
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
                <a href="/bulanan" className="active">
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
              <img src="Image/logo3.png" width="40px" height="40px" alt="" />
              <div>
                <h4>John Cena</h4>
                <small>Super Admin</small>
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
                      <h3>Table Laporan Bulanan</h3>
                      <Col md={{ span: 3, offset: 6 }} >
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                      </Col>
                    </Form>

                    <ModalTambahLaporan />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Laporan</td>
                            <td>Tanggal</td>
                            <td>Keterangan</td>
                            <td>Debit</td>
                            <td>Kredit</td>
                            <td>Saldo</td>
                            <td>Jumlah</td>
                            <td>Status</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>


                          {this.state.laporanbulanan.map(laporanbulanan =>

                            <tr key={laporanbulanan.kode_laporan}>
                              <td>{laporanbulanan.kode_laporan}</td>
                              <td>{laporanbulanan.tgl}</td>
                              <td>{laporanbulanan.keterangan}</td>
                              <td>Rp. {laporanbulanan.debit}</td>
                              <td>Rp. {laporanbulanan.kredit}</td>
                              <td>Rp. {laporanbulanan.saldo}</td>
                              <td>Rp. {laporanbulanan.jumlah}</td>
                              <td>{laporanbulanan.status}</td>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <Button className="btn-space" variant="outline-success" onClick={this.editbulanan.bind(this, laporanbulanan)}>
                                    Edit
                                  </Button>
                                  <Button variant="outline-danger" onClick={this.deletelaporan.bind(this, laporanbulanan)}>
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
              <ModalEdit isShow={this.state.show} laporanbulanan={this.state.laporanbulanan} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default laporan_bulanan