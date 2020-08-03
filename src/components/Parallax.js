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
            <div class="parallax-container">
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

            <div className="parallax-container">
                <div className="parallax">
                    <img src={Background2} alt="Pet Art" />
                </div>
                <div className="section">
                    <p id="P1"> Does your buddie need a new home or does your home need a new buddie? </p>
                </div>
            </div>
            
            <div className="container">
                <div className="section white">
                    {/* Icon Section */}
                    <div class="row">
                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center brown-text"><GiHearts size="60px" color="black" /></h2>
                                <h5 id="icon">We Know You Still Love'em!</h5>

                                <p>We aim to make your pet's transistion to a new home as easy as possible!</p>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center brown-text"><GiCycle size="60px" color="black" /></h2>
                                <h5 id="icon">Shared Interst</h5>

                                <p>No one wants to see the family friend lost in the shuffle of any transistion.
                                    Those who care get to help others that care, and everyone benefits. Especially the smallest one!</p>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center brown-text"><GiPawPrint size="60px" color="black" /></h2>
                                <h5 id="icon">It's All About The Little Buddies</h5>

                                <p>Your pet needs a home...</p>
                                <p>Their home needs a pet...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="parallax-container">
                <div className="parallax">
                    <img src={Background3} alt="Many Pets" />
                </div>
                <div className="section" >
                    <h5 id="last"> Find your best friend a new home! </h5>
                </div>
            </div>
        </div>
    );
};


export default Parallax;
