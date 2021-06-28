import {Component } from "react";
 import Header from "../src/Component/Header/Header"
 import Body from "../src/Component/Body/Body"
 import Footer from "../src/Component/Footer/Footer"
 import 'bootstrap/dist/css/bootstrap.min.css';
// import bgimage from "./img/bgwebesparing.jpg"
 class App extends Component {
    render(){
          return (
            <div>
          <Header/>
          <Body/>
          <Footer/>
          </div>
          );
    }
}

// const divStyle = {
//       // backgroundImage: `url(${bgimage})`
//     };
export default App