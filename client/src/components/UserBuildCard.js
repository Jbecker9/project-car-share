import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/UserBuildCard.css"
import UpdateBuildForm from "./UpdateBuildForm";

function UserBuildCard({makes, build }){
    const { setOpenGarageBuilds, userState } = useContext(UserContext)
    const [updateFormBuild, setUpdateFormBuild] = useState(false)

    function deleteBuild(){
        fetch(`/users/${userState.id}/builds/${build.id}`, {
            method: "DELETE"
        }).then((response)=>response.json())
            .then((deletedBuildMakeData) => setOpenGarageBuilds(deletedBuildMakeData))
    }

    return(
        <div className="UserBuildCard-div" >
            <img src={build.make.company_image} alt="vehicle comapny logo" className="UserBuildCard-companyLogos" />
            <h1>{build.make.company_name}</h1>
            <h2> {build.year} {build.model} {build.spec} </h2>
            <h3>Budget: ${build.budget} </h3>
            <h3> {build.horsepower}hp {build.engine} </h3>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
            <button onClick={()=>setUpdateFormBuild(build)} className="UserBuildCard-updateButton"> Update Build </button>
            <button onClick={()=>deleteBuild()} className="UserBuildCard-deleteButton"> Delete Build </button>
            { updateFormBuild ? <UpdateBuildForm makes={makes} setUpdateFormBuild={setUpdateFormBuild} updateFormBuild={updateFormBuild} /> : null }
        </div>
    )
}

export default UserBuildCard