import React, { useRef, useContext, useEffect, useState } from "react";
import PetContext from "../utils/Context";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPerson } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { GiWhiteCat } from "react-icons/gi";
import "./css/style.css";
import "./pages/signStyle.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const SignupForm = (props) => {
    const [signIn, setSignIn] = useState(false); 
    const newUserRef = useRef(null);
    const newPasswordRef = useRef(null);
    const [context, setContext] = useContext(PetContext);
    console.log(context);
    useEffect(() => {
        setContext({ user: { name: "Alex", password: 1234 } });
    }, [])
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Sign Up");
        const user = { name: newUserRef.current.value, password: newPasswordRef.current.value };
        axios.post("/api/signup", user).then(() => {
            console.log("User created successfully");
            setSignIn(true);
        });
    }
    if(signIn) {
        return <Redirect to="/members" />
    }
    return (
        <div className="container" id="logSign1">
            <div className="row">
                <form className="col s12" >
                    <div>
                        <h3>Sign-up</h3><h5 id="free">It's Free!</h5>
                    </div>

                    <div className="row">
                        <div className="input-field col s6" id="newMemberName">
                            <input id="icon_prefix" type="text" className="validate" name="username" ref={newUserRef} />
                            <label for="icon_prefix" ><GiPerson size="30px" color="black" />  Create Your Unique Username</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="icon_telephone" type="tel" className="validate" name="password" ref={newPasswordRef} />
                            <label for="icon_telephone" ><GiPadlock size="30px" color="black" />  Create Your Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <a className="waves-effect waves-light btn-large" onClick={handleSignUp}>Sign-up    <GiWhiteCat size="30px" color="black" /></a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignupForm;