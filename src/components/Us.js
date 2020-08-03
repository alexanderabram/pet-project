import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import placeholder1 from "../images/placeholder1.jpg";
import Ray from "../images/Ray.jpg";
import Violet from "../images/Violet.png";

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
                                        <img src={placeholder1} alt="Alex" />
                                        This is Alex's Picture
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="Grigore">
                                        This is Grigore's Picture
                                        <img src={placeholder1} alt="Grigore" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Grigore">
                                        This is Grigore's Info
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="Ray">
                                        This is Ray's info
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Ray">
                                        This is Ray's Picture
                                        <img src={Ray} alt="Ray" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="Vi">
                                        This is Vi's Picture
                                        <img src={Violet} alt="Vi" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Vi">
                                        UX/UI designer hopeful, recent Vanderbilt University Coding Boot Camp graduate. cat mom, dogs are okay i guess.
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