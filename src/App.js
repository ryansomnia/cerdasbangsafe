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
import galery from "./Component/page/MenuUtama/galery";
import Registrasi from "./Molekul/Form/pendaftaran";
import Pembayaranspp from "./Component/page/Pembayaran/pembayaranspp";
import User from "./Component/page/User/User";


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
              <Route path="/admin" component={Admin}/>
              <Route path="/galery" component={galery}/>
              <Route path="/pendaftaran" component={Registrasi}/>
              <Route  path="/pembayaranspp" component={Pembayaranspp}/>
              <Route path="/user" component={User}/>
          

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
