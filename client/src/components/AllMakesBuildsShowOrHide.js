import React from "react";
import AllMakesBuildsContainer from "./AllMakesBuildsContainer";

function AllMakesBuildsShowOrHide({ showBuildsClick, make }){

    if (showBuildsClick === make.id){
        return <AllMakesBuildsContainer builds={make.builds} />
    } else {
        return null
    }
}

export default AllMakesBuildsShowOrHide