import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import M from "materialize-css";
import './App.css';
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import Parallax from "./components/Parallax";
import "./components/css/style.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // Link
} from "react-router-dom";

// Pages
import Homepage from "./components/pages/index";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Postpet from "./components/pages/PostPet";
import Members from "./components/pages/Member";
import NotFound from "./components/pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/post" component={Postpet} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router >
    );
  }
}

export default App;
