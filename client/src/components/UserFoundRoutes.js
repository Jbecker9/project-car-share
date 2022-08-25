import React from "react";
import { Routes, Route } from "react-router-dom"
import CreateBuild from "./CreateBuild";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser }){

    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<SearchBuilds />} />
                    <Route path='/createbuild' element={<CreateBuild />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes