import React, { useState } from "react";
import "../styles/updateBuildForm.css"
import "../styles/CreateBuild.css"

function UpdateBuildForm({ build, renderUpdateBuild, setUpdateFormClick }){
    const [updateBuildImage, setUpdateBuildImage] = useState(build.build_image)
    const [updateBuildModel, setUpdateBuildModel] = useState(build.model)
    const [updateBuildYear, setUpdateBuildYear] = useState(build.year)
    const [updateBuildSpec, setUpdateBuildSpec] = useState(build.spec)
    const [updateBuildEngine, setUpdateBuildEngine] = useState(build.engine)
    const [updateBuildHorsepower, setUpdateBuildHorsepower] = useState(build.horsepower)
    const [updateBuildBudget, setUpdateBuildBudget] = useState(build.budget)
    
    function addUpdateBuildData(e){
        e.preventDefault()
        const updateBuildObj = {
            build_image: updateBuildImage,
            budget: parseInt(updateBuildBudget),
            model: updateBuildModel,
            year: parseInt(updateBuildYear),
            spec: updateBuildSpec,
            engine: updateBuildEngine,
            horsepower: updateBuildHorsepower
        }
        fetch(`makes/${build.make_id}/builds/${build.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBuildObj)
        }).then((response)=>response.json())
            .then((updateBuildData)=>{ 
                renderUpdateBuild(updateBuildData);
                setUpdateFormClick(false)
            })
    }

    return(
        <div>
            <form onSubmit={(e)=>addUpdateBuildData(e)} >
                <input 
                onChange={(e) => setUpdateBuildImage(e.target.value)}
                className="CreateBuild-input"
                placeholder="Image..."
                />
                <input 
                onChange={(e) => setUpdateBuildModel(e.target.value)}
                className="CreateBuild-input"
                placeholder={build.model} 
                />
                <input 
                onChange={(e) => setUpdateBuildYear(e.target.value)}
                className="CreateBuild-input"
                placeholder={build.year} 
                />
                <input 
                onChange={(e) => setUpdateBuildSpec(e.target.value)}
                defaultValue={null}
                className="CreateBuild-input"
                placeholder={build.spec} 
                />
                <input 
                onChange={(e) => setUpdateBuildEngine(e.target.value)}
                className="CreateBuild-input"
                placeholder={build.engine}
                />
                <input 
                onChange={(e) => setUpdateBuildHorsepower(e.target.value)}
                className="CreateBuild-input"
                placeholder={build.horsepower + "hp"}
                />
                <input 
                onChange={(e) => setUpdateBuildBudget(e.target.value)}
                className="CreateBuild-input"
                placeholder={"$"+build.budget}
                />
                <button className="CreateBuild-submit"> Submit Build </button>
            </form>
        </div>
    )
}

export default UpdateBuildForm