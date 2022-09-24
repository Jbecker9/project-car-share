import React, { useState } from "react";
import NewMakeFormExistingMakeCard from "./NewMakeFormExistingMakeCard";
import "../styles/NewMakeForm.css"
import "../styles/NewMakeFormExistingMakeContainer.css"


function NewMakeFormExistingMakeContainer({ renderBuildForm }){
    const [nonUserMakes, setNonUserMakes] = useState([]) 


    function getNonUserMakes(e){
        e.preventDefault()
        fetch("/non_user_makes")
        .then((response)=>response.json())
            .then((nonUserMakeData)=>console.log(nonUserMakeData))
    }

    return(
        <div>
        <div className="NewMakeForm-h2Div">
        <h2 className="NewMakeForm-existingBuildsh2">Add a new Build from an existing Make:</h2>
        </div>
        <div className="NewMakeForm-existingBuildsDiv">
        <button onClick={(e)=>getNonUserMakes(e)} className="NewMakeFormExistingMakeContainer-button"> Select a Make</button>
        {/* { makes.map((company)=> <NewMakeFormExistingMakeCard renderBuildForm={renderBuildForm} key={company.id} company={company} /> ) } */}
        </div>
        </div>
)}

export default NewMakeFormExistingMakeContainer