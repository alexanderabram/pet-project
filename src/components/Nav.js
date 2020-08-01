import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPawHeart } from "react-icons/gi";
import { GiHorizontalFlip } from "react-icons/gi";
import { GiGhostAlly } from "react-icons/gi";
import "./css/style.css";

export default class Nav extends Component {

    componentDidUpdate() {
        let Nav = document.querySelectorAll(".Nav");
        M.Nav.init(Nav, {});
    }

    render() {
        return (

            <nav class="teal" role="navigation">

                <div class="nav-wrapper container" >
                    <a id="logo-container" ><GiPawHeart size="60px" color="black" /><GiHorizontalFlip size="60px" color="black" /><GiGhostAlly size="60px" color="black" /></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="/signup">Sign-Up To List Your Pet</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Sign-Up To List Your Pet</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        )
    }
}