import React, { useState } from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";
import "../styles/Home.css";
import CreateBuildForm from "./CreateBuildForm"


function UserBuildContainer({ makeRef, setMakeRef, make, makes, renderUpdateBuild, renderRemovedBuild, renderNewBuild, setNewBuildObject }){
    const [createBuildFormClick, setCreateBuildFormClick] = useState(false)

    function renderBuildForm(){
        setMakeRef(make)
        setCreateBuildFormClick(true)
    }


    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            <div className="UserBuildContainer-buildContainerDiv">
            { make.builds.map((build) => <UserBuildCard renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} key={build.id} build={build} />) }
            { createBuildFormClick ? <CreateBuildForm makeRef={makeRef} make={make} renderNewBuild={renderNewBuild} setNewBuildObject={setNewBuildObject} setCreateBuildFormClick={setCreateBuildFormClick} /> : <button className="Home-renderCreateBuildFormButton" onClick={()=>renderBuildForm()}>Create a New {make.company_name}</button> }
            </div>
        </div>
    )
}

export default UserBuildContainer