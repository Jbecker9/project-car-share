import React from "react";
import "../styles/SelectMakeForBuildForm.css";
import CreateBuildForm from "./CreateBuildForm";
import SelectMakeOptions from "./SelectMakeOptions";

function RenderOptionsOrForm({ createBuildFormClick, setCreateBuildFormClick, closeForm, setSelectMakeClick, setDisplayBuildFormClick, displayBuildFormClick, setNewBuildObject, renderNewBuild, makeRef, setMakeRef, renderBuildForm, nonUserMakes }){
    
    


    return(
        <div>
            { displayBuildFormClick ? <CreateBuildForm createBuildFormClick={createBuildFormClick} setCreateBuildFormClick={setCreateBuildFormClick} setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} closeForm={closeForm} makeRef={makeRef} renderBuildForm={renderBuildForm} setDisplayBuildFormClick={setDisplayBuildFormClick} /> : <SelectMakeOptions makeRef={makeRef} setDisplayBuildFormClick={setDisplayBuildFormClick} nonUserMakes={nonUserMakes} setMakeRef={setMakeRef}/> }
        </div>
    )
}

export default RenderOptionsOrForm