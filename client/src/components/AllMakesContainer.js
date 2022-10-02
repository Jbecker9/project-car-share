import React, { useState } from "react";
import AllMakesCard from "./AllMakesCard";

function AllMakesContainer({ allMakes }){
    const [showBuildsClick, setShowBuildsClick] = useState(null)

    return(
        <div>
            <h1>All Makes</h1>
            { allMakes.map((make)=> <AllMakesCard key={make.id} showBuildsClick={showBuildsClick} setShowBuildsClick={setShowBuildsClick} make={make} /> )}
        </div>
    )
}

export default AllMakesContainer