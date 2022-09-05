import React from "react";
import "../styles/CompanySearch.css"
import CompanySearchCard from "./CompanySearchCard";

function CompanySearch({ makes, builds }){

    return(
        <div className="CompanySearch-div">
            { makes.map((company) =>
                <CompanySearchCard builds={builds} company={company} key={company.id} makes={makes} />
            ) }
        </div>
    )
}

export default CompanySearch