import React from "react";
import axios from "axios";
import { PureComponent } from "react";
import "./cetak.css";


const api = "http://localhost:5001";
export class CetakInventaris extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            laporaninventaris: [],
            response: '',
            display: 'none'
        };
    }
    componentDidMount() {
        axios.get(api + "/getlaporaninventaris").then(res => {
            this.setState({
                laporaninventaris: res.data.values
            });
        });
    }

    render() {
        return (
            <div className="yourClassName">
                 <div className="container ">
                     <div className="d-flex justify-content-center">
                     <h4>Laporan Inventaris Sekolah SDS Cerdas Bangsa</h4>
                     </div>
                     <p/>
                <table className="table table-bordered" width="100%">
                    <thead>
                        <tr>
                             <td>Kode Inventaris</td>
                            <td>Tanggal Pembelian</td>
                            <td>Keterangan</td>
                            <td>Jumlah</td>
                            <td>Catatan</td>
                            <td>Tahun Ajaran</td>
                            <td>Wali Kelas</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.laporaninventaris.map(laporaninventaris =>
                            <tr key={laporaninventaris.kode_inventaris}>
                                <td>{laporaninventaris.kode_inventaris}</td>
                                <td>{laporaninventaris.tgl_pembelian}</td>
                                <td>{laporaninventaris.keterangan}</td>
                                <td>{laporaninventaris.jumlah}</td>
                                <td>{laporaninventaris.catatan}</td>
                                <td>{laporaninventaris.tahun_ajaran}</td>
                                <td>{laporaninventaris.wali_kelas}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }

}
export default CetakInventaris