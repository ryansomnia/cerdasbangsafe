import {Component } from "react";
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import home from "./Component/page/Home/home";
import login from "./Component/page/Login/login";
 import menuUtama from "./Component/page/MenuUtama/menuUtama"
// import bgimage from "./img/bgwebesparing.jpg"
 class App extends Component {
    render(){
          return (
            <Router>

            <Switch>
              <Route path="/home" component={home}/>
              <Route path="/login" component={login}/>
              <Route path="/menuUtama" component={menuUtama}/>
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