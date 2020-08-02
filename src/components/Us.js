import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import placeholder1 from "../images/placeholder1.jpg";
import Ray from "../images/Ray.jpg";

import "./css/style.css";
import "./pages/UsStyle.css";

export default class Us extends Component {

    componentDidUpdate() {
        let Us = document.querySelectorAll(".Us");
        M.Us.init(Us, {});
    }

    render() {
        return (
            <div className="row" id="group">
                <div className="col s12">
                    <div className="col s12" id="sect">
                        <h3><b>This is Us</b></h3>
                </div>
                    <div className="container" id="ourSection">
                        <div className="col s12">

                            <div className="row">
                                <div className="col s6">
                                    <div id="Alex">
                                        This is Alex's info
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Alex">
                                        <img id="headShot" src={placeholder1} alt="Alex" />
                                        This is Alex's Picture
                                    </div>
                                </div>
                            </div>

<p>-----------------------------------------------------------------------------------------------------------------------------------</p>
                            <div className="row">
                                <div className="col s6">
                                    <div id="Grigore">
                                        This is Grigore's Picture
                                        <img id="headShot" src={placeholder1} alt="Grigore" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Grigore">
                                        This is Grigore's Info
                                    </div>
                                </div>
                            </div>

<p>-----------------------------------------------------------------------------------------------------------------------------------</p>
                            <div className="row">
                                <div className="col s6">
                                    <div id="Ray">
                                        Ray has spent the last 11 years (less 1 in the middle doing sales) technical
                                        training. His new career journey to becoming a full-stack web developer has
                                        been very exciting.
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Ray">
                                        <img id="headShot" src={Ray} alt="Ray" />
                                    </div>
                                </div>
                            </div>

<p>-----------------------------------------------------------------------------------------------------------------------------------</p>
                            <div className="row">
                                <div className="col s6">
                                    <div id="Vi">
                                        This is Vi's Picture
                                        <img id="headShot" src={placeholder1} alt="Vi" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Vi">
                                        This is Vi's Info
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}