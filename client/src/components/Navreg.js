import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPawHeart } from "react-icons/gi";
import { GiHorizontalFlip } from "react-icons/gi";
import { GiGhostAlly } from "react-icons/gi";
import "./css/style.css";

export default class Navreg extends Component {

    componentDidUpdate() {
        let Navreg = document.querySelectorAll(".Navreg");
        M.Navreg.init(Navreg, {});
    }

    render() {
        return (
            <nav className="teal" role="navigation">

                        <div className="nav-wrapper container" >
                            <a id="logo-container" ><GiPawHeart size="60px" color="black" /><GiHorizontalFlip size="60px" color="black" /><GiGhostAlly size="60px" color="black" /></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Home</a></li>
                            </ul>

                            <ul id="nav-mobile" className="sidenav">
                                <li><a href="#">Sign-Up To List Your Pet</a></li>
                            </ul>
                            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                    </nav>
        )
    }
}