import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, removeBuild }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer removeBuild={removeBuild} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home