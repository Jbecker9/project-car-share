import React, { useState } from "react";
import "../styles/CreateBuild.css"

function CreateBuildForm({ make, setNewBuildObject, renderNewBuild, setCreateBuildFormClick }){
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
            make_id: parseInt(make.id),
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
                setCreateBuildFormClick(false)
            })
    }


    return(
        <div>
            <h2 className="CreateBuild-h2"> Create a New {make.company_name} </h2>
            <form onSubmit={(e) => newBuildSubmit(e)} >
                <input 
                onChange={(e) => setNewBuildImage(e.target.value)}
                className="CreateBuild-input"
                placeholder="Build Image..."
                />
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
            <button className="CreateBuild-closeForm" onClick={()=>setCreateBuildFormClick(false)} > Close Form </button>
        </div>
    )
}

export default CreateBuildForm