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
        updateAllMakes(removedBuild)
        updateAllUserMakes(removedBuild)
        if (removedBuild.make.builds.length === 0){
            let removeEmptyMakeArray = userMakes.filter((company) => company.id !== removedBuild.make.id)
            setUserMakes(removeEmptyMakeArray)
        } else {}
    }

    function renderNewMake(addedMake){
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
                    <Route path='/' element={<Home renderNewBuild={renderNewBuild} renderNewMake={renderNewMake} user={user} makes={makes} renderUpdateBuild={renderUpdateBuild} renderRemovedBuild={renderRemovedBuild} />} />
                    <Route path='/search' element={<SearchBuilds makes={makes} />} />
                    <Route path='/Create' element={<RenderForms makes={makes} renderNewBuild={renderNewBuild} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes