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
import EditComp from "./Molekul/Form/EditComp";
import TambahComp from "./Molekul/Form/TambahComp";
import Admin from "./Component/page/Admin/Admin";
import galery from "./Component/page/MenuUtama/galery";
import Registrasi from "./Molekul/Form/pendaftaran";
import Pembayaranspp from "./Component/page/Pembayaran/pembayaranspp";
import User from "./Component/page/User/User";
import Admin_registrasi from "./Component/page/Admin/Admin_registrasi";
import Admin_spp from "./Component/page/Admin/Admin_spp";
import Admin_cicilan from "./Component/page/Admin/Admin_cicilan";
import Admin_inventaris from "./Component/page/Admin/Admin_inventaris";
import Laporan_bulanan from "./Component/page/Admin/Laporan_bulanan";
import profil from "./Component/page/MenuUtama/Profil";
import visi from "./Component/page/MenuUtama/Visi";
import strukturorganisasi from "./Component/page/MenuUtama/Struktur";
import bayarspp from "./Component/page/User/Bayarspp";



 // import bgimage from "./img/bgwebesparing.jpg"
 class App extends Component {
    render(){
          return (
            <Router>

            <Switch>
                   {/* -----Menu Header---- */}
              <Route path="/home" component={home}/>
              <Route path="/login" component={login}/>
              <Route path="/contactUs" component={contactUs} />
              <Route path="/tambahcomp" component={TambahComp}/>
              <Route path="/editcomp" component={EditComp}/>
              

    {/* ---Menu Utama--- */}
<Route path="/galery" component={galery}/>
<Route path="/profil" component={profil}/>
<Route path="/visi" component={visi}/>
<Route path="/strukturorganisasi" component={strukturorganisasi}/>
              
              <Route path="/pendaftaran" component={Registrasi}/>
              <Route  path="/pembayaranspp" component={Pembayaranspp}/>
              

       {/* ----Menu Admin--- */}
<Route path="/master" component={Admin}/>
<Route path="/registrasi" component={Admin_registrasi}/>
<Route path="/spp" component={Admin_spp}/>
<Route path="/cicilan" component={Admin_cicilan}/>
<Route path="/inventaris" component={Admin_inventaris}/>
<Route path="/bulanan" component={Laporan_bulanan}/>
          
          {/* ----Menu User--- */}
<Route path="/user" component={User}/>
<Route path="/bayarspp" component={bayarspp}/>

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
