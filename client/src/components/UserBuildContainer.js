import React from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ make, removeBuild }){




    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { make.builds.map((build) => <UserBuildCard removeBuild={removeBuild} key={build.id} build={build} />) }
        </div>
    )
}

export default UserBuildContainer