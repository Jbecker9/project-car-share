import React, { useState } from "react";
import "../styles/SearchBuilds.css"
import CompanySearch from "./CompanySearch";
import NameSearch from "./NameSearch";


function SearchBuilds({ makes }){
    const [isNameFilterActive, setisNameFilterActive] = useState(false)
    const [isCompanyFilterActive, setisCompanyFilterActive] = useState(false)
    const [isEngineFilterActive, setisEngineFilterActive] = useState(false)

    function nameFilterButtonActive(e){
        e.preventDefault()
        setisCompanyFilterActive(false)
        setisEngineFilterActive(false)
        setisNameFilterActive(true)
    }
    
    function companyFilterButtonActive(e){
        e.preventDefault()
        setisEngineFilterActive(false)
        setisNameFilterActive(false)
        setisCompanyFilterActive(true)
    }

    function engineFilterButtonActive(e){
        e.preventDefault()
        setisEngineFilterActive(true)
        setisNameFilterActive(false)
        setisCompanyFilterActive(false)
    }

    return(
        <div>
            <div className="SearchBuilds-filterBar">
                <h3 className="SearchBuilds-filterTitle">Filter By:</h3>
                <button 
                    className={ isNameFilterActive ? "SearchBuilds-filterButtonActive" : "SearchBuilds-filterButton"} 
                    onClick={(e) => nameFilterButtonActive(e)}
                >
                        Name
                </button>
                <button 
                    className={ isCompanyFilterActive ? "SearchBuilds-filterButtonActive" : "SearchBuilds-filterButton"} 
                    onClick={(e) => companyFilterButtonActive(e)}
                >
                        Company
                </button>
                <button 
                    className={ isEngineFilterActive ? "SearchBuilds-filterButtonActive" : "SearchBuilds-filterButton"} 
                    onClick={(e) => engineFilterButtonActive(e)}
                >
                    Engine
                </button>
            </div>
            <div className="SearchBuilds-searchDiv">
            { isNameFilterActive ? <NameSearch /> : null }
            { isCompanyFilterActive ? <CompanySearch makes={makes} /> : null }
            </div>
        </div>
    )
}

export default SearchBuilds