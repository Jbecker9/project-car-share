import React from "react";
import "../styles/CommunityBuildFilterButtons.css"

function CommunityBuildsFilterButtons({ setFastestBuilds, setBuildsByBudget }){

    function getFastestBuilds(e){
        e.preventDefault(e)
        fetch("/fastest_builds")
            .then((response)=>response.json())
            .then((fastestBuildData)=>{
                setBuildsByBudget(null)
                setFastestBuilds(fastestBuildData);
            })
    }

    function getBuildsByBudget(e){
        e.preventDefault()
        fetch("/highest_budgets")
            .then((response)=>response.json())
            .then((highestBudgetData)=>{
                setFastestBuilds(null)
                setBuildsByBudget(highestBudgetData);
            })
    }

    return(
        <div className="CommunityBuildFilterButtons-div">
            <button className="CommunityBuildFilterButtons-button" onClick={(e)=>getFastestBuilds(e)}> Fastest Builds </button>
            <button className="CommunityBuildFilterButtons-button" onClick={(e)=>getBuildsByBudget(e)} > Highest Budgets </button>
        </div>
    )
}

export default CommunityBuildsFilterButtons