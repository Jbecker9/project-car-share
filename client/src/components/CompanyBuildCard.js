import React from "react";
import "../styles/CompanyBuildCard.css"

function CompanyBuildCard({ build }){

    return(
        <div className="CompanyBuildCard-div" onClick={()=>console.log(build)} >
            <img className="CompanyBuildCard-image" src={build.build_image} alt="User Vehicle" />
            <h2>{build.year} {build.model} {build.spec}</h2>
            <h3>{build.horsepower}hp ${build.budget}</h3>
        </div>
    )
}

export default CompanyBuildCard