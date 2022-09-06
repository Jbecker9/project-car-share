import React, { useState } from "react";
import "../styles/UserBuildContainer.css"
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ make }){
    const [userBuildsByMake, setUserBuildsByMake] = useState(make.builds)

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            { userBuildsByMake.map((build) => <UserBuildCard key={build.id} build={build} />) }
        </div>
    )
}

export default UserBuildContainer