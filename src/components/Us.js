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
                                    <p  className="right-align">This is Alex's info</p>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Alex">
                                        <img id="pic" className="left" src={placeholder1} alt="Alex" />
                                        This is Alex's Picture
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s6">
                                    <div id="Grigore">
                                        This is Grigore's Picture
                                        <img id="pic" className="right" src={placeholder1} alt="Grigore" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Grigore">
                                    <p  className="left-align">This is Grigore's Info</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="row">
                                <div className="col s6">
                                    <div id="Ray">
                                        <p  className="right-align">Ray has spent the last 11 years as a technical
                                        trainer (less 1 in the middle attempting  to do sales). His new career journey to becoming a full-stack web developer has
                                        been very exciting.</p>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Ray">
                                        <img id="pic" className="left" src={Ray} alt="Ray" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="Vi">
                                        This is Vi's Picture
                                        <img id="pic" className="right" src={placeholder1} alt="Vi" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Vi">
                                    <p  className="left-align">This is Vi's Info</p>
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