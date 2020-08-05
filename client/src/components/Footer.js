import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import "./css/style.css";

export default class Footer extends Component {

    render() {
        return (
                <footer className="page-footer teal">
                    {/* <div className="container"> */}
                        <div className="row" className="left-align">
                            <div className="container" >
                                <h5 className="white-text">Us</h5>
                                <div className="col s2">
                                We want to connect pet owners that are no longer able to care for their pets to qualified families<br></br>
                                or individuals looking to rescue. We want to ease the worry of finding a suitable family for a pet <br></br>
                                and provide a direct link between current and potential pet care-takers.
                                </div>

                            </div>

                            <div className="container"  id="usFoot">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="white-text" href="/us">About Us</a></li>
                                    <li><a className="white-text" href="/signup">Sign-Up</a></li>
                                    <li><a className="white-text" href="/">Home</a></li>
                                </ul>
                            </div>
                        </div>
                    {/* </div> */}
                    <div className="footer-copyright">
                        <div className="container">
                            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                        </div>
                    </div>
                </footer>
        )
    }
}