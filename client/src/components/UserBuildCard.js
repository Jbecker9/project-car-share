import React, { useState } from "react";
import "../styles/UserBuildCard.css"
import NewPartForm from "./NewPartForm";

function UserBuildCard({ build }){
    const [renderPartsClick, setRenderPartsClick] = useState(false)
    const [renderPartsForm, setRenderPartsForm] = useState(false)

    return(
        <div className="UserBuildCard-div" onClick={()=>setRenderPartsClick(!renderPartsClick)} >
            <h2> {build.year} {build.model} {build.spec} </h2>
            <h3> {build.horsepower}hp {build.engine} </h3>
            <img src={build.build_image} alt="User Vehicle" className="UserBuildCard-img" />
           { renderPartsClick ? <NewPartForm /> : <button className="UserBuildCard-partFormButton" onClick={() => setRenderPartsForm(!renderPartsForm)}> Add a part </button> }
        </div>
    )
}

export default UserBuildCard