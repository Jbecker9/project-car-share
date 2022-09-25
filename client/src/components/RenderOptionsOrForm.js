import React, { useState } from "react";
import "../styles/SelectMakeForBuildForm.css";
import CreateBuildForm from "./CreateBuildForm";
import SelectMakeOptions from "./SelectMakeOptions";

function RenderOptionsOrForm({ renderBuildForm, nonUserMakes }){
    const [displayBuildForm, setDisplayBuildFormClick] = useState(false)
    const [newBuildMake, setNewBuildMake] = useState(nonUserMakes[0])
    
    

    return(
        <div>
            { displayBuildForm ? <CreateBuildForm renderBuildForm={renderBuildForm} setDisplayBuildFormClick={setDisplayBuildFormClick} newBuildMake={newBuildMake}/> : <SelectMakeOptions setDisplayBuildFormClick={setDisplayBuildFormClick} setNewBuildMake={setNewBuildMake} nonUserMakes={nonUserMakes} newBuildMake={newBuildMake} /> }
        </div>
    )
}

export default RenderOptionsOrForm