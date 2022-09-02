import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ user, makes }){

    return(
        <div>
            { user.builds.map((build) => <UserBuildContainer build={build} key={build.id} makes={makes} /> )}
        </div>
    )
}

export default Home