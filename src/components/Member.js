import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPerson } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { GiRabbit } from "react-icons/gi";
import "./css/style.css";
import "./pages/MemberStyle.css";

export default class MembersForm extends Component {

    componentDidUpdate() {
        let Members = document.querySelectorAll(".Members");
        M.Members.init(Members, {});
    }

    render() {
        return (
            <div class="container" id="member">
                <div class="row">
                    <div class="input-field col s6">
                        <a href="/post" class="waves-effect waves-light btn-large">Click To Post Your Pet    <GiRabbit size="30px" color="black" /></a>
                    </div>
                </div>

                <div class="row">
                    <div className="col s8" id="container">
                        <h3>Here Are Our Pets On Parade</h3>
                    </div>
                </div>

            </div>
        )
    }
}