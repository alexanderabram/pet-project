import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../App.css';
import Navreg from "../Navreg";
import Footer from "../Footer";
import Us from "../Us";




const UsForm = () => {

    return (
        <div className="App" id="app">
            <Navreg />
            <Us />
            <Footer />
        </div>
    );
};

export default UsForm;