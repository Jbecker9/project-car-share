import React from "react";
import "../styles/CreateBuild.css"

function CreateBuild({ makes }){

    return(
        <div className="CreateBuild-div">
            <form>
                <input placeholder="Build Name..."/>
                <select>
                    { makes.map((company) => <option key={company.id} value={company.id} >{company.company_name}</option>) }
                </select>
                <input placeholder="Model..." />
                <input placeholder="Year..." />
                <input placeholder="Spec..." />
                <input placeholder="Engine..." />
                <input placeholder="Horsepower..." />
            </form>
        </div>
    )
}

export default CreateBuild