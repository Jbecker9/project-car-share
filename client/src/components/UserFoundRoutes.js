import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import CreateBuild from "./CreateBuild";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser }){
    const [makes, setMakes] = useState([])

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
        },[])

    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes