import React from "react";
import { Routes, Route } from "react-router-dom";
import CommunityMakes from "./CommunityMakes";
import Profile from "./Profile";
import NavBar from "./NavBar";

function Header(){

    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/makes' element={<CommunityMakes />} />
                </Routes>
            </div>
        </div>
    )
}

export default Header