import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom"
import CreateBuild from "./CreateBuild";
import SearchBuilds from "./SearchBuilds"
import Home from "./Home";
import NavBar from "./NavBar";

function UserFoundRoutes({ setUser, user }){
    const [makes, setMakes] = useState([])
    const [userMakes, setUserMakes] = useState(user.makes)
    const newBuildMake = useRef(null)

    useEffect(()=>{
        fetch("/makes")
            .then((response)=>response.json())
            .then((companyData)=>setMakes(companyData))
    },[])

    function updateUserBuildsData(newBuild){
        // setNewBuildGlobal(newBuild)
        if (userMakes.find((make) => make.id === newBuild.make_id)){
            console.log("hello")
        } else {
            console.log(newBuild)
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