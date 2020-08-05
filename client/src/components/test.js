import React, { useEffect } from "react";
import M from "materialize-css";
import Background1 from "../images/background1.jpg";
import Background2 from "../images/background2.jpg";
import Background3 from "../images/background3.jpg";
import { GiHearts } from "react-icons/gi";
import { GiCycle } from "react-icons/gi";
import { GiPawPrint } from "react-icons/gi";
import "./css/style.css";

const Parallax = () => {
    useEffect(() => {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }, []);

    return (
        <div>
            {/* <div id="index-banner" class="parallax-container">
                <div className="parallax">
                    <img src={Background1} alt="Pets" />
                </div>
                <div className="section" id="first">
                    <h1> Pet-N-Parents Parade </h1>
                    <h5><b> Help find a great new home for your friend! </b></h5>
                </div>
                <div className="row center">
                    <a href="/login" id="download-button"
                        className="btn-large waves-effect waves-light teal lighten-1"><b>Member Login</b></a>
                </div>
            </div> */}

<div className="parallax-container">
                <div className="parallax">
                    <img src="https://jooinn.com/images/dog-67.jpg" alt="doggie" />
                </div>
                <div className="section white">
                    <h2> Test Parallax </h2>
                    <p> Demo Text </p>
                </div>
            </div>

            <div className="container">
                <div className="section white">
                    <h3><b>What We're About</b></h3>
                    <p class="left-align light">Dogs, cats, other friends... they're more than just pets, they’re part of the family.
                    Sometimes our four-legged friends need a new home or owner. That's where The Pets-N-Parents Parade
                    comes in. PPP aims to connect those who are looking to add a new member of the family with
                    those who want to be confident that their pet will continue to be loved and cared for!
                    </p>
                </div>
            </div>

            
        </div>
    );
};


export default Parallax;
