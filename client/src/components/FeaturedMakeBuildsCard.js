import React from "react";

function FeaturedMakeBuildCard({ build }){

    return(
    <div className="UserBuildCard-div" >
        <h2> {build.year} {build.model} {build.spec} </h2>
        <h3>Budget: ${build.budget} </h3>
        <h3> {build.horsepower}hp {build.engine} </h3>
        <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
        <h4>{build.user.username}</h4>
    </div>
    )
}

export default FeaturedMakeBuildCard