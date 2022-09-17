import React, { useState } from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";
import "../styles/Home.css";
import CreateBuildForm from "./CreateBuildForm"
import BuildCreatedConfirmed from "./BuildCreatedConfirmed"


function UserBuildContainer({ make, makes, renderUpdateBuild, renderRemovedBuild, renderNewBuild, setNewBuildObject, newBuildObject }){
    const [createBuildFormClick, setCreateBuildFormClick] = useState(false)

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            { make.builds.map((build) => <UserBuildCard renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} key={build.id} build={build} />) }
            { createBuildFormClick ? <CreateBuildForm make={make} renderNewBuild={renderNewBuild} setNewBuildObject={setNewBuildObject} setCreateBuildFormClick={setCreateBuildFormClick} /> : <button className="Home-renderCreateBuildFormButton" onClick={()=>setCreateBuildFormClick(true)}>Create a New {make.company_name}</button> }
        </div>
    )
}

export default UserBuildContainer