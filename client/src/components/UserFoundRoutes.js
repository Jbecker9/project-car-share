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

    function updateAllMakes(buildArg){
        let newAllMakes = makes.filter((comp)=>comp.id !== buildArg.make.id)
        newAllMakes = [...newAllMakes, buildArg.make]
        setMakes(newAllMakes.sort((a,b) => a.id -b.id))
    }

    function updateUserBuildsData(newBuild){
        updateAllMakes(newBuild)
        if (userMakes.find((comp) => comp.id === newBuild.make.id)){
            let noNewMakeArray = userMakes.filter((comp) => comp.id !== newBuild.make.id)
            noNewMakeArray = [...noNewMakeArray, newBuild.make]
            setUserMakes(noNewMakeArray.sort((a,b) => a.id -b.id))
        } else {
            const findNewUserMakeObj = makes.find((make) => make.id === newBuild.make.id)
            findNewUserMakeObj.builds = [newBuild]
            const newUserMakeArray = [...userMakes, findNewUserMakeObj]
            setUserMakes(newUserMakeArray.sort((a,b) => a.id -b.id))
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