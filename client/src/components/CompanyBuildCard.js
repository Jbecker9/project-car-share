import React from "react";

function CompanyBuildCard({ build }){

    return(
        <div className="CompanyBuildCard-div">
            <h1>{build.name}</h1>
        </div>
    )
}

export default CompanyBuildCard