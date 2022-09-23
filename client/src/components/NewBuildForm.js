import React, { useState } from "react";
import "../styles/NewBuildForm.css"

function NewBuildForm({ setNewBuildObject, renderNewBuild, buildFormClickMake, setBuildFormClickMake }){
    const [newBuildImage, setNewBuildImage] = useState("")
    const [newModel, setNewModel] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newSpec, setNewSpec] = useState("Base")
    const [newEngine, setNewEngine] = useState("")
    const [newHorsePower, setNewHorsePower] = useState("")
    const [newBudget, setNewBudget] = useState(0)

    function newBuildSubmit(e){
        e.preventDefault()
        const newBuildObj = {
            build_image: newBuildImage,
            budget: parseInt(newBudget),
            make_id: parseInt(buildFormClickMake.id),
            model: newModel,
            year: parseInt(newYear),
            spec: newSpec,
            engine: newEngine,
            horsepower: newHorsePower
        }
        fetch(`/builds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBuildObj)
        })
            .then((response) => response.json())
            .then((newBuildData) =>{ 
                renderNewBuild(newBuildData);
                setNewBuildObject(newBuildObj);
                setBuildFormClickMake(null)
            })
    }

    return(
        <div>
            <h2>{buildFormClickMake.company_name}</h2>
            <button onClick={()=>setBuildFormClickMake(null)} className="NewBuildForm-switchMakeButton"> Pick a new Make... </button>
            <form onSubmit={(e)=>newBuildSubmit(e)}>
                <input 
                    onChange={(e) => setNewBuildImage(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Build Image..."
                />
                <input 
                    onChange={(e) => setNewModel(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Model..." 
                />
                <input 
                    onChange={(e) => setNewYear(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Year..." 
                />
                <input 
                    onChange={(e) => setNewSpec(e.target.value)}
                    defaultValue={null}
                    className="NewMakeForm-buildInput"
                    placeholder="Spec..." 
                />
                <input 
                    onChange={(e) => setNewEngine(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Engine..." 
                />
                <input 
                    onChange={(e) => setNewHorsePower(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Horsepower..." 
                />
                <input 
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="NewMakeForm-buildInput"
                    placeholder="Budget..." 
                />
                <button className="NewBuildForm-submit"> Submit Build </button>
            </form>
        </div>
    )
}

export default NewBuildForm