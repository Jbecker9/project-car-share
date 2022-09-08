import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, grabNewBuildState }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer grabNewBuildState={grabNewBuildState} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home