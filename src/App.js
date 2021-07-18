import {Component } from "react";
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import contactUs from "./Component/page/ContactUs/contactus";
import home from "./Component/page/Home/home";
import login from "./Component/page/Login/login";
import menuUtama from "./Component/page/MenuUtama/menuUtama"
import profil from "./Component/page/Profil/profil";
import EditComp from "./Molekul/Form/EditComp";
import TambahComp from "./Molekul/Form/TambahComp";
import Admin from "./Component/page/Admin/Admin";
 // import bgimage from "./img/bgwebesparing.jpg"
 class App extends Component {
    render(){
          return (
            <Router>

            <Switch>
              
              <Route path="/home" component={home}/>
              <Route path="/login" component={login}/>
              <Route path="/menuUtama" component={menuUtama}/>
              <Route path="/profil" component={profil} />
              <Route path="/contactUs" component={contactUs} />
              <Route path="/tambahcomp" component={TambahComp}/>
              <Route path="/editcomp" component={EditComp}/>
<<<<<<< HEAD
              <Route path="/admin" component={Admin}/>
=======
           
             
>>>>>>> bfcef4131e4d00f455590bc3f29e6b555d809149
              
              <Redirect from="/" to="/home"/>
            </Switch>
            </Router>
          );
    }
}

// const divStyle = {
//       // backgroundImage: `url(${bgimage})`
//     };
export default App
