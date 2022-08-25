import React from "react";
import "../styles/NameSearch.css"

function NameSearch(){

    return(
        <div>
            <form>
                <input 
                className="NameSearch-searchInput"
                type="text"
                placeholder="Search Build by Name..."
                />
            </form>
        </div>
    )
}

export default NameSearch