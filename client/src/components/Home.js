import React from "react";
import UserBuildContainer from "./UserBuildContainer";

function Home({ user }){

    return(
        <div>
            { user.makes.map((make) => <UserBuildContainer make={make} key={make.id} /> )}
        </div>
    )
}

export default Home