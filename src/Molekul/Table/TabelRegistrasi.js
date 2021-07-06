import React, { Component } from "react";
import axios from 'axios'
import {Table, Container, Button, NavLink} from 'react-bootstrap';

import "./TabelRegistrasi.css";

const api ='http://192.168.1.34:5001'

   

export default class TabelRegistrasi extends Component {
    constructor(props){
        super(props)
        this.state = {
            regist : [],
            response : '',
            display : 'none'

        }
    }
    componentDidMount(){
        // axios.get(api+'/getDataRegis').then(res=>{
        //     this.setState({
        //         regist: res.data.values
        //     })
        // })
    }
    render() {
        return (
            <Container>
                <h2>Info Registrasi</h2>
                <NavLink href="../../Molekul/Table/TambahComp"><Button color="success">Tambah Data</Button></NavLink>
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
        
      <td><Button>Edit</Button>   <Button className='btn-danger'>Hapus</Button></td>
    </tr>
      )}
  </tbody>
</Table>
</Container>

        );
    }
}
// export default TabelRegistrasi;