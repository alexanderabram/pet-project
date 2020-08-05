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

    render() {
        return (
            <div class="container" id="logSign">
                <div class="row">
                    <form class="col s12" >
                        <div>
                            <h2 id="mem">Member Login</h2>
                        </div>

                        <div class="row">
                            <div class="input-field col s6" id="memberUsername">
                                <input id="icon_prefix"  type="text" class="validate" />
                                <label for="icon_prefix"><GiPerson size="30px" color="black" />Username</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <input id="icon_telephone"  type="tel" class="validate" />
                                <label for="icon_telephone"><GiPadlock size="30px" color="black" />Password</label>
                            </div>
                        </div>

                        

                        <div class="row">
                            <div class="input-field col s6">
                                <a class="waves-effect waves-light btn-large">login    <GiWhiteCat size="30px" color="black" /></a>
                                <p >Or sign-up <a href="/signup">HERE</a></p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}