import React from "react";

function CommunityMakesFilterButtons({ setFeaturedMakes, setPopularMakes, setAllMakes }){

    function renderFeaturedMakes(e){
        e.preventDefault()
        fetch("/sample_make")
            .then((response)=>response.json())
            .then((sampleData)=>console.log(sampleData))
    }

    function renderPopularMakes(e){
        e.preventDefault()
    }

    function renderAllMakes(e){
        e.preventDefault()
    }

    return(
        <div>
            <button onClick={(e)=>renderFeaturedMakes(e)} > Featured Makes </button>
            <button onClick={(e)=>renderPopularMakes(e)} > Popular Makes </button>
            <button onClick={(e)=>renderAllMakes(e)} > All Makes </button>
        </div>
    )
}

export default CommunityMakesFilterButtons