import React from "react";
import BuildsByBudgetCard from "./BuildsByBudgetCard";

function BuildsByBudgetContainer({ buildsByBudget }){

    return(
        <div>
            { buildsByBudget.map((build)=> <BuildsByBudgetCard build={build} key={build.id} /> ) }
        </div>
    )
}

export default BuildsByBudgetContainer