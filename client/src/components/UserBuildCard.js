import React, { useState } from "react";
import "../styles/UserBuildCard.css"

function UserBuildCard({ build }){

    return(
        <div className="UserBuildCard-div" >
            <h2> {build.year} {build.model} {build.spec} </h2>
            <h3> {build.horsepower}hp {build.engine} </h3>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
        </div>
    )
}

export default UserBuildCard