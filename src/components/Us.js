import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import Ray from "../images/Ray.jpg";
import Grigore from "../images/Grigore.jpeg";
import Violet from "../images/Violet.png";
import Alex from "../images/Alex.jpg";

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
                    <div className="col s12" id="thisIsUs">
                        <h3><b>This is Us</b></h3>
                    </div>
                    <div className="container" id="ourSection">
                        <div className="col s12" id="filler">

                            <div className="row">
                                <div className="col s6">
                                    <div id="Alex">
                                        <p className="right-align">Alex has always loved dogs. He currently has three four-legged members of the family, Teddy, Nelli, and Ralphie. Alex believes all pets deserve a loving and responsible home, and is confident pet parade can provide this opportunity.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div id="Alex">
                                        <img id="pic" className="left" src={Alex} alt="Alex" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="personPic">

                                        Web Developer
                                        <img id="headShot" src={Grigore} alt="Grigore" />


                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Grigore">

                                        Grigore comes from a country where people have a cruel relation with pets leaving them outside all year round and using them only as security.I hope this app will be useful and will help stop violence against animals and will make happy those who love pets.

                                    <p className="left-align">This is Grigore's Info</p>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <div id="Ray">
                                        <p className="right-align">Ray has spent the last 11 years as a technical
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
                                    <div id="personPic">
                                        <img id="pic" className="right" src={Violet} alt="Vi" />
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div id="Vi">
                                        <p className="left-align">UX/UI designer hopeful, recent Vanderbilt University Coding Boot Camp graduate. cat mom, dogs are okay i guess.</p>

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