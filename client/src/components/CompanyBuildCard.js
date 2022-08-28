import React from "react";

function CompanyBuildCard({ build }){

    return(
        <div className="CompanyBuildCard-div">
            <h3>{build.name}</h3>
        </div>
    )
}

export default CompanyBuildCard