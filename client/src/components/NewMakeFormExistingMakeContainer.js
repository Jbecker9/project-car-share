import React from "react";
import NewMakeFormExistingMakeCard from "./NewMakeFormExistingMakeCard";

function NewMakeFormExistingMakeContainer({ setBuildFormClickMake, existingMakesForNewBuild }){

    return(
        <div>
        <div className="NewMakeForm-h2Div">
        <h2 className="NewMakeForm-existingBuildsh2">Add a new Build from an existing Make:</h2>
        </div>
        <div className="NewMakeForm-existingBuildsDiv">
        { existingMakesForNewBuild.map((company)=> <NewMakeFormExistingMakeCard setBuildFormClickMake={setBuildFormClickMake} key={company.id} company={company} /> ) }
        </div>
        </div>
)}

export default NewMakeFormExistingMakeContainer