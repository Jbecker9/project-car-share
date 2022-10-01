import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/UserBuildCard.css"
import UpdateBuildForm from "./UpdateBuildForm";

function UserBuildCard({makes, build }){
    const { setUserState } = useContext(UserContext)
    const [updateFormBuild, setUpdateFormBuild] = useState(false)

    function deleteBuild(){
        fetch(`/makes/${build.make_id}/builds/${build.id}`, {
            method: "DELETE"
        }).then((response)=>response.json())
            .then((deletedBuildMakeData) => setUserState(deletedBuildMakeData))
    // console.log(build)
    }


    return(
        <div className="UserBuildCard-div" >
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