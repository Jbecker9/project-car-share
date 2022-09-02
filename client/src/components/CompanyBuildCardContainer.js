import React from "react";
import CompanyBuildCard from "./CompanyBuildCard";
import "../styles/CompanyBuildCardContainer.css"

function CompanyBuildCardContainer({ companyBuilds }){

    return(
        <div className="CompanyBuildCardContainer-div" >
            { companyBuilds.map((build) => <CompanyBuildCard build={build} key={build.id} />) }
        </div>
    )
}

export default CompanyBuildCardContainer