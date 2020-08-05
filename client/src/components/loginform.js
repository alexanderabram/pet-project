import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPerson } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { GiWhiteCat } from "react-icons/gi";
import "./css/style.css";
import "./pages/logStyle.css";

export default class LoginForm extends Component {

    componentDidUpdate() {
        let Login = document.querySelectorAll(".Login");
        M.Login.init(Login, {});
    }

    render() {
        return (
            <div className="container" id="logSign">
                <div className="row">
                    <form className="col s12" >
                        <div>
                            <h2 id="mem">Member Login</h2>
                        </div>

                        <div className="row">
                            <div className="input-field col s6" id="memberUsername">
                                <input id="icon_prefix"  type="text" className="validate" />
                                <label for="icon_prefix"><GiPerson size="30px" color="black" />Username</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="icon_telephone"  type="tel" className="validate" />
                                <label for="icon_telephone"><GiPadlock size="30px" color="black" />Password</label>
                            </div>
                        </div>

                        

                        <div className="row">
                            <div className="input-field col s6">
                                <a className="waves-effect waves-light btn-large">login    <GiWhiteCat size="30px" color="black" /></a>
                                <p >Or sign-up <a href="/signup">HERE</a></p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}