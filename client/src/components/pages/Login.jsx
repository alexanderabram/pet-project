import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import M from "materialize-css";
import '../../App.css';
import Navreg from "../Navreg";
import LoginForm from "../Login";
import Footer from "../Footer";



const Login = () => {
    return (
        <div>
            <Navreg />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;