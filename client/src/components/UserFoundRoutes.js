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

    function removeUserBuild(deletedBuildArg){
        let newUserMakesObj = userMakes.find((make) => make.id === deletedBuildArg.make_id)
        const userDelBuildIndex = newUserMakesObj.builds.findIndex((build)=>build.id === deletedBuildArg.id)
        newUserMakesObj.builds.splice(userDelBuildIndex, 1)
        if (newUserMakesObj.builds.length < 1){
            const removeUserDelBuildMake = userMakes.filter((make)=> make.id !== deletedBuildArg.make_id)
            setUserMakes(removeUserDelBuildMake)
        } else {}
    }

    function removeBuild(deletedBuild){
       let newDelBuildObj = makes.find((make)=> make.id === deletedBuild.make_id)
       const delBuildIndex = newDelBuildObj.builds.findIndex((build) => build.id === deletedBuild.id)
       newDelBuildObj.builds.splice(delBuildIndex, 1)
       let newMakesArray = makes.filter((make)=> make.id !== deletedBuild.make_id)
       newMakesArray = [...newMakesArray, newDelBuildObj]
       setMakes(newMakesArray.sort((a,b) => a.id -b.id))
       removeUserBuild(deletedBuild)
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
                    <Route path='/' element={<Home userMakes={userMakes} removeBuild={removeBuild} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} updateUserBuildsData={updateUserBuildsData} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes