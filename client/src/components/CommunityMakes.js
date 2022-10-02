import React, { useState } from "react";
import "../styles/SearchBuilds.css"
import AllMakesContainer from "./AllMakesContainer";
import CommunityMakesFilterButtons from "./CommunityMakesFilterButtons";
import FeaturedMakeCard from "./FeaturedMakeCard";
import PopularMakesContainer from "./PopularMakesContainer";


function CommunityMakes(){
    const [featuredMake, setFeaturedMake] = useState(null)
    const [popularMakes, setPopularMakes] = useState(null)
    const [allMakes, setAllMakes] = useState(null)



    return(
            <div className="SearchBuilds-searchDiv">
                <CommunityMakesFilterButtons setFeaturedMake={setFeaturedMake} setPopularMakes={setPopularMakes} setAllMakes={setAllMakes} />
                { featuredMake ? <FeaturedMakeCard featuredMake={featuredMake} /> : null }
                { popularMakes ? <PopularMakesContainer popularMakes={popularMakes} /> : null }
                { allMakes ? <AllMakesContainer allMakes={allMakes} /> : null }
            </div>
    )
}

export default CommunityMakes