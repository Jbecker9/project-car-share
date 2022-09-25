import React from "react";
import "../styles/SelectMakeOptions.css"

function SelectMakeOptions({ setMakeRef, setDisplayBuildFormClick, nonUserMakes, setNewBuildMakeOption, newBuildMakeOption }){
    

    function findSelectedMake(e){
        let selectedMake = nonUserMakes.find(make => make.id === parseInt(e.target.value))
        setNewBuildMakeOption(selectedMake)
        setMakeRef(selectedMake)
    }

    return(
    <div className="SelectMakeOptions-div" >
        <select className="SelectMakeOptions-select" onChange={(e)=>findSelectedMake(e)}>
            { nonUserMakes ? nonUserMakes.map((make) => <option key={make.id} value={make.id}>{make.company_name}</option>) : <h3>Loading...</h3>}
        </select>
        <button className="SelectMakeOptions-renderCreateBuildFormButton" onClick={()=>setDisplayBuildFormClick(true)} > Build a new {newBuildMakeOption.company_name} </button>
    </div>
    )
}

export default SelectMakeOptions