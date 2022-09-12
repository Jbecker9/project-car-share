import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, makes, renderUpdateBuild, renderRemovedBuild}){
    
    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home