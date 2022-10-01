import React, { useState, useContext } from "react";
import UserBuildContainer from "./UserBuildContainer";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";
import RenderOptionsOrForm from "./RenderOptionsOrForm";
import { UserContext } from "../context/user";

function Home({ renderNewMake, renderNewBuild }){
    const {userState} = useContext(UserContext)
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [selectMakeClick, setSelectMakeClick] = useState(false)
    const [nonUserMakes, setNonUserMakes] = useState(null)
    const [makeRef, setMakeRef] = useState(null)
    const [displayBuildFormClick, setDisplayBuildFormClick] = useState(false)
    const [createBuildFormClick, setCreateBuildFormClick] = useState(false)

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

    function closeForm(){
        setDisplayBuildFormClick(false)
        setCreateBuildFormClick(false)
        // setMakeRef(nonUserMakes[0])
    }

    return(
        <div>
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            <h2 className="Home-h2">Company not in your Garage?</h2>
            { selectMakeClick ? <RenderOptionsOrForm setCreateBuildFormClick={setCreateBuildFormClick} displayBuildFormClick={displayBuildFormClick} setDisplayBuildFormClick={setDisplayBuildFormClick} closeForm={closeForm} setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} makeRef={makeRef} nonUserMakes={nonUserMakes} setMakeRef={setMakeRef} renderNewBuild={renderNewBuild} /> : <button className="Home-renderCreateBuildFormButton" onClick={(e)=>renderNonUserMakes(e)} > Select an existing Make </button> }
            <h2 className="Home-h2"> Brand new Company? </h2>
            { makeFormClick ? <NewMakeForm setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>renderMakeForm()} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { userState.makes.map((make) => <UserBuildContainer closeForm={closeForm} setDisplayBuildFormClick={setDisplayBuildFormClick} createBuildFormClick={createBuildFormClick} setCreateBuildFormClick={setCreateBuildFormClick} selectMakeClick={selectMakeClick} setSelectMakeClick={setSelectMakeClick} makeRef={makeRef} setMakeRef={setMakeRef} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home