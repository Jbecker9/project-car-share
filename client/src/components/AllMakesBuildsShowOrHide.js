import React from "react";
import AllMakesBuildsContainer from "./AllMakesBuildsContainer";

function AllMakesBuildsShowOrHide({ showBuildsClick, make }){

    if (showBuildsClick === make.id){
        return <AllMakesBuildsContainer builds={make.buildss} />
    } else {
        return null
    }
}

export default AllMakesBuildsShowOrHide