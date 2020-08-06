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

const Login = (props) => {
    const [signIn, setSignIn] = useState(false); 
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const [context, setContext] = useContext(PetContext);
    console.log(context);
    useEffect(() => {
        setContext({user: {name: "Alex", password: 1234}});
    },[]) 
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Log In");
        const user = { name: userNameRef.current.value, password: passwordRef.current.value };
        axios.post("/api/login", user).then(() => {
            console.log("Logged in Succesfully");
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
                        <h3>Log In</h3>
                    </div>


                    <div className="row">
                        <div className="input-field col s6" id="newMemberName">
                            <input id="icon_prefix" type="text" className="validate" name="username" ref={userNameRef} />
                            <label for="icon_prefix" ><GiPerson size="30px" color="black" /> Username </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="icon_telephone" type="tel" className="validate" name="password" ref={passwordRef} />
                            <label for="icon_telephone" ><GiPadlock size="30px" color="black" /> Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <a className="waves-effect waves-light btn-large" onClick={handleLogin}>Log In<GiWhiteCat size="30px" color="black" /></a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;