import React, { useState } from "react";
import "../styles/UserBuildCard.css"
import UpdateBuildForm from "./UpdateBuildForm";

function UserBuildCard({ build, makes, renderUpdateBuild, renderRemovedBuild }){
    const [updateFormClick, setUpdateFormClick] = useState(false)

    function deleteBuild(){
        fetch(`/makes/${build.make_id}/builds/${build.id}`, {
            method: "DELETE"
        }).then((response)=>response.json())
            .then((deletedBuildMakeData) => renderRemovedBuild(deletedBuildMakeData))
    }

    return(
        <div className="UserBuildCard-div" >
            <h2> {build.year} {build.model} {build.spec} </h2>
            <h3>Budget: ${build.budget} </h3>
            <h3> {build.horsepower}hp {build.engine} </h3>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
            <button onClick={()=>setUpdateFormClick(!updateFormClick)} className="UserBuildCard-updateButton"> Update Build </button>
            <button onClick={()=>deleteBuild()} className="UserBuildCard-deleteButton"> Delete Build </button>
            { updateFormClick ? <UpdateBuildForm renderUpdateBuild={renderUpdateBuild} makes={makes} build={build} setUpdateFormClick={setUpdateFormClick} /> : null }
        </div>
    )
}

export default UserBuildCard