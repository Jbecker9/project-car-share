import React from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ make, makes, renderUpdateBuild, renderRemovedBuild }){

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { make.builds.map((build) => <UserBuildCard renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} key={build.id} build={build} />) }
        </div>
    )
}

export default UserBuildContainer