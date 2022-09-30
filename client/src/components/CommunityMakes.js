import React, { useState } from "react";
import "../styles/SearchBuilds.css"
import CommunityMakesFilterButtons from "./CommunityMakesFilterButtons";


function CommunityMakes(){
    const [featuredMakes, setFeaturedMakes] = useState(null)
    const [popularMakes, setPopularMakes] = useState(null)
    const [allMakes, setAllMakes] = useState(null)



    return(
            <div className="SearchBuilds-searchDiv">
                <CommunityMakesFilterButtons setFeaturedMakes={setFeaturedMakes} setPopularMakes={setPopularMakes} setAllMakes={setAllMakes} />
            </div>
    )
}

export default CommunityMakes