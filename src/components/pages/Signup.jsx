import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import M from "materialize-css";
import '../../../src/App.css';
import Navreg from "../Navreg";
import SignupForm from "../Signup";
import Footer from "../Footer";


const Signup = () => {
    return (
        <div>
            <Navreg />
            <SignupForm />
            <Footer />
        </div>
    );
};

export default Signup;