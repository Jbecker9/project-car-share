import React from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm({ setAddNewMakeClick }){

    return(
        <div className="NewMakeForm-div">
            <form>
            <input 
            placeholder="Company Name..."
            className="NewMakeForm-input"
            />
            <input 
            placeholder="Company Logo..."
            className="NewMakeForm-input"
            />
            <button className="NewMakeForm-submit">Submit new Make</button>
            </form>
            <button onClick={()=>setAddNewMakeClick(null)} className="NewMakeForm-closeForm"> Close Form </button>
        </div>
    )
}

export default NewMakeForm