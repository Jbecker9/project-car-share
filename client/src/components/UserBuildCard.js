import React from "react";
import "../styles/UserBuildCard.css"

function UserBuildCard({ build, removeBuild }){

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
            <button onClick={(e)=>deleteBuild(e)} className="CompanyBuildCard-button"> Delete Build </button>
        </div>
    )
}

export default UserBuildCard