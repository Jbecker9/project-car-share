import React, { useState } from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm({ makes, setNewBuildObject, renderNewMake, setMakeFormClick }){
    const [newMakeName, setNewMakeName] = useState(null)
    const [newMakeImage, setNewMakeImage] = useState(null)
    const [newBuildImage, setNewBuildImage] = useState("")
    const [newModel, setNewModel] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newSpec, setNewSpec] = useState("Base")
    const [newEngine, setNewEngine] = useState("")
    const [newHorsePower, setNewHorsePower] = useState("")
    const [newBudget, setNewBudget] = useState(0)


    function addNewMakeData(e){
        e.preventDefault()
        const newBuildWithMakeObj = {
            budget: newBudget,
            build_image: newBuildImage,
            engine: newEngine,
            horsepower: newHorsePower,
            model: newModel,
            spec: newSpec,
            year: newYear,
            make_attributes: {
                company_name: newMakeName,
                company_image: newMakeImage
            }
        }
        // console.log(newMakeObj)
        fetch(`/builds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBuildWithMakeObj)
        }).then((response)=>response.json())
            .then((newMakeData)=>{ 
                renderNewMake(newMakeData);
                setMakeFormClick(false);
                setNewBuildObject(newMakeData);
            })
    }

    return(
        <div className="NewMakeForm-div">

            <div  className="NewMakeForm-form">
            <form onSubmit={(e)=>addNewMakeData(e)}>
                <h2> New Make: </h2>
                <div className="NewMakeForm-makeDiv">
                <input 
                onChange={(e)=>setNewMakeName(e.target.value)}
                placeholder="Company Name..."
                className="NewMakeForm-input"
                />
                <input 
                onChange={(e)=>setNewMakeImage(e.target.value)}
                placeholder="Company Logo..."
                className="NewMakeForm-input"
                />
                </div>
                <h2>A New Build for your new Make:</h2>
                <div className="NewMakeForm-buildDiv">
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
                </div>
                <button className="NewMakeForm-submit">Submit Make</button>
            </form>
                <button onClick={()=>setMakeFormClick(false)} className="NewMakeForm-closeForm">Close Form</button>
            </div>
        </div>
    )
}

export default NewMakeForm