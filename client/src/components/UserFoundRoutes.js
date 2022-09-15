import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import RenderForms from "./RenderForms";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])
    const [userMakes, setUserMakes] = useState(user.makes.sort((a,b)=> a.id-b.id))

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
    },[])

    function updateAllMakes(buildArg){
        let newMakesArray = makes.filter((company) => company.id !== buildArg.make.id)
        newMakesArray = [...newMakesArray, buildArg.make]
        newMakesArray.sort((a,b)=>a.id-b.id)
        setMakes(newMakesArray)
    }

    // buildArg => build
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

    function renderRemovedBuild(removedBuild){
        updateAllMakes(removedBuild)
        updateAllUserMakes(removedBuild)
        if (removedBuild.make.builds.length === 0){
            let removeEmptyMakeArray = userMakes.filter((company) => company.id !== removedBuild.make.id)
            setUserMakes(removeEmptyMakeArray)
        } else {}
    }

    function showNewMakeList(addedMake){
        let addedMakeArray = [...makes, addedMake]
        setMakes(addedMakeArray)
    }


    return(
        <div>
            <div>
                <NavBar setUser={setUser}/>
            </div>
            <div className="UserFoundRoutes-routesDiv">
                <Routes>
                    <Route path='/' element={<Home userMakes={userMakes} makes={makes} renderUpdateBuild={renderUpdateBuild} renderRemovedBuild={renderRemovedBuild} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/Create' element={<RenderForms showNewMakeList={showNewMakeList} makes={makes} renderNewBuild={renderNewBuild} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes