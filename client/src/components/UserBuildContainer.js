import React, { useContext } from "react";
import { UserContext } from "../context/user";
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ setNewBuildObject }){
    const { openGarageBuilds } = useContext(UserContext)

    return(
        <div>
            { openGarageBuilds.map((build) => <UserBuildCard setNewBuildObject={setNewBuildObject} build={build} key={build.id} /> )}
        </div>
    )
}

export default UserBuildContainer