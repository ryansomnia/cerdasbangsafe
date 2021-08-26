import React from "react";
import axios from "axios";
import { PureComponent } from "react";
import "./cetak.css";


const api = "http://localhost:5001";
export class CetakGuru extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            guru: [],
            response: '',
            display: 'none'
        };
    }

    componentDidMount() {
        axios.get(api + "/getguru").then(res => {
            this.setState({
                guru: res.data.values
            });
        });
    }

    render() {
        return (
            <div className="yourClassName">
                <div className="container">
                <div className="d-flex justify-content-center">
                     <h4>Laporan Data Guru SDS Cerdas Bangsa</h4>
                     </div>
                     <p/>
                    <table  className="table table-bordered" width="100%">
                        <thead>
                            <tr>
                                <td>Nama Guru</td>
                                <td>Jenis Kelamin</td>
                                <td>NO NUPTK</td>
                                <td>Tempat Lahir</td>
                                <td>Tgl Lahir</td>
                                <td>Pendidikan</td>
                                <td>Lulusan</td>
                                <td>Jabatan</td>
                                <td>Agama</td>
                                <td>Status Karyawan</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.guru.map(guru =>
                                <tr key={guru.id_guru}>
                                    <td>{guru.nama_guru}</td>
                                    <td>{guru.jenis_kelamin}</td>
                                    <td>{guru.no_nuptk}</td>
                                    <td>{guru.tempat_lahir}</td>
                                    <td>{guru.tgl_lahir}</td>
                                    <td>{guru.pendidikan}</td>
                                    <td>{guru.lulusan}</td>
                                    <td>{guru.jabatan}</td>
                                    <td>{guru.status_karyawan}</td>
                                    <td>{guru.agama}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default CetakGuru