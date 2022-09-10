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

    function updateNewUserBuildsData(newBuild){
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

    function renderHomeUpdateBuild(updatedBuildArg){
        // console.log(updatedBuildArg)
        const findUpdatedMake = userMakes.some((comp)=> comp.id === updatedBuildArg.make.id)
        // const newUserMakeArray = userMakes.filter((comp)=> comp.id === updatedBuidArg.make.id)
        console.log(findUpdatedMake)
        if (!findUpdatedMake){
            console.log("Hello")
        }
    }

    function renderUpdateBuild(updatedBuild, referenceBuild){
        renderHomeUpdateBuild(updatedBuild)
        let newUpdatedMakeArray = makes.filter((comp)=> comp.id !== updatedBuild.make.id)
        newUpdatedMakeArray = [...newUpdatedMakeArray, updatedBuild.make]
        setMakes(newUpdatedMakeArray.sort((a,b) => a.id -b.id))
        if (referenceBuild.make_id !== parseInt(updatedBuild.make.id)){
            let updateBuildAllMakes = newUpdatedMakeArray.filter((comp)=> comp.id !== referenceBuild.make_id)
            let updateBuildMake = makes.find((comp)=> comp.id === referenceBuild.make_id)
            const updateBuildIndex = updateBuildMake.builds.findIndex((build)=> build.id !== referenceBuild.id)
            updateBuildMake.builds.splice(updateBuildIndex, 1)
            updateBuildAllMakes = [...updateBuildAllMakes, updateBuildMake]
            setMakes(updateBuildAllMakes.sort((a,b) => a.id -b.id))
        } else {
        }
    }


    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home userMakes={userMakes} removeBuild={removeBuild} makes={makes} renderUpdateBuild={renderUpdateBuild} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/createbuild' element={<CreateBuild makes={makes} updateNewUserBuildsData={updateNewUserBuildsData} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes