import React, { useContext, useState } from "react";
import "../styles/updateBuildForm.css"
import "../styles/CreateBuild.css"
import { UserContext } from "../context/user";

function UpdateBuildForm({ updateFormBuild, renderUpdateBuild, setUpdateFormBuild }){
    const { setUserState } = useContext(UserContext)
    const [updateBuildImage, setUpdateBuildImage] = useState(updateFormBuild.build_image)
    const [updateBuildModel, setUpdateBuildModel] = useState(updateFormBuild.model)
    const [updateBuildYear, setUpdateBuildYear] = useState(updateFormBuild.year)
    const [updateBuildSpec, setUpdateBuildSpec] = useState(updateFormBuild.spec)
    const [updateBuildEngine, setUpdateBuildEngine] = useState(updateFormBuild.engine)
    const [updateBuildHorsepower, setUpdateBuildHorsepower] = useState(updateFormBuild.horsepower)
    const [updateBuildBudget, setUpdateBuildBudget] = useState(updateFormBuild.budget)
    
    function addUpdateBuildData(e){
        e.preventDefault()
        const updateBuildObj = {
            build_image: updateBuildImage,
            budget: parseInt(updateBuildBudget),
            model: updateBuildModel,
            year: updateBuildYear,
            spec: updateBuildSpec,
            engine: updateBuildEngine,
            horsepower: updateBuildHorsepower
        }
        fetch(`makes/${updateFormBuild.make_id}/builds/${updateFormBuild.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBuildObj)
        }).then((response)=>response.json())
            .then((updatedUserData)=>{ 
                setUserState(updatedUserData);
                setUpdateFormBuild(false)
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
                placeholder={updateFormBuild.model} 
                />
                <input 
                onChange={(e) => setUpdateBuildYear(e.target.value)}
                className="CreateBuild-input"
                placeholder={updateFormBuild.year} 
                />
                <input 
                onChange={(e) => setUpdateBuildSpec(e.target.value)}
                defaultValue={null}
                className="CreateBuild-input"
                placeholder={updateFormBuild.spec} 
                />
                <input 
                onChange={(e) => setUpdateBuildEngine(e.target.value)}
                className="CreateBuild-input"
                placeholder={updateFormBuild.engine}
                />
                <input 
                onChange={(e) => setUpdateBuildHorsepower(e.target.value)}
                className="CreateBuild-input"
                placeholder={updateFormBuild.horsepower + "hp"}
                />
                <input 
                onChange={(e) => setUpdateBuildBudget(e.target.value)}
                className="CreateBuild-input"
                placeholder={"$"+updateFormBuild.budget}
                />
                <button className="CreateBuild-submit"> Submit Build </button>
            </form>
            <button className="UpdateBuildForm-closeFormButton"> Close Form </button>
        </div>
    )
}

export default UpdateBuildForm