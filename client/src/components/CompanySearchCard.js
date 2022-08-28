import React from "react";
import "../styles/CompanySearchCard.css"
import CompanyBuildCardContainer from "./CompanyBuildCardContainer";

function CompanySearchCard({ companyBuilds, company, buildClick, renderCompany }){

    return(
        <div 
        className="CompanySearchCard-card"
        >
            <img onClick={(e) => renderCompany(e)} src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage" />
            { buildClick ? <CompanyBuildCardContainer companyBuilds={companyBuilds} /> : null }
        </div>
    )
}

export default CompanySearchCard