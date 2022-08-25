import React from "react";
import "../styles/NameSearch.css"

function NameSearch(){

    return(
        <div>
            <input 
            className="NameSearch-searchInput"
            type="text"
            placeholder="Search Build by Name..."
            />
        </div>
    )
}

export default NameSearch