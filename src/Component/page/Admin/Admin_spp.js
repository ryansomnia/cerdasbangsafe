import React from "react";
import { Button, NavLink} from 'react-bootstrap';
import axios from "axios";
import "./Admin_spp.css";
import { PureComponent } from "react";
import ModalEdit from '../../../Molekul/Modal/ModalEditSpp'

const api = "http://localhost:5001";
 class Admin_spp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      laporanspp: [],
      response: '',
      display: 'none',
      show:''
    };
   
  }


    editSpp =(item)=>{
      const data = this.state.laporanspp.filter(i => i.kode_spp !==item.kode_spp)
      this.setState({
        laporanspp:data,
        show:'show'
        
      })
      
      console.log('====================================');
      console.log(item);
      console.log('====================================');
   
    }

  componentDidMount() {
    axios.get(api + "/getlaporanspp").then(res => {
      this.setState({
        laporanspp: res.data.values
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

            <div className="recent-grid">

              <div className="project">
                <div className="card">
                  <div className="card-header">
                    <h3>Table Pembayaran SPP</h3>
                    <NavLink href="/tambahspp"><Button color="success">Tambah Data</Button></NavLink>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                          <td>Kode SPP</td>
                            <td>Nama Siswa</td>
                            <td>Kelas</td>
                            <td>Tanggal Bayar</td>
                            <td>Bulan </td>
                            <td>Ekstrakulikuler</td>
                            <td>Status</td>
                            <td>Image</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>


                          {this.state.laporanspp.map(laporanspp => 
                         
                            <tr key={laporanspp.kode_spp}>
                              <td>{laporanspp.kode_spp}</td>
                               <td>{laporanspp.nama_siswa}</td>
                              <td>{laporanspp.kelas}</td>
                              <td>{laporanspp.tgl_bayar}</td>
                              <td>{laporanspp.bulan}</td>
                              <td>{laporanspp.ekstrakurikuler}</td>
                              <td>{laporanspp.jumlah}</td>
                              <td>{laporanspp.status}</td>
                              <td>{laporanspp.image}</td>
                              <td>
                              <div className="justify-content-center">
                                          <Button variant="outline-success" onClick={this.editSpp.bind(this,laporanspp)}>
                                            Edit
                                          </Button>{' '}
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
              <ModalEdit isShow={this.state.show} bulanan={this.state.bulanan}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin_spp