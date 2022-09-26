import React from "react";
import "../styles/SelectMakeOptions.css"

function SelectMakeOptions({ makeRef, setMakeRef, setDisplayBuildFormClick, nonUserMakes }){
    

    function findSelectedMake(e){
        let selectedMake = nonUserMakes.find(make => make.id === parseInt(e.target.value))
        setMakeRef(selectedMake)
    }

    return(
    <div className="SelectMakeOptions-div" >
        <select defaultValue={nonUserMakes[0]} className="SelectMakeOptions-select" onChange={(e)=>findSelectedMake(e)}>
            { nonUserMakes ? nonUserMakes.map((make) => <option key={make.id} value={make.id}>{make.company_name}</option>) : <h3>Loading...</h3>}
        </select>
        <button className="SelectMakeOptions-renderCreateBuildFormButton" onClick={()=>setDisplayBuildFormClick(true)} > Build a new {makeRef.company_name} </button>
    </div>
    )
}

export default SelectMakeOptions