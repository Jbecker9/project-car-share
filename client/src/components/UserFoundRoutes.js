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

    function updateUserBuildsData(newBuild){
        // setNewBuildGlobal(newBuild)
        if (userMakes.find((comp) => comp.id === newBuild.make.id)){
            let noNewMakeArray = userMakes.filter((comp) => comp.id !== newBuild.make.id)
            const updatedMake = userMakes.filter((comp) => comp.id === newBuild.make.id)
            updatedMake[0].builds = [...updatedMake[0].builds, newBuild]
            noNewMakeArray = [...noNewMakeArray, updatedMake[0]]
            noNewMakeArray.sort()
            setUserMakes(noNewMakeArray.sort((a,b) => a.id -b.id))
        } else {
            const findNewUserMakeObj = makes.find((make) => make.id === newBuild.make.id)
            findNewUserMakeObj.builds = [newBuild]
            const newUserMakeArray = [...userMakes, findNewUserMakeObj]
            setUserMakes(newUserMakeArray)
        }
    }


    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home userMakes={userMakes} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} updateUserBuildsData={updateUserBuildsData} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes