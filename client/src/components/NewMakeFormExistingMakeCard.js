import React from "react";
import "../styles/NewMakeFormFormExistingMakeCard.css"

function NewMakeFormFormExistingMakeCard({ setBuildFormClickMake, company }){

    return(
        <div className="NewMakeFormFormExistingMakeCard-div">
            <h4 className="NewMakeFormFormExistingMakeCard-h4" onClick={()=>setBuildFormClickMake(company)}>{company.company_name}</h4>
        </div>
    )
}

export default NewMakeFormFormExistingMakeCard