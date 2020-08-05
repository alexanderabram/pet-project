import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPerson } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { GiWhiteCat } from "react-icons/gi";
import "./css/style.css";
import "./pages/signStyle.css";
import axios from "axios";

export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.signUp = this.signUp.bind(this);
    }
    signUp(e) {
        e.preventDefault();
        console.log("Sign Up");
        const user = {name:this.usernameRef.current.value, password:this.passwordRef.current.value};
        axios.post("/signup", user).then(() => {
            console.log("User created successfully");
        })
    }

    render() {
        return (
            <div className="container" id="logSign1">
                <div className="row">
                    <form className="col s12" >
                        <div>
                            <h3>Sign-up</h3><h5 id="free">It's Free!</h5>
                        </div>

                        <div className="row">
                            <div className="input-field col s6" id="newMemberName">
                                <input id="icon_prefix" type="text" className="validate" name="username" ref={this.usernameRef} />
                                <label for="icon_prefix" ><GiPerson size="30px" color="black" />  Create Your Unique Username</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="icon_telephone" type="tel" className="validate" name="password" ref={this.passwordRef} />
                                <label for="icon_telephone" ><GiPadlock size="30px" color="black" />  Create Your Password</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <a className="waves-effect waves-light btn-large" onClick={this.signUp}>Sign-up    <GiWhiteCat size="30px" color="black" /></a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}