import React from "react";
import axios from "axios";
import { PureComponent } from "react";
import "./cetak.css";


const api = "http://localhost:5001";
export class CetakKelas extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kelas: [],
            response: '',
            display: 'none',
        };
    }

    componentDidMount() {
        axios.get(api + "/getkelas").then(res => {
            this.setState({
                kelas: res.data.values
            });
        });
    }

    render() {
        return (
            <div className="yourClassName">
                 <div className="container">
                 <div className="d-flex justify-content-center">
                     <h4>Laporan Data Kelas SDS Cerdas Bangsa</h4>
                     </div>
                     <p/>
                <table className="table table-bordered" width="100%">
                    <thead>
                        <tr>
                            <td>Nama Kelas</td>
                            <td>Nama Guru</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.kelas.map(kelas =>
                            <tr key={kelas.nama_kelas}>
                                <td>{kelas.nama_kelas}</td>
                                <td>{kelas.nama_guru}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

export default CetakKelas