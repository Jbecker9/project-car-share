import React, { useState } from "react";
import UserBuildContainer from "./UserBuildContainer";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";
import RenderOptionsOrForm from "./RenderOptionsOrForm";

function Home({ renderNewMake, renderNewBuild, user, makes, renderUpdateBuild, renderRemovedBuild }){
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [selectMakeClick, setSelectMakeClick] = useState(false)
    const [nonUserMakes, setNonUserMakes] = useState(null)
    const [makeRef, setMakeRef] = useState(user.makes[0])
    

    function renderMakeForm(){
        setMakeFormClick(true)
        setSelectMakeClick(false)
    }

    function renderSelectMake(e){
        e.preventDefault()
        fetch("/non_user_makes")
        .then((response)=>response.json())
            .then((nonUserMakeData)=>{ 
                setNonUserMakes(nonUserMakeData);
                setMakeFormClick(false);
                setSelectMakeClick(true);
            })
    }


    return(
        <div>
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            <h2 className="Home-h2">Company not in your Garage?</h2>
            { selectMakeClick ? <RenderOptionsOrForm makeRef={makeRef} nonUserMakes={nonUserMakes} setMakeRef={setMakeRef} /> : <button className="Home-renderCreateBuildFormButton" onClick={(e)=>renderSelectMake(e)} > Select an existing Make </button> }
            <h2 className="Home-h2"> Brand new Company? </h2>
            { makeFormClick ? <NewMakeForm makes={makes} setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>renderMakeForm()} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { user.makes.map((make) => <UserBuildContainer makeRef={makeRef} setMakeRef={setMakeRef} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home