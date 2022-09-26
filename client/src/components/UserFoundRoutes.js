import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
    },[])

    function updateAllMakes(build){
        let newMakesArray = makes.filter((company) => company.id !== build.make.id)
        newMakesArray = [...newMakesArray, build.make]
        newMakesArray.sort((a,b)=>a.id-b.id)
        setMakes(newMakesArray)
    }

    // buildArg => build
    function updateAllUserMakes(build){
        let newUserState = user
        let newUserMakesArray = user.makes.filter((company) => company.id !== build.make.id)
        newUserState.makes = [...newUserMakesArray, build.make]
        newUserState.makes.sort((a,b) => a.id-b.id)
        setUser(newUserState)
        // setUserMakes(newUserMakesArray)
    }

    function renderNewBuild(newBuild){
        updateAllMakes(newBuild)
        updateAllUserMakes(newBuild)
    }

    function renderUpdateBuild(updatedBuild){
        updateAllMakes(updatedBuild)
        updateAllUserMakes(updatedBuild)
    }

    function renderRemovedBuild(removedBuild){
        let newUserState = user
        console.log(removedBuild)
        newUserState.makes = removedBuild.makes
        setUser(newUserState)
    }

    function renderNewMake(newBuild){
        renderNewMakeAllBuildsByMake(newBuild.make)
        renderNewMakeHomePage(newBuild.make)
    }

    function renderNewMakeAllBuildsByMake(newMake){
        let addedMakeArray = [...makes, newMake.make]
        addedMakeArray.sort((a,b) => a.id-b.id)
        setMakes(addedMakeArray)
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
                    <Route path='/' element={<Home renderNewBuild={renderNewBuild} renderNewMake={renderNewMake} user={user} makes={makes} renderUpdateBuild={renderUpdateBuild} renderRemovedBuild={renderRemovedBuild} />} />
                    <Route path='/makes' element={<SearchBuilds makes={makes} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes