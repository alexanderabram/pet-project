import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
import M from "materialize-css";
import { GiPawPrint } from "react-icons/gi";
import { GiTalk } from "react-icons/gi";
import { GiPerson } from "react-icons/gi";
import { GiLoveHowl } from "react-icons/gi";
import { GiSmartphone } from "react-icons/gi";
import { GiVirtualMarker } from "react-icons/gi";
import "./css/style.css";
import "./pages/PostStyle.css";

export default class Listpet extends Component {

    render() {
        return (
            <div class="container" id="list">
                <div class="row">
                    <form class="col s12" >
                        <div>
                            <h3>Post Your Pet</h3><h5 id="free">We'll Find A Great Match!</h5>
                        </div>

                        <div class="row">
                            <form class="col s11">
                                <div class="row">
                                    <div class="input-field col s6"  id="petName">
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix" ><GiPawPrint size="30px" color="black" />    Your Pet's Name</label>
                                    </div>
                                    <div class="input-field col s6" id="petType">
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix" ><GiVirtualMarker size="30px" color="black" />    Your Pet's Type (ex. dog)</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s11"  id="petBio">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1" ><GiTalk size="30px" color="black" />        Tell Us About Your Pet</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="row">
                            <form class="col s11">
                                <div class="row">
                                    <div class="input-field col s6" id="petOwner">
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix" ><GiPerson size="30px" color="black" />    Your Name</label>
                                    </div>
                                    <div class="input-field col s6" id="petContact">
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix" ><GiSmartphone size="30px" color="black" />    Best Way To Contact You</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row" id="listBtn">
                            <div class="input-field col s6" className="center-align">
                                <a class="waves-effect waves-light btn-large">Post Pet    <GiLoveHowl size="30px" color="black" /></a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}