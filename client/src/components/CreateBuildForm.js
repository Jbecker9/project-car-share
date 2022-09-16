import React, { useState } from "react";
import "../styles/CreateBuild.css"
import NewMakeForm from "./NewMakeForm";

function CreateBuildForm({ renderNewMake, makes, setNewBuildObject, renderNewBuild, setCreateBuildFormClick }){
    const [newBuildImage, setNewBuildImage] = useState("")
    const [newBuildMake, setNewBuildMake] = useState("Add a New Make...")
    const [newModel, setNewModel] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newSpec, setNewSpec] = useState("Base")
    const [newEngine, setNewEngine] = useState("")
    const [newHorsePower, setNewHorsePower] = useState("")
    const [newBudget, setNewBudget] = useState(0)
    const [newMakeName, setNewMakeName] = useState(null)
    const [newMakeImage, setNewMakeImage] = useState(null)

    function addNewBuildData(){
        const newBuildObj = {
            build_image: newBuildImage,
            budget: parseInt(newBudget),
            make_id: parseInt(newBuildMake),
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

    function addNewMakeData(){
        const newMakeObj = {
            company_name: newMakeName,
            company_image: newMakeImage,
            builds: [{
                build_image: newBuildImage,
                budget: parseInt(newBudget),
                model: newModel,
                year: parseInt(newYear),
                spec: newSpec,
                engine: newEngine,
                horsepower: newHorsePower
            }]
        }
        fetch(`/makes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMakeObj)
        }).then((response)=>response.json())
            .then((newMakeData)=>renderNewMake(newMakeData))
    }

    function formSubmit(e){
        e.preventDefault()
        if (newBuildMake === "Add a New Make..."){
            addNewMakeData()
        } 
        else {
            addNewBuildData()
        }
    }

    return(
        <div>
            <h2 className="CreateBuild-h2"> Create a New Build </h2>
            <form onSubmit={(e) => formSubmit(e)} >
                <input 
                onChange={(e) => setNewBuildImage(e.target.value)}
                className="CreateBuild-input"
                placeholder="Build Image..."
                />
                <select
                onChange={(e) => setNewBuildMake(e.target.value)}
                className="CreateBuild-input" 
                >
                    <option> Add a New Make... </option>
                    { makes.map((company) => <option key={company.id} value={parseInt(company.id)} >{company.company_name}</option>) }
                </select>
                { newBuildMake !== "Add a New Make..." ? null : <NewMakeForm setNewMakeImage={setNewMakeImage} setNewMakeName={setNewMakeName}/> }
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