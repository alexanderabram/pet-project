import React, { useRef, useContext, useEffect, useState } from "react";
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
import axios from "axios";
import PetContext from "../utils/Context";

const Listpet = (props) => {

    const petNameRef = useRef(null);
    const petTypeRef = useRef(null);
    const petBioRef = useRef(null);
    const petOwnerRef = useRef(null);
    const petContactRef = useRef(null);
    const [context, setContext] = useContext(PetContext);
    console.log(context);
    useEffect(() => {
        setContext({ pet: { name: "Whiskers", type: "Cat" } });
    }, [])

    const postPet = (e) => {
        e.preventDefault();
        const pet = {
            name: petNameRef.current.value,
            type: petTypeRef.current.value,
            description: petBioRef.current.value,
            owner: petOwnerRef.current.value,
            contact: petContactRef.current.value,
        }
        axios.post("/api/pets", pet).then(() => {
            console.log("Pet Saved");
        });
        handleFormSubmit();
    }

    const [pets, setPets] = useState([]);
    const [formObject, setFormObject] = useState({
        name: "",
        type: "",
        description: "",
        owner: "",
        contact: ""
    })
    //when the form is submitted after pet is saved
    function handleFormSubmit(event) {
        event.preventDefault()
                .catch (err => console.log(err));
            
        }
//when the form is submitted

return (
    <div className="container" id="list">
        <div className="row">
            <form className="col s12" >
                <div>
                    <h3>Post Your Pet</h3><h5 id="free">We'll Find A Great Match!</h5>
                </div>

                <div className="row">
                    <form className="col s11">
                        <div className="row">
                            <div className="input-field col s6" id="petName">
                                <input id="icon_prefix" type="text" className="validate" ref={petNameRef} />
                                <label for="icon_prefix" ><GiPawPrint size="30px" color="black" />    Your Pet's Name</label>
                            </div>
                            <div className="input-field col s6" id="petType">
                                <input id="icon_prefix" type="text" className="validate" ref={petTypeRef} />
                                <label for="icon_prefix" ><GiVirtualMarker size="30px" color="black" />    Your Pet's Type (ex. dog)</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s11" id="petBio">
                                <textarea id="textarea1" className="materialize-textarea" ref={petBioRef}></textarea>
                                <label for="textarea1" ><GiTalk size="30px" color="black" />        Tell Us About Your Pet</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <form className="col s11">
                        <div className="row">
                            <div className="input-field col s6" id="petOwner">
                                <input id="icon_prefix" type="text" className="validate" ref={petOwnerRef} />
                                <label for="icon_prefix" ><GiPerson size="30px" color="black" />    Your Name</label>
                            </div>
                            <div className="input-field col s6" id="petContact">
                                <input id="icon_prefix" type="text" className="validate" ref={petContactRef} />
                                <label for="icon_prefix" ><GiSmartphone size="30px" color="black" />    Best Way To Contact You</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row" id="listBtn">
                    <div className="input-field col s6" className="center-align">
                        <a className="waves-effect waves-light btn-large" onClick={postPet}>Post Pet    <GiLoveHowl size="30px" color="black" /></a>
                    </div>
                </div>

            </form>
        </div>
        <div className="row">
            {pets.map(pet => (
                <strong>
                    {pet.title}
                    {pet.name}
                    {pet.type}
                    {pet.description}
                    {pet.owner}
                    {pet.contact}
                </strong>
            ))}
        </div>
    </div>
)
}

export default Listpet;