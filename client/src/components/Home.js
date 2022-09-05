import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes, builds }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer builds={builds} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home