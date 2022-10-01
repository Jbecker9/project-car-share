import React from "react";
import "../styles/SelectMakeForBuildForm.css";
import CreateBuildForm from "./CreateBuildForm";
import SelectMakeOptions from "./SelectMakeOptions";

function RenderOptionsOrForm({ setCreateBuildFormClick, closeForm, setSelectMakeClick, setDisplayBuildFormClick, displayBuildFormClick, setNewBuildObject, renderNewBuild, renderBuildForm, nonUserMakes }){
    
    


    return(
        <div>
            { displayBuildFormClick ? <CreateBuildForm setCreateBuildFormClick={setCreateBuildFormClick} setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} closeForm={closeForm} renderBuildForm={renderBuildForm} setDisplayBuildFormClick={setDisplayBuildFormClick} /> : <SelectMakeOptions setDisplayBuildFormClick={setDisplayBuildFormClick} nonUserMakes={nonUserMakes} /> }
        </div>
    )
}

export default RenderOptionsOrForm