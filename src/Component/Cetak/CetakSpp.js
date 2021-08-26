import React from "react";
import axios from "axios";
import { PureComponent } from "react";
import "./cetak.css";

const api = "http://localhost:5001";
export class CetakSpp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            laporanspp: [],
            response: '',
            display: 'none',
        };
    }
    componentDidMount() {
        axios.get(api + "/getLaporanSPP").then(res => {
            this.setState({
                laporanspp: res.data.values
            });
        });
    }
    render() {
        return (
            <div className="yourClassName">
                  <div className="container">
                  <div className="d-flex justify-content-center">
                     <h4>Laporan Pembayaran SPP SDS Cerdas Bangsa</h4>
                     </div>
                     <p/>
                <table  className="table table-bordered" width="100%">
                    <thead>
                        <tr>
                            <td>Nama Siswa</td>
                            <td>Kelas</td>
                            <td>Tanggal Bayar</td>
                            <td>Bulan </td>
                            <td>Ekstrakulikuler</td>
                            <td>Jumlah</td>
                            <td>Image</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.laporanspp.map(laporanspp =>
                            <tr key={laporanspp.kode_spp}>
                                <td>{laporanspp.nama_siswa}</td>
                                <td>{laporanspp.kelas}</td>
                                <td>{laporanspp.tgl_bayar}</td>
                                <td>{laporanspp.bulan}</td>
                                <td>{laporanspp.ekstrakurikuler}</td>
                                <td>Rp. {laporanspp.jumlah}</td>
                                <td>{laporanspp.image}</td>
                                <td>{laporanspp.status}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}
export default CetakSpp
