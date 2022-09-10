import React, { useState } from "react";
import "../styles/UserBuildCard.css"
import UpdateBuildForm from "./UpdateBuildForm";

function UserBuildCard({ build, removeBuild, makes, renderUpdateBuild }){
    const [updateFormClick, setUpdateFormClick] = useState(false)

    function deleteBuild(e){
        e.preventDefault()
        fetch(`/builds/${build.id}`, {
            method: "DELETE"
        })
        removeBuild(build)

    }

    return(
        <div className="UserBuildCard-div" >
            <h2> {build.year} {build.model} {build.spec} </h2>
            <h3>Budget: ${build.budget} </h3>
            <h3> {build.horsepower}hp {build.engine} </h3>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
            <button onClick={()=>setUpdateFormClick(!updateFormClick)} className="UserBuildCard-updateButton"> Update Build </button>
            <button onClick={(e)=>deleteBuild(e)} className="UserBuildCard-deleteButton"> Delete Build </button>
            { updateFormClick ? <UpdateBuildForm renderUpdateBuild={renderUpdateBuild} makes={makes} build={build} /> : null }
        </div>
    )
}

export default UserBuildCard