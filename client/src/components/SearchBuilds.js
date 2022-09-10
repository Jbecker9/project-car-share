import React from "react";
import "../styles/SearchBuilds.css"
import CompanySearch from "./CompanySearch";


function SearchBuilds({ makes }){

    return(
        <div>
            <div className="SearchBuilds-searchDiv">
            <CompanySearch makes={makes} />
            </div>
        </div>
    )
}

export default SearchBuilds