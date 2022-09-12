import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, makes, renderUpdateBuild }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home