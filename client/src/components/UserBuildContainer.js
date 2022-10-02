import React, { useContext } from "react";
import { UserContext } from "../context/user";
import UserBuildCard from "./UserBuildCard";

function UserBuildContainer({ build }){
    const { userState } = useContext(UserContext)

    if (build.user_id === userState.id){
        return <UserBuildCard build={build} />
    } else {
        return null
    }
}

export default UserBuildContainer