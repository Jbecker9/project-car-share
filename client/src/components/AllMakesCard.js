import React from "react";
import AllMakesBuildsShowOrHide from "./AllMakesBuildsShowOrHide";

function AllMakesCard({ make, showBuildsClick, setShowBuildsClick }){

    return(
    <div className="UserBuildContainer-div" onClick={()=>setShowBuildsClick(make.id)} >
        <h1>{make.company_name}</h1>
        <img className="userBuildContainer-cardImage" src={make.company_image} alt="Company Logo" />
        <div className="UserBuildContainer-buildContainerDiv">
        <AllMakesBuildsShowOrHide showBuildsClick={showBuildsClick} make={make} />
        </div>
    </div>
    )
}

export default AllMakesCard