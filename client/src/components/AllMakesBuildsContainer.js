import React from "react";
import AllMakesBuildsCard from "./AllMakesBuildsCard";

function AllMakesBuildsContainer({ builds }){

    return(
        <div>
            { builds.map((build)=> <AllMakesBuildsCard key={build.id} build={build} /> )}
        </div>
    )
}

export default AllMakesBuildsContainer