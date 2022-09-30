import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import CommunityMakes from "./CommunityMakes";
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){

    function updateAllUserMakes(updatedBuild){
        let newUserState = user
        let newUserMakesArray = user.makes.filter((company) => company.id !== updatedBuild.make.id)
        newUserState.makes = [...newUserMakesArray, updatedBuild.make]
        newUserState.makes.sort((a,b) => a.id-b.id)
        setUser(newUserState)
    }

    function renderNewBuild(newBuild){
        updateAllUserMakes(newBuild)
    }

    function renderUpdateBuild(updatedBuild){
        updateAllUserMakes(updatedBuild)
    }

    function renderRemovedBuild(userAfterBuildDelete){
        userAfterBuildDelete.makes.sort((a,b) => a.id-b.id)
        setUser(userAfterBuildDelete)
    }

    function renderNewMake(newBuild){
        renderNewMakeHomePage(newBuild.make)
    }

    function renderNewMakeHomePage(newMake){
        let newUserState = user
        newUserState.makes = [...user.makes, newMake]
        newUserState.makes.sort((a,b) => a.id-b.id)
        setUser(newUserState)
    }


    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home renderNewBuild={renderNewBuild} renderNewMake={renderNewMake} user={user} renderUpdateBuild={renderUpdateBuild} renderRemovedBuild={renderRemovedBuild} />} />
                    <Route path='/makes' element={<CommunityMakes />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes