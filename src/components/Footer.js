import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import "./css/style.css";

export default class Footer extends Component {

    componentDidUpdate() {
        let Footer = document.querySelectorAll(".Footer");
        M.Footer.init(Footer, {});
    }

    render() {
        return (
                <footer class="page-footer teal">
                    <div class="container">
                        <div class="row">
                            <div class="col l8 s12">
                                <h5 class="white-text">Us</h5>
                                <p class="grey-text text-lighten-4">We want to connect pet owners that are no longer able to care
                                for their pets to qualified families or individuals looking to rescue. We want to ease the worry of
                                finding a suitable family for a pet and provide a direct link between current and potential pet care-takers.</p>


                            </div>

                            <div class="col l3">
                                <h5 class="white-text">Links</h5>
                                <ul>
                                    <li><a class="white-text" href="https://www.petsmart.com/" target="_blamk">Find A Friend</a></li>
                                    <li><a class="white-text" href="/signup">Sign-Up</a></li>
                                    <li><a class="white-text" href="/">Home</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                        </div>
                    </div>
                </footer>
        )
    }
}