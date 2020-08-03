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
                <footer className="page-footer teal">
                    <div className="container">
                        <div className="row">
                            <div className="col l8 s12">
                                <h5 className="white-text">Us</h5>
                                <p className="grey-text text-lighten-4">We want to connect pet owners that are no longer able to care
                                for their pets to qualified families or individuals looking to rescue. We want to ease the worry of
                                finding a suitable family for a pet and provide a direct link between current and potential pet care-takers.</p>


                            </div>

                            <div className="container">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="white-text" href="/us">About Us</a></li>
                                    <li><a className="white-text" href="/signup">Sign-Up</a></li>
                                    <li><a className="white-text" href="/">Home</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                        </div>
                    </div>
                </footer>
        )
    }
}