import React, { useState } from "react";
import "../styles/CompanySearchCard.css"
import CompanyBuildCardContainer from "./CompanyBuildCardContainer";

function CompanySearchCard({ company, builds }){
    const [buildClick, setBuildClick] = useState(false)
    const [companyBuilds, setCompanyBuilds] = useState([])
    // console.log(makes)

    function renderCompany(e){
        e.preventDefault()
        const companyBuildArray = builds.filter((build) => build.make.id === company.id)
        setCompanyBuilds(companyBuildArray)
        setBuildClick(!buildClick)
    }

    return(
        <div className="CompanySearchCard-card" >
            <img onClick={(e) => renderCompany(e, company)} src={company.company_image} alt="Company Logo" className="CompanySearchCard-cardImage" />
            { buildClick ? <CompanyBuildCardContainer companyBuilds={companyBuilds} /> : null }
        </div>
    )
}

export default CompanySearchCard