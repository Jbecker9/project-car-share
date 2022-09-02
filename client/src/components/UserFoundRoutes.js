import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import CreateBuild from "./CreateBuild";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])
    const [builds, setBuilds] = useState([])

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
    },[])

    useEffect(()=>{
        fetch("/builds")
            .then((response)=>response.json())
            .then((buildsData)=>setBuilds(buildsData))
    },[])

    function updateBuildsData(newBuild){
        const newBuildData = [...builds, newBuild]
        setBuilds(newBuildData)
    }

    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home user={user} makes={makes} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} updateBuildsData={updateBuildsData} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes