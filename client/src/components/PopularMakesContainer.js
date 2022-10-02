import React from "react";
import PopularMakesCard from "./PopularMakesCard";
import "../styles/PopularMakesContainer.css"

function PopularMakesContainer({ popularMakes }){

    return (
        <div>
            <h1 className="PopularMakesContainer-h1"> Popular Makes </h1>
            <p className="PopularMakesContainer-p"> Makes with the highest amount of Builds </p>
            { popularMakes.map((make)=> <PopularMakesCard make={make} key={make.id}/>) }
        </div>
    )
}

export default PopularMakesContainer