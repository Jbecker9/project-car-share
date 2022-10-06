import React from "react";
import { Routes, Route } from "react-router-dom";
import CommunityMakes from "./CommunityMakes";
import Profile from "./Profile";
import NavBar from "./NavBar";
import CommunityBuilds from "./CommunityBuilds";

function NavRoutes({ userState, setUserState }){

    return(
        <div>
            <div>
                <NavBar userState={userState} setUserState={setUserState} />
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/makes' element={<CommunityMakes />} />
                    <Route path='/builds' element={<CommunityBuilds />} />
                </Routes>
            </div>
        </div>
    )
}

export default NavRoutes