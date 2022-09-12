import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import CreateBuild from "./CreateBuild";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])
    const [userMakes, setUserMakes] = useState(user.makes)

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
    },[])

    // console.log(userMakes)

    function updateAllMakes(buildArg){
        let newMakesArray = makes.filter((company) => company.id !== buildArg.make.id)
        newMakesArray = [...newMakesArray, buildArg.make]
        newMakesArray.sort((a,b)=>a.id-b.id)
        setMakes(newMakesArray)
    }

    function updateAllUserMakes(buildArg){
        let newUserMakesArray = userMakes.filter((company) => company.id !== buildArg.make.id)
        newUserMakesArray = [...newUserMakesArray, buildArg.make]
        newUserMakesArray.sort((a,b) => a.id-b.id)
        setUserMakes(newUserMakesArray)
    }

    function renderNewBuild(newBuild){
        updateAllMakes(newBuild)
        updateAllUserMakes(newBuild)
    }

    function renderUpdateBuild(updatedBuild){
        updateAllMakes(updatedBuild)
        updateAllUserMakes(updatedBuild)
    }


    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home userMakes={userMakes} makes={makes} renderUpdateBuild={renderUpdateBuild} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} renderNewBuild={renderNewBuild} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes