import React from "react";
import "../styles/BuildCreatedConfirmed.css"

function BuildCreatedConfirmed({ newBuildObject, setNewBuildObject }){

    return(
        <div className="BuildCreatedConfirmed-div">
            {/* <h1>{newBuildObject.make.company_name}</h1> */}
            <h2>{newBuildObject.model} Added!</h2>
            <img alt="new users build" src={newBuildObject.build_image} className="BuildCreatedConfirmed-img" />
            <button onClick={()=>setNewBuildObject(null)} className="BuildCreatedConfirmed-button"> Close </button>
        </div>
    )
}

export default BuildCreatedConfirmed