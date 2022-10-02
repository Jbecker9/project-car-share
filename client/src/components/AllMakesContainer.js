import React, { useState } from "react";
import AllMakesCard from "./AllMakesCard";
import "../styles/AllMakesContainer.css"

function AllMakesContainer({ allMakes }){
    const [showBuildsClick, setShowBuildsClick] = useState(null)

    return(
        <div>
            <div className="AllMakesContainer-textDiv">
                <h1>All Makes</h1>
                <p>Click on a make to show all of its Builds</p>
            </div>
            { allMakes.map((make)=> <AllMakesCard key={make.id} showBuildsClick={showBuildsClick} setShowBuildsClick={setShowBuildsClick} make={make} /> )}
        </div>
    )
}

export default AllMakesContainer