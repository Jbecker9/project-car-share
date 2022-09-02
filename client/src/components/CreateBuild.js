import React, { useState } from "react";
import "../styles/CreateBuild.css"

function CreateBuild({ makes, updateBuildsData }){
    const [newBuildImage, setNewBuildImage] = useState("")
    const [newMake, setNewMake] = useState("1")
    const [newModel, setNewModel] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newSpec, setNewSpec] = useState("")
    const [newEngine, setNewEngine] = useState("")
    const [newHorsePower, setNewHorsePower] = useState("")
    const [newBudget, setNewBudget] = useState(0)

    function renderNewBuild(e){
        e.preventDefault()
        const newBuildObj = {
            build_image: newBuildImage,
            budget: newBudget,
            make_id: newMake,
            model: newModel,
            year: newYear,
            spec: newSpec,
            engine: newEngine,
            horsepower: newHorsePower
        }
        fetch("/builds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBuildObj)
        })
            .then((response) => response.json())
            .then((newBuildData) => updateBuildsData(newBuildData))
    }

    return(
        <div className="CreateBuild-div">
            <form onSubmit={(e) => renderNewBuild(e)} >
                Create a New Build
                <input 
                onChange={(e) => setNewBuildImage(e.target.value)}
                className="CreateBuild-input"
                placeholder="Build Image..."
                />
                <select 
                defaultValue={1}
                onChange={(e) => setNewMake(e.target.value)}
                className="CreateBuild-input" 
                >
                    { makes.map((company) => <option key={company.id} value={company.id} >{company.company_name}</option>) }
                </select>
                <input 
                onChange={(e) => setNewModel(e.target.value)}
                className="CreateBuild-input"
                placeholder="Model..." 
                />
                <input 
                onChange={(e) => setNewYear(e.target.value)}
                className="CreateBuild-input"
                placeholder="Year..." 
                />
                <input 
                onChange={(e) => setNewSpec(e.target.value)}
                defaultValue={null}
                className="CreateBuild-input"
                placeholder="Spec..." 
                />
                <input 
                onChange={(e) => setNewEngine(e.target.value)}
                className="CreateBuild-input"
                placeholder="Engine..." 
                />
                <input 
                onChange={(e) => setNewHorsePower(e.target.value)}
                className="CreateBuild-input"
                placeholder="Horsepower..." 
                />
                <input 
                onChange={(e) => setNewBudget(e.target.value)}
                className="CreateBuild-input"
                placeholder="Budget..." 
                />
                <button className="CreateBuild-submit"> Submit Build </button>
            </form>
        </div>
    )
}

export default CreateBuild