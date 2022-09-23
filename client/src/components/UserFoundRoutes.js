import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])
    const [userMakes, setUserMakes] = useState(user.makes.sort((a,b)=> a.id-b.id))
    const [existingMakesForNewBuild, setExistingMakesForNewBuild] = useState(makes.filter((globalCompany)=>{
        return !user.makes.some(function(userCompany){
            return globalCompany.id === userCompany.id;  
        });
    }))

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>{setMakes(companyData);
                setExistingMakesForNewBuild(companyData.filter((globalCompany)=>{
                    return !user.makes.some(function(userCompany){
                        return globalCompany.id === userCompany.id;  
                    })
                }))
            })
    },[user])

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
                    <Route path='/' element={<Home existingMakesForNewBuild={existingMakesForNewBuild} renderNewBuild={renderNewBuild} renderNewMake={renderNewMake} user={user} makes={makes} renderUpdateBuild={renderUpdateBuild} renderRemovedBuild={renderRemovedBuild} />} />
                    <Route path='/makes' element={<SearchBuilds makes={makes} />} />
                </Routes>
            </div>
        </div>
    )
}

export default UserFoundRoutes