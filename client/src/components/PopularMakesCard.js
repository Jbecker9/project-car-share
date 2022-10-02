import React from "react";
import "../styles/UserBuildContainer.css"
import PopularMakesBuildCard from "./PopularMakesBuildCard";

function PopularMakesCard({ make }){

    return(
        <div className="UserBuildContainer-div" >
            <h1>{make.company_name}</h1>
            <img className="userBuildContainer-cardImage" src={make.company_image} alt="Company Logo" />
            <div className="UserBuildContainer-buildContainerDiv">
                { make.builds.map((build) => <PopularMakesBuildCard build={build} key={build.id}/> ) }
            </div>
        </div>
    )
}

export default PopularMakesCard