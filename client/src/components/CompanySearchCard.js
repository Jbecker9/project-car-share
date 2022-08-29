import React, { useState } from "react";
import "../styles/CompanySearchCard.css"
import CompanyBuildCardContainer from "./CompanyBuildCardContainer";

function CompanySearchCard({ company }){

    const [buildClick, setBuildClick] = useState(null)
    const [companyBuilds, setCompanyBuilds] = useState([])
    // console.log(makes)

    function renderCompany(e){
        e.preventDefault()
        setCompanyBuilds(company.builds)
        setBuildClick(company.id)
    }

    return(
        <div 
        className="CompanySearchCard-card"
        >
            <img onClick={(e) => renderCompany(e, company)} src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage" />
            { buildClick ? <CompanyBuildCardContainer companyBuilds={companyBuilds} /> : null }
        </div>
    )
}

export default CompanySearchCard