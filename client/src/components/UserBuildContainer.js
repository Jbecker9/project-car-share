import React from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ make, removeBuild, makes, renderUpdateBuild }){




    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { make.builds.map((build) => <UserBuildCard renderUpdateBuild={renderUpdateBuild} makes={makes} removeBuild={removeBuild} key={build.id} build={build} />) }
        </div>
    )
}

export default UserBuildContainer