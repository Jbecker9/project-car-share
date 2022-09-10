import React from "react";
import CompanyBuildCard from "./CompanyBuildCard";
import "../styles/CompanyBuildCardContainer.css"

function CompanyBuildCardContainer({ company }){

    return(
        <div className="CompanyBuildCardContainer-div" >
            { company.builds.map((build) => <CompanyBuildCard build={build} key={build.id} />) }
        </div>
    )
}

export default CompanyBuildCardContainer