import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/SearchBuilds.css"
import AllMakesContainer from "./AllMakesContainer";
import CommunityMakesFilterButtons from "./CommunityMakesFilterButtons";
import FeaturedMakeCard from "./FeaturedMakeCard";
import PopularMakesContainer from "./PopularMakesContainer";


function CommunityMakes(){
    const { communityNavRef } = useContext(UserContext)
    const [featuredMake, setFeaturedMake] = useState(communityNavRef)
    const [popularMakes, setPopularMakes] = useState(null)
    const [allMakes, setAllMakes] = useState(null)

    function renderMatchMakes(e){
        e.preventDefault()
        fetch("/match_makes")
            .then((r)=>r.json())
            .then((matchMakesData)=>console.log(matchMakesData))
    }



    return(
            <div className="SearchBuilds-searchDiv">
                <CommunityMakesFilterButtons setFeaturedMake={setFeaturedMake} setPopularMakes={setPopularMakes} setAllMakes={setAllMakes} />
                { featuredMake ? <FeaturedMakeCard featuredMake={featuredMake} /> : null }
                { popularMakes ? <PopularMakesContainer popularMakes={popularMakes} /> : null }
                { allMakes ? <AllMakesContainer allMakes={allMakes} /> : null }
                <button onClick={(e)=>renderMatchMakes(e)}> match makes </button>
            </div>
    )
}

export default CommunityMakes