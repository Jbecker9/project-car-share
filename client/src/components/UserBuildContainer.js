import React from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";
import "../styles/Home.css";
import CreateBuildForm from "./CreateBuildForm"


function UserBuildContainer({ setCreateBuildFormClick, createBuildFormClick, setSelectMakeClick, setDisplayBuildFormClick, closeForm, makeRef, setMakeRef, make, makes, renderUpdateBuild, renderRemovedBuild, renderNewBuild, setNewBuildObject }){
    

    function renderBuildForm(){
        setMakeRef(make)
        setCreateBuildFormClick(true)
    }


    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            <div className="UserBuildContainer-buildContainerDiv">
            { make.builds.map((build) => <UserBuildCard renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} key={build.id} build={build} />) }
            { createBuildFormClick ? <CreateBuildForm setSelectMakeClick={setSelectMakeClick} setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} closeForm={closeForm} makeRef={makeRef} setDisplayBuildFormClick={setDisplayBuildFormClick} setCreateBuildFormClick={setCreateBuildFormClick} /> : <button className="Home-renderCreateBuildFormButton" onClick={()=>renderBuildForm()}>Create a New {make.company_name}</button> }
            </div>
        </div>
    )
}

export default UserBuildContainer