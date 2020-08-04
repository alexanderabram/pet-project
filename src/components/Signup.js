import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPerson } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { GiWhiteCat } from "react-icons/gi";
import "./css/style.css";
import "./pages/signStyle.css";

export default class SignupForm extends Component {

    componentDidUpdate() {
        let Signup = document.querySelectorAll(".Signup");
        M.Signup.init(Signup, {});
    }

    render() {
        return (
            <div class="container" id="logSign1">
                <div class="row">
                    <form class="col s12" >
                        <div>
                            <h3>Sign-up</h3><h5 id="free">It's Free!</h5>
                        </div>

                        <div class="row">
                            <div class="input-field col s6" id="newMemberName">
                                <input id="icon_prefix" type="text" class="validate" />
                                <label for="icon_prefix" ><GiPerson size="30px" color="black" />  Create Your Unique Username</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <input id="icon_telephone" type="tel" class="validate" />
                                <label for="icon_telephone" ><GiPadlock size="30px" color="black" />  Create Your Password</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <a class="waves-effect waves-light btn-large">Sign-up    <GiWhiteCat size="30px" color="black" /></a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}