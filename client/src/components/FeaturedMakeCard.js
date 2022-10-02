import React from "react";
import FeaturedMakeBuildCard from "./FeaturedMakeBuildsCard";

function FeaturedMakeCard({ featuredMake }){

    return(
            <div className="UserBuildContainer-div" >
                <h1>{featuredMake.company_name}</h1>
                <img className="userBuildContainer-cardImage" src={featuredMake.company_image} alt="Company Logo" />
                <div className="UserBuildContainer-buildContainerDiv">
                { featuredMake.builds.map((build) => <FeaturedMakeBuildCard key={build.id} build={build} /> ) }
                </div>
            </div>
    )
}

export default FeaturedMakeCard