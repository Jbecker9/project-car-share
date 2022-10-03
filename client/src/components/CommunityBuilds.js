import React, { useState } from "react";
import BuildsByBudgetContainer from "./BuildsByBudgetContainer";
import CommunityBuildsFilterButtons from "./CommunityBuildsFilterButtons";
import FastestBuildsContainer from "./FastestBuildsContainer";

function CommunityBuilds(){
    const [fastestBuilds, setFastestBuilds] = useState(null)
    const [buildsByBudget, setBuildsByBudget] = useState(null)

    return(
        <div>
            <CommunityBuildsFilterButtons  setFastestBuilds={setFastestBuilds} setBuildsByBudget={setBuildsByBudget} />
            { fastestBuilds ? <FastestBuildsContainer fastestBuilds={fastestBuilds} /> : null }
            { buildsByBudget ? <BuildsByBudgetContainer buildsByBudget={buildsByBudget} /> : null }
        </div>
    )
}

export default CommunityBuilds