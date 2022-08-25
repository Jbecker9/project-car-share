import React from "react";
import "../styles/CompanySearchCard.css"

function CompanySearchCard({ company }){

    return(
        <div className="CompanySearchCard-card">
            <img src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage"/>
        </div>
    )
}

export default CompanySearchCard