import React from "react";
import "../styles/NewPartForm.css"

function NewPartForm({ renderPartsForm, setRenderPartsForm }){

    return(
        <div>
            <button className="NewPartForm-closeButton" onClick={()=>setRenderPartsForm(!renderPartsForm)} > X </button>
            <form>
                <input className="NewPartForm-input" placeholder="Part Name..."/>
                <input className="NewPartForm-input" placeholder="Part Image..."/>
                <input className="NewPartForm-input" placeholder="Description..."/>
                <button className="NewPartForm-submitButton" > Submit Part </button>
            </form>
        </div>
    )
}

export default NewPartForm