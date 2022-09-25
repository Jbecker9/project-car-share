import React, { useState } from "react";
import "../styles/SelectMakeForBuildForm.css";
import CreateBuildForm from "./CreateBuildForm";
import SelectMakeOptions from "./SelectMakeOptions";

function RenderOptionsOrForm({ makeRef, setMakeRef, renderBuildForm, nonUserMakes }){
    const [displayBuildForm, setDisplayBuildFormClick] = useState(false)
    const [newBuildMakeOption, setNewBuildMakeOption] = useState(nonUserMakes[0])
    
    

    return(
        <div>
            { displayBuildForm ? <CreateBuildForm makeRef={makeRef} renderBuildForm={renderBuildForm} setDisplayBuildFormClick={setDisplayBuildFormClick} /> : <SelectMakeOptions setDisplayBuildFormClick={setDisplayBuildFormClick} setNewBuildMakeOption={setNewBuildMakeOption} nonUserMakes={nonUserMakes} newBuildMakeOption={newBuildMakeOption} setMakeRef={setMakeRef}/> }
        </div>
    )
}

export default RenderOptionsOrForm