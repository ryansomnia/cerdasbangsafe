import React, { Component } from "react";
// import {Table, Container, Button, NavLink} from 'react-bootstrap';
import "./Admin.css";

export default class Admin extends Component {
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
                <a href="/Registrasi">
                  <span className="las la-registrasi"></span>
                  <span>Registrasi</span>
                </a>
              </li>
              <li>
                <a href="/spp">
                  <span className="las la-spp"></span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/inventaris">
                  <span className="las la-inventaris"></span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/bulanan">
                  <span className="las la-bulanan"></span>
                  <span>Dashboard</span>
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
              <h1>Tabel Master</h1>
              <table>
                <thead>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td><button>edit</button><button>delete</button></td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td><button>edit</button><button>delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      //             <Container>
      //                 <h2>Info Registrasi</h2>
      //                 <NavLink href="/tambahcomp"><Button color="success">Tambah Data</Button></NavLink>
      //                 <hr></hr>
      //             <Table striped bordered hover>
      //   <thead>
      //     <tr>
      //       <th>NIS</th>
      //       <th>Nama Siswa</th>
      //       <th>Status Pendaftaran</th>
      //       <th>Hasil</th>
      //       <th>Aksi</th>
      //     </tr>
      //   </thead>

      //   <tbody>
      //   <tr>
      //       <th>NIS</th>
      //       <th>Nama Siswa</th>
      //       <th>Status Pendaftaran</th>
      //       <th>Hasil</th>
      //       <th>Aksi</th>
      //     </tr>
      //       {this.state.regist.map(regist =>

      //     <tr key={regist.id_regist}>
      //         <td>{regist.nis}</td>
      //         <td>{regist.nama_siswa}</td>
      //          <td>{regist.status_pendaftaran}</td>
      //          <td>{regist.hasil}</td>

      //       <td>
      //  {/* <Link to={
      //   {
      //       partname: '/editdata',
      //       state: {
      //         nama_siswa : nama_siswa,
      //         jenis_kelamin : jenis_kelamin,
      //         agama: agama,
      //         tgl_lahir: tgl_lahir,
      //         tempat_lahir: tempat_lahir,
      //         alamat : alamat,
      //         no_hp :no_hp

      //       }
      //   }
      //     }> */}
      //   <button className = "btn-edit">Edit</button>

      //   <button className = "btn-delete" >Delete</button>

      //           </td>
      //     </tr>
      //       )}
      //   </tbody>
      // </Table>

      // </Container>
    );
  }
}
