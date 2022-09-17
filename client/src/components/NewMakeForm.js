import React, { useState } from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm({ renderNewMake, setMakeFormClick }){
    const [newMakeName, setNewMakeName] = useState(null)
    const [newMakeImage, setNewMakeImage] = useState(null)

    // function addNewMakeData(e){
    //     e.preventDefault()
    //     const newMakeObj = {
    //         company_name: newMakeName,
    //         company_image: newMakeImage
    //     }
    //     // console.log(newMakeObj)
    //     fetch(`/makes`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newMakeObj)
    //     }).then((response)=>response.json())
    //         .then((newMakeData)=>renderNewMake(newMakeData))
    // }

    return(
        <div className="NewMakeForm-div">
            <form>
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
                <button className="NewMakeForm-submit">Submit Make</button>
            </form>
                <button onClick={()=>setMakeFormClick(false)} className="NewMakeForm-closeForm">Close Form</button>
        </div>
    )
}

export default NewMakeForm