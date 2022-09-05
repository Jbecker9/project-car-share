import React from "react";
import "../styles/SearchBuilds.css"
import CompanySearch from "./CompanySearch";


function SearchBuilds({ makes, builds }){

    return(
        <div>
            <div className="SearchBuilds-searchDiv">
            <CompanySearch makes={makes} builds={builds} />
            </div>
        </div>
    )
}

export default SearchBuilds