import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ userMakes }){

    return(
        <div>
            { userMakes.map((make) => <UserBuildContainer make={make} key={make.id} /> )}
        </div>
    )
}

export default Home