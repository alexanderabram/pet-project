import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../App.css';
import Navreg from "../Navreg";
import Footer from "../Footer";
import Members from "../Member";




const Member = () => {

    return (
        <div className="App" id="app">
            <Navreg />
            <Members />
            <Footer />
        </div>
    );
};

export default Member;