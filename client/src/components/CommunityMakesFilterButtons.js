import React from "react";
import "../styles/CommunityMakes.css"

function CommunityMakesFilterButtons({ setFeaturedMake, setPopularMakes, setAllMakes }){
    
    function renderFeaturedMakes(e){
        e.preventDefault()
        fetch("/featured_make")
            .then((response)=>response.json())
            .then((sampleData)=>{
                setPopularMakes(null);
                setAllMakes(null);
                setFeaturedMake(sampleData);
            })
    }

    function renderPopularMakes(e){
        e.preventDefault()
        fetch("/popular_makes")
            .then((response)=>response.json())
            .then((popularMakesData) =>{ 
                setFeaturedMake(null);
                setAllMakes(null);
                setPopularMakes(popularMakesData);
            })
    }

    function renderAllMakes(e){
        e.preventDefault()
        fetch("/makes")
            .then((response)=>response.json())
            .then((makesData)=>{
                setPopularMakes(null)
                setFeaturedMake(null)
                setAllMakes(makesData);
            })
    }

    return(
        <div>
            <button className="CommunityMakes-button" onClick={(e)=>renderFeaturedMakes(e)} > Featured Make </button>
            <button className="CommunityMakes-button" onClick={(e)=>renderPopularMakes(e)} > Popular Makes </button>
            <button className="CommunityMakes-button" onClick={(e)=>renderAllMakes(e)} > All Makes </button>
        </div>
    )
}

export default CommunityMakesFilterButtons