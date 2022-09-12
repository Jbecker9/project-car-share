import React, { useState } from "react";
import "../styles/updateBuildForm.css"

function UpdateBuildForm({ build, makes, renderUpdateBuild, setUpdateFormClick }){
    const [updateBuildImage, setUpdateBuildImage] = useState(build.build_image)
    const [updateBuildMake, setUpdateBuildMake] = useState(build.make_id)
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
            make_id: parseInt(updateBuildMake),
            model: updateBuildModel,
            year: parseInt(updateBuildYear),
            spec: updateBuildSpec,
            engine: updateBuildEngine,
            horsepower: updateBuildHorsepower
        }
        fetch(`/builds/${build.id}`,{
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
                <select 
                defaultValue={build.make_id}
                onChange={(e) => setUpdateBuildMake(e.target.value)}
                className="CreateBuild-input" 
                >
                    { makes.map((company) => <option key={company.id} value={company.id} > {company.company_name} </option>) }
                </select>
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