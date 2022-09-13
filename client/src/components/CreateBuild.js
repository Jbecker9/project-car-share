import React, { useState } from "react";
import "../styles/CreateBuild.css"
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import NewMakeForm from "./NewMakeForm";

function CreateBuild({ makes, renderNewBuild }){
    const [newBuildImage, setNewBuildImage] = useState("")
    const [newMake, setNewMake] = useState(1)
    const [newModel, setNewModel] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newSpec, setNewSpec] = useState("Base")
    const [newEngine, setNewEngine] = useState("")
    const [newHorsePower, setNewHorsePower] = useState("")
    const [newBudget, setNewBudget] = useState(0)
    const [newBuildObject, setNewBuildObject] = useState(null)
    const [addNewMakeClick, setAddNewMakeClick] = useState(null)
 
    function addNewBuildData(e){
        e.preventDefault()
        const newBuildObj = {
            build_image: newBuildImage,
            budget: parseInt(newBudget),
            make_id: parseInt(newMake),
            model: newModel,
            year: parseInt(newYear),
            spec: newSpec,
            engine: newEngine,
            horsepower: newHorsePower
        }
        fetch(`/makes/${newMake}/builds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBuildObj)
        })
            .then((response) => response.json())
            .then((newBuildData) =>{ 
                renderNewBuild(newBuildData);
                setNewBuildObject(newBuildObj)
            })
    }

    return(
        <div className="CreateBuild-div">
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            <form onSubmit={(e) => addNewBuildData(e)} >
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
            { addNewMakeClick ? <NewMakeForm /> : <button className="CreateBuild-newMake" onClick={()=>setAddNewMakeClick(true)}> Add a new Make </button> }
        </div>
    )
}

export default CreateBuild