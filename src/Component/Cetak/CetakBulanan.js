import React from "react";
import axios from "axios";
import { PureComponent } from "react";
import "./cetak.css";

const api = "http://localhost:5001";
export class CetakBulanan extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      laporanbulanan: [],
      response: '',
      display: 'none',
      show: ''
    };
  }
  componentDidMount() {
    axios.get(api + "/getlaporanbulanan").then(res => {
      this.setState({
        laporanbulanan: res.data.values
      });
    });

  }
  render() {
    return (
      <div className="yourClassName">
         <div className="container fluid">
         <div className="d-flex justify-content-center">
                     <h4>Laporan Bulanan SDS Cerdas Bangsa</h4>
                     </div>
                     <p/>
        <table  className="table table-bordered" width="80%">
          <thead>
            <tr>
              <td>Kode Laporan</td>
              <td>Tanggal</td>
              <td>Keterangan</td>
              <td>Debit</td>
              <td>Kredit</td>
              <td>Saldo</td>
              <td>Jumlah</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {this.state.laporanbulanan.map(laporanbulanan =>
              <tr key={laporanbulanan.kode_laporan}>
                <td>{laporanbulanan.kode_laporan}</td>
                <td>{laporanbulanan.tgl}</td>
                <td>{laporanbulanan.keterangan}</td>
                <td>Rp. {laporanbulanan.debit}</td>
                <td>Rp. {laporanbulanan.kredit}</td>
                <td>Rp. {laporanbulanan.saldo}</td>
                <td>Rp. {laporanbulanan.jumlah}</td>
                <td>{laporanbulanan.status}</td>

              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default CetakBulanan
