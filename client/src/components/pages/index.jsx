import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../App.css';
import Nav from "../Nav";
import Footer from "../Footer";
import Parallax from "../Parallax";




const Homepage = () => {

    return (
        <div className="App" id="app">
            <Nav />
            <Parallax />
            <Footer />
        </div>
    );
};

export default Homepage;
