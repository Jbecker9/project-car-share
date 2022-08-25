import React from "react";
import "../styles/CompanySearch.css"
import CompanySearchCard from "./CompanySearchCard";

function CompanySearch({ makes }){
    // console.log(makes)

    return(
        <div className="CompanySearch-div">
            { makes.map((company) =>
                <CompanySearchCard company={company} key={company.id}/>
            ) }    
        </div>
    )
}

export default CompanySearch