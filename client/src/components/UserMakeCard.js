import React, { useContext, useState } from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";
import "../styles/Home.css";
import UserMakeBuildForm from "./UserMakeBuildForm"
import { UserContext } from "../context/user";


function UserMakeCard({ make, setNewBuildObject }){
    const { setMakeRef } = useContext(UserContext)
    const [createBuildFormClick, setCreateBuildFormClick] = useState(false)

    function renderCreateForm(make){
        setMakeRef(make)
        setCreateBuildFormClick(true)
    }

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            <div className="UserBuildContainer-buildContainerDiv">
            { make.builds.map((build) => <UserBuildCard key={build.id} build={build} />) }
            { createBuildFormClick ? <UserMakeBuildForm setCreateBuildFormClick={setCreateBuildFormClick} setNewBuildObject={setNewBuildObject} /> : <button className="Home-renderCreateBuildFormButton" onClick={()=>renderCreateForm(make)}>Create a New {make.company_name}</button> }
            </div>
        </div>
    )
}

export default UserMakeCard