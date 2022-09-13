import React from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm(){

    return(
        <div className="NewMakeForm-div">
            <input 
            placeholder="Company Name..."
            className="NewMakeForm-input"
            />
            <input 
            placeholder="Company Logo..."
            className="NewMakeForm-input"
            />
            <button>Submit new Make</button>
        </div>
    )
}

export default NewMakeForm