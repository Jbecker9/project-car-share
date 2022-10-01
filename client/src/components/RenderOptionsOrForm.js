import React, { useState } from "react";
import "../styles/SelectMakeForBuildForm.css";
import NonUserMakeBuildForm from "./NonUserMakeBuildForm";
import SelectMakeOptions from "./SelectMakeOptions";

function RenderOptionsOrForm({ setSelectMakeClick, setNewBuildObject, nonUserMakes }){
    const [displayBuildFormClick, setDisplayBuildFormClick] = useState(false)
    
    return(
        <div>
            { displayBuildFormClick ? <NonUserMakeBuildForm setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} setDisplayBuildFormClick={setDisplayBuildFormClick} /> : <SelectMakeOptions setDisplayBuildFormClick={setDisplayBuildFormClick} nonUserMakes={nonUserMakes} /> }
        </div>
    )
}

export default RenderOptionsOrForm