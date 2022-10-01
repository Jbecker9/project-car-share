import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { UserContext } from "../context/user";
import CommunityMakes from "./CommunityMakes";
import Profile from "./Profile";
import NavBar from "./NavBar";

function LoggedIn(){
    const  {userState, setUserState} = useContext(UserContext)

    function updateAllUserMakes(updatedBuild){
        let newUserState = userState
        let newUserMakesArray = userState.makes.filter((company) => company.id !== updatedBuild.make.id)
        newUserState.makes = [...newUserMakesArray, updatedBuild.make]
        newUserState.makes.sort((a,b) => a.id-b.id)
        setUserState(newUserState)
    }

    function renderNewBuild(newBuild){
        updateAllUserMakes(newBuild)
    }

    function renderNewMake(newBuild){
        renderNewMakeHomePage(newBuild.make)
    }

    function renderNewMakeHomePage(newMake){
        let newUserState = userState
        newUserState.makes = [...userState.makes, newMake]
        newUserState.makes.sort((a,b) => a.id-b.id)
        setUserState(newUserState)
    }


    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Profile renderNewBuild={renderNewBuild} renderNewMake={renderNewMake} />} />
                    <Route path='/makes' element={<CommunityMakes />} />
                </Routes>
            </div>
        </div>
    )
}

export default LoggedIn