import React, { Component } from "react";

import './App.css';


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
import Us from "./components/pages/Us";
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
          <Route exact path="/us" component={Us} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router >
    );
  }
}

export default App;
