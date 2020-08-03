import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../../src/App.css';
import Navreg from "../Navreg";
import Footer from "../Footer";
import Listpet from "../PostPet";




const Postpet = () => {

    return (
        <div className="App" id="app">
            <Navreg />
            <Listpet />
            <Footer />
        </div>
    );
};

export default Postpet;