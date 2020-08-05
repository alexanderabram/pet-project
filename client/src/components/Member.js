import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiRabbit } from "react-icons/gi";
import "./css/style.css";
import "./pages/MemberStyle.css";

export default class MembersForm extends Component {

    render() {
        return (
            <div className="container" id="member">
                <div className="row">
                    <div className="input-field col s6" className="center-align">
                        <a href="/post" className="waves-effect waves-light btn-large">Click To Post Your Pet    <GiRabbit size="30px" color="black" /></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col s8" id="container" className="center-align">
                        <h3>Here Are Our Pets On Parade</h3>
                    </div>
                </div>

            </div>
        )
    }
}