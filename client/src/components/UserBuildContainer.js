import React from "react";
import "../styles/UserBuildContainer.css"

function UserBuildContainer({ build, makes }){

    return(
        <div className="UserBuildContainer-div" onClick={()=>console.log(build)} >
            <h1>{build.model}</h1>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildContainer-img"/>
        </div>
    )
}

export default UserBuildContainer