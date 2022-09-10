import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, removeBuild, makes, renderUpdateBuild }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer renderUpdateBuild={renderUpdateBuild} makes={makes} removeBuild={removeBuild} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home