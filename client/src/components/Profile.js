import React, { useState, useContext } from "react";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";
import RenderOptionsOrForm from "./RenderOptionsOrForm";
import { UserContext } from "../context/user";
import UserBuildContainer from "./UserBuildContainer";

function Profile(){
    const { setMakeRef, openGarageBuilds, getUserBuildData } = useContext(UserContext)
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [selectMakeClick, setSelectMakeClick] = useState(false)
    const [nonUserMakes, setNonUserMakes] = useState(null)  

    function renderMakeForm(){
        setMakeFormClick(true)
        setSelectMakeClick(false)
    }

    function renderNonUserMakes(e){
        e.preventDefault()
        fetch("/makes")
        .then((response)=>response.json())
            .then((nonUserMakeData)=>{ 
                setNonUserMakes(nonUserMakeData);
                setMakeRef(nonUserMakeData[0])
                setMakeFormClick(false);
                setSelectMakeClick(true);
            })
    }

    return(
        <div>
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            <h2 className="Home-h2">Company not in your Garage?</h2>
            { selectMakeClick ? <RenderOptionsOrForm setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} nonUserMakes={nonUserMakes} /> : <button className="Home-renderCreateBuildFormButton" onClick={(e)=>renderNonUserMakes(e)} > Select an existing Make </button> }
            <h2 className="Home-h2"> Brand new Company? </h2>
            { makeFormClick ? <NewMakeForm setNewBuildObject={setNewBuildObject} setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>renderMakeForm()} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { openGarageBuilds ? <UserBuildContainer setNewBuildObject={setNewBuildObject} /> : <button className="Home-openGarageButton" onClick={()=>getUserBuildData()} > Open Garage </button> }
            {/* { userBuildState.map((build) => <UserBuildCard setNewBuildObject={setNewBuildObject} build={build} key={build.id} /> )} */}
        </div>
    )
}

export default Profile