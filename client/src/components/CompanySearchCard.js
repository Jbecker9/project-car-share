import React, { useState } from "react";
import "../styles/CompanySearchCard.css"
import CompanyBuildCardContainer from "./CompanyBuildCardContainer";

function CompanySearchCard({ company }){
    const [buildClick, setBuildClick] = useState(false)

    function renderCompany(e){
        e.preventDefault()
        setBuildClick(!buildClick)
    }

    return(
        <div className="CompanySearchCard-card" >
            <img onClick={(e) => renderCompany(e)} src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage" />
            { buildClick ? <CompanyBuildCardContainer company={company} /> : null }
        </div>
    )
}

export default CompanySearchCard