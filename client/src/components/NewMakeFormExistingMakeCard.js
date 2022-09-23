import React from "react";
import "../styles/NewMakeFormFormExistingMakeCard.css"

function NewMakeFormFormExistingMakeCard({ renderBuildForm, company }){

    return(
        <div className="NewMakeFormFormExistingMakeCard-div">
            <h4 className="NewMakeFormFormExistingMakeCard-h4" onClick={()=>renderBuildForm(company)}>{company.company_name}</h4>
        </div>
    )
}

export default NewMakeFormFormExistingMakeCard