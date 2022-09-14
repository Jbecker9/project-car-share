import React, { useState } from "react";
import "../styles/CreateBuild.css"
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import CreateBuildForm from "./CreateBuildForm";
import NewMakeForm from "./NewMakeForm";

function CreateBuild({ makes, renderNewBuild }){
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [addNewBuildClick, setNewBuildClick] = useState(null)
    const [addNewMakeClick, setAddNewMakeClick] = useState(false)

    function renderNewBuildForm(){
        setNewBuildClick(true)
        setAddNewMakeClick(null)
    }

    function renderNewMakeForm(){
        setAddNewMakeClick(true)
        setNewBuildClick(null)
    }

    return(
        <div className="CreateBuild-div">
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            { addNewBuildClick ? <CreateBuildForm makes={makes} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} setNewBuildClick={setNewBuildClick} /> : <button className="CreateBuild-renderButton" onClick={()=>renderNewBuildForm()} > Add a new Build </button> }
            { addNewMakeClick ? <NewMakeForm /> : <button className="CreateBuild-renderButton" onClick={()=>renderNewMakeForm()}> Add a new Make </button> }
        </div>
    )
}

export default CreateBuild