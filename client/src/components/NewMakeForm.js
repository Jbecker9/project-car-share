import React, { useState } from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm({ setAddNewMakeClick, showNewMakeList }){
    const [newMakeName, setNewMakeName] = useState("")
    const [newMakeImage, setNewMakeImage] = useState("")

    function addNewMakeData(e){
        e.preventDefault()
        const newMakeObj = {
            company_name: newMakeName,
            company_image: newMakeImage
        }
        // console.log(newMakeObj)
        fetch(`/makes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMakeObj)
        }).then((response)=>response.json())
            .then((newMakeData)=> showNewMakeList(newMakeData))
    }

    return(
        <div className="NewMakeForm-div">
            <form onSubmit={(e)=>addNewMakeData(e)} >
            <input 
            onChange={(e)=>setNewMakeName(e.target.value)}
            placeholder="Company Name..."
            className="NewMakeForm-input"
            />
            <input 
            onChange={(e)=>setNewMakeImage(e.target.value)}
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