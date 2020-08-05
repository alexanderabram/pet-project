import React, { Component, useState } from "react";

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
import PetContext from "./utils/Context";

const App = () => {
  const [context, setContext] = useState({});
  return (
    <PetContext.Provider value={[ context, setContext ]}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />         
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/post" component={Postpet} />s
        <Route exact path="/members" component={Members} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router >
    </PetContext.Provider>
  );
}

export default App;
