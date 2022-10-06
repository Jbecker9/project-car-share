import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/CreateBuild.css"

function NonExistingMakeBuildForm({ setSelectMakeClick, setDisplayBuildFormClick, setNewBuildObject }){
    const { setOpenGarageBuilds, makeRef, userState } = useContext(UserContext)
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
            model: newModel,
            year: parseInt(newYear),
            spec: newSpec,
            engine: newEngine,
            horsepower: newHorsePower,
            make_id: makeRef.id
        }
        fetch(`/users/${userState.id}/builds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBuildObj)
        })
            .then((response) => response.json())
            .then((newBuildUserData) =>{ 
                setOpenGarageBuilds(newBuildUserData);
                setNewBuildObject(newBuildObj);
                setDisplayBuildFormClick(false);
                setSelectMakeClick(false);
            })
    }


    return(
        <div>
            <h2 className="CreateBuild-h2"> Create a New {makeRef.company_name} </h2>
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
            <button className="CreateBuild-closeForm" onClick={()=>setDisplayBuildFormClick(false)} > Close Form </button>
        </div>
    )
}

export default NonExistingMakeBuildForm