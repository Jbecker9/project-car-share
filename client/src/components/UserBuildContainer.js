import React from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ make, builds }){
    const buildByMake = builds.filter((build)=> build.make.id === make.id)

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { buildByMake.map((build) => <UserBuildCard key={build.id} build={build} />) }
        </div>
    )
}

export default UserBuildContainer