import React, { useState } from "react";
import "../styles/CompanySearch.css"
import CompanySearchCard from "./CompanySearchCard";

function CompanySearch({ makes }){
    const [buildClick, setBuildClick] = useState(null)
    const [companyBuilds, setCompanyBuilds] = useState([])
    // console.log(makes)

    function renderCompany(e){
        e.preventDefault()
        console.log(e.target.company)
        // reRenderBuildCardOnClick()
        // setBuildClick(true)
    }

    function reRenderBuildCardOnClick(){
        if(buildClick){
            setBuildClick(null)
        } else {}
    }

    return(
        <div className="CompanySearch-div">
            { makes.map((company) =>
                <CompanySearchCard companyBuilds={companyBuilds} buildClick={buildClick} setBuildClick={setBuildClick} renderCompany={renderCompany} company={company} key={company.id} makes={makes} />
            ) }    
        </div>
    )
}

export default CompanySearch