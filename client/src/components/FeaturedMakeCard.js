import React from "react";
import FeaturedMakeBuildCard from "./FeaturedMakeBuildsCard";
import "../styles/UserBuildContainer.css"

function FeaturedMakeCard({ featuredMake }){

    return(
        <div>
            <h1 className="UserBuildContainer-h1" > Featured Make </h1>
            <div className="UserBuildContainer-div" >
                <h1>{featuredMake.company_name}</h1>
                <img className="userBuildContainer-cardImage" src={featuredMake.company_image} alt="Company Logo" />
                <div className="UserBuildContainer-buildContainerDiv">
                { featuredMake.builds.map((build) => <FeaturedMakeBuildCard key={build.id} build={build} /> ) }
                </div>
            </div>
        </div>
    )
}

export default FeaturedMakeCard