import React from "react";
// import {Table,} from 'react-bootstrap';
import axios from "axios";
import "./Admin_registrasi.css";
import { PureComponent } from "react";


const api = "http://localhost:5001";
 class Admin_registrasi extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      kelas: [],
      response: '',
      display: 'none',
    };
    
    
    
  }
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     guru: [],
  //     response: '',
  //     display: 'none',
  //   };
    
    
    
  // }

  componentDidMount() {
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
                    <h3>Table Pendaftaran Siswa</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Nama Ku</td>
                            <td>Alamat</td>
                            <td>Nama Orang Tua</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
 

                          {this.state.kelas.map(kelas => 
                         
                            <tr key={kelas.nama_kelas}>
                              <td>{kelas.nama_guru}</td>
                              <td>{kelas.kode_kelas}</td>
                              <td>{kelas.nama_guru}</td>
                              <td>
                                  Edit | Hapus
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
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_registrasi