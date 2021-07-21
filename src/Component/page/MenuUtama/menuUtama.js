import { Component } from 'react'
import { Image } from 'react-bootstrap';
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class menuUtama extends Component {
    render() {
        return (
            <div>a
           <Header/>
           <Image src="holder.js/171x180" roundedCircle />
            foto Profil
 
            biodata
            status pendaftaran
            status SPP 
            status iuran kelas
          <Footer/>
          
        </div>
        )
    }
}