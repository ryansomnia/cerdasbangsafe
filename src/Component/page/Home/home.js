import {Component } from "react";
import Body from "../../Body/Body";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class home extends Component {
    render() {
        return (
            <div >
          <Header/>
          <Body/>
          <Footer/>
    
            </div>


        );
    }
}