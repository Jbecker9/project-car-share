import React from "react";
import FastestBuildsCard from "./FastestBuildsCard";

function FastestBuildsContainer({ fastestBuilds }){

    return(
        <div>
            { fastestBuilds.map((build)=> <FastestBuildsCard build={build} key={build.id} />) }
        </div>
    )
}

export default FastestBuildsContainer