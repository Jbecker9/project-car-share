import React from "react";
import "../styles/CompanySearchCard.css"

function CompanySearchCard({ company }){


    function renderCompany(e){
        e.preventDefault()
        console.log(company)
    }

    return(
        <div 
        className="CompanySearchCard-card"
        >
            <img onClick={(e) => renderCompany(e)} src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage" />
        </div>
    )
}

export default CompanySearchCard