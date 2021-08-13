import React from "react";
import { Button} from 'react-bootstrap';
import axios from "axios";
import "./Admin_cicilan.css";
import { PureComponent } from "react";
import ModalTambahCicilan from "../../../Molekul/Modal/ModalTambah/ModalTambahCicilan";
import ModalEdit from '../../../Molekul/Modal/ModalEdit/ModalEditCicilan'


const api = "http://localhost:5001";
 class Admin_cicilan extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporancicilan: [],
      response: '',
      display: 'none',
      show:''
    };
   
  }


    editcicilan =(item)=>{
      const data = this.state.laporancicilan.filter(i => i.kode_cicilan !==item.kode_cicilan)
      this.setState({
        laporancicilan:data,
        show:'show'
        
      })
      
      console.log('====================================');
      console.log(item);
      console.log('====================================');
   
    }

  componentDidMount() {
    axios.get(api + "/getlaporancicilan").then(res => {
      this.setState({
        laporancicilan: res.data.values
      });
    });
    
  }

  deletecicilan =(item)=>{
    console.log('masuk')
  
    console.log('====================================');
    console.log(item);
    console.log('====================================');
   
    axios.post(api + "/deleteonecicilan", {
      kode_cicilan:item.kode_cicilan
      
    })
    .then(function (response) {
      console.log(response);
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

            <div className="search-wrapper">
              <span className="las la-search"></span>
              <input type="search" placeholder="search here"></input>
            </div>

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

            {/* Tabel Cicilan Buku */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <h3>Table Pembayaran Cicilan Buku</h3>
                   <ModalTambahCicilan />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Cicilan</td>
                            <td>Student Account</td>
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


                          {this.state.laporancicilan.map(laporancicilan => 
                         
                            <tr key={laporancicilan.kode_cicilan}>
                              <td>{laporancicilan.kode_cicilan}</td>
                              <td>{laporancicilan.student_account}</td>
                              <td>{laporancicilan.nis}</td>
                              <td>{laporancicilan.nisn}</td>
                              <td>{laporancicilan.nama}</td>
                              <td>{laporancicilan.tgl_bayar}</td>
                              <td>{laporancicilan.buku}</td>
                              <td>{laporancicilan.debit}</td>
                              <td>{laporancicilan.kredit}</td>
                              <td>{laporancicilan.image}</td>
                              <td>
                              <div className="d-flex ">
                                          <Button className="btn-space" variant="outline-success" onClick={this.editcicilan.bind(this,laporancicilan)}>
                                            Edit
                                          </Button>
                                          <Button variant="outline-danger" onClick={this.deletecicilan.bind(this,laporancicilan)}>
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
            </div>

            {/* Tabel Cicilan Seragam */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <h3>Table Pembayaran Cicilan Seragam</h3>
                    <ModalTambahCicilan />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Cicilan</td>
                            <td>Student Account</td>
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


                          {this.state.laporancicilan.map(laporancicilan => 
                         
                            <tr key={laporancicilan.kode_cicilan}>
                               <td>{laporancicilan.kode_cicilan}</td>
                              <td>{laporancicilan.student_account}</td>
                              <td>{laporancicilan.nis}</td>
                              <td>{laporancicilan.nisn}</td>
                              <td>{laporancicilan.nama}</td>
                              <td>{laporancicilan.tgl_bayar}</td>
                              <td>{laporancicilan.seragam}</td>
                              <td>{laporancicilan.debit}</td>
                              <td>{laporancicilan.kredit}</td>
                              <td>{laporancicilan.image}</td>
                              <td>
                              <div className="d-flex ">
                                          <Button variant="outline-success" onClick={this.editcicilan.bind(this,laporancicilan)}>
                                            Edit
                                          </Button>
                                          <Button variant="outline-danger">
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
            </div>

                            {/* Tabel Cicilan Uang Pangkal */}
            <div className="recent-grid">
              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <h3>Table Pembayaran Cicilan Uang Pangkal</h3>
                    <ModalTambahCicilan />
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Kode Cicilan</td>
                            <td>Student Account</td>
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
                              <td>{laporancicilan.student_account}</td>
                              <td>{laporancicilan.nis}</td>
                              <td>{laporancicilan.nisn}</td>
                              <td>{laporancicilan.nama}</td>
                              <td>{laporancicilan.tgl_bayar}</td>
                              <td>{laporancicilan.uang_pangkal}</td>
                              <td>{laporancicilan.debit}</td>
                              <td>{laporancicilan.kredit}</td>
                              <td>{laporancicilan.image}</td>
                              <td>
                              <div className="d-flex ">
                                          <Button variant="outline-success" onClick={this.editcicilan.bind(this,laporancicilan)}>
                                            Edit
                                          </Button>
                                          <Button variant="outline-danger">
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
              <ModalEdit isShow={this.state.show} laporancicilan={this.state.laporancicilan}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_cicilan