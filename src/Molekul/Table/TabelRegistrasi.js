import React, { Component } from "react";
import axios from 'axios'
// import qs from 'querystring'
import {Table, Container, Button, NavLink} from 'react-bootstrap';
// import { Link } from "react-router-dom";

import "./TabelRegistrasi.css";
import { withRouter } from "react-router";
// const api ='http://192.168.1.34:5001'
const api = 'http://localhost:5001'
   

 class TabelRegistrasi extends Component {
    constructor(props){
        super(props)
        this.state = {
            regist : [],
            response : '',
            display : 'none'

        }
    }
    componentDidMount(){
        axios.get(api+'/getDataRegist').then(res=>{
            this.setState({
                regist: res.data.values
            })
        })
    }
    render() {
        return (
            <Container>
                <h2>Info Registrasi</h2>
                <NavLink href="/tambahcomp"><Button color="success">Tambah Data</Button></NavLink>
                <hr></hr>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>NIS</th>
      <th>Nama Siswa</th>
      <th>Status Pendaftaran</th>
      <th>Hasil</th>
      <th>Aksi</th>
    </tr>
  </thead>

  <tbody>
      {this.state.regist.map(regist =>
      
    <tr key={regist.id_regist}>
        <td>{regist.nis}</td>
        <td>{regist.nama_siswa}</td>
         <td>{regist.status_pendaftaran}</td>
         <td>{regist.hasil}</td>
        
      <td>
          {/* <Link to={
              {
                  partname: '/editdata',
                  state: {
                    nama_siswa : nama_siswa,
                    jenis_kelamin : jenis_kelamin,
                    agama: agama,
                    tgl_lahir: tgl_lahir,
                    tempat_lahir: tempat_lahir,
                    alamat : alamat,
                    no_hp :no_hp

                  }
              }
          }> */}
          <Button>Edit</Button>
          {/* </Link> */}
          </td>
    </tr>
      )}
  </tbody>
</Table>
<Button href="/admin">Link</Button>
<br></br>

</Container>



        );
    }
}
export default withRouter (TabelRegistrasi)