import React, { useState, useContext } from "react";
import UserMakeCard from "./UserMakeCard";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";
import RenderOptionsOrForm from "./RenderOptionsOrForm";
import { UserContext } from "../context/user";

function Home({ renderNewMake, renderNewBuild }){
    const {userState, setMakeRef} = useContext(UserContext)
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [selectMakeClick, setSelectMakeClick] = useState(false)
    const [nonUserMakes, setNonUserMakes] = useState(null)
    const [displayBuildFormClick, setDisplayBuildFormClick] = useState(false)
    

    function renderMakeForm(){
        setMakeFormClick(true)
        setSelectMakeClick(false)
    }

    function renderNonUserMakes(e){
        e.preventDefault()
        fetch("/non_user_makes")
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
            { selectMakeClick ? <RenderOptionsOrForm displayBuildFormClick={displayBuildFormClick} setDisplayBuildFormClick={setDisplayBuildFormClick} setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} nonUserMakes={nonUserMakes} renderNewBuild={renderNewBuild} /> : <button className="Home-renderCreateBuildFormButton" onClick={(e)=>renderNonUserMakes(e)} > Select an existing Make </button> }
            <h2 className="Home-h2"> Brand new Company? </h2>
            { makeFormClick ? <NewMakeForm setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>renderMakeForm()} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { userState.makes.map((make) => <UserMakeCard setDisplayBuildFormClick={setDisplayBuildFormClick} selectMakeClick={selectMakeClick} setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home