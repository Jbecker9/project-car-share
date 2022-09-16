import React from "react";
import "../styles/NewMakeForm.css"

function NewMakeForm({ setNewMakeName, setNewMakeImage, renderNewMake }){

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
        </div>
    )
}

export default NewMakeForm