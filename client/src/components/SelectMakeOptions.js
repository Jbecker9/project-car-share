import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/SelectMakeOptions.css"

function SelectMakeOptions({ setDisplayBuildFormClick, nonUserMakes }){
    const { setMakeRef } = useContext(UserContext)
    const [newUserMake, setNewUserMake] = useState(nonUserMakes[0])

    function findSelectedMake(e){
        let selectedMake = nonUserMakes.find(make => make.id === parseInt(e.target.value))
        setNewUserMake(selectedMake)
        setMakeRef(selectedMake)
    }

    return(
    <div className="SelectMakeOptions-div" >
        <select defaultValue={nonUserMakes[0]} className="SelectMakeOptions-select" onChange={(e)=>findSelectedMake(e)}>
            { nonUserMakes ? nonUserMakes.map((make) => <option key={make.id} value={make.id}>{make.company_name}</option>) : <h3>Loading...</h3>}
        </select>
        <button className="SelectMakeOptions-renderCreateBuildFormButton" onClick={()=>setDisplayBuildFormClick(true)} > Build a new {newUserMake.company_name}  </button>
    </div>
    )
}

export default SelectMakeOptions