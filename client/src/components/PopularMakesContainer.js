import React from "react";
import PopularMakesCard from "./PopularMakesCard";
import "../styles/PopularMakesContainer.css"

function PopularMakesContainer({ popularMakes }){

    return (
        <div>
            <h1 className="PopularMakesContainer-h1"> Popular Makes </h1>
            { popularMakes.map((make)=> <PopularMakesCard make={make} key={make.id}/>) }
        </div>
    )
}

export default PopularMakesContainer