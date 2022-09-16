import React, { useState } from "react";
import UserBuildContainer from "./UserBuildContainer";
import "../styles/Home.css"
import CreateBuildForm from "./CreateBuildForm";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";

function Home({ renderNewMake, renderNewBuild, user, makes, renderUpdateBuild, renderRemovedBuild }){
    const [createBuildFormClick, setCreateBuildFormClick] = useState(false)
    const [newBuildObject, setNewBuildObject] = useState(null)

    return(
        <div>
            { createBuildFormClick ? <CreateBuildForm renderNewMake={renderNewMake} renderNewBuild={renderNewBuild} setNewBuildObject={setNewBuildObject} makes={makes} setCreateBuildFormClick={setCreateBuildFormClick}/> : <button className="Home-renderCreateBuildFormButton" onClick={()=>setCreateBuildFormClick(true)}>Create a New Build</button> }
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            { user.makes.map((make) => <UserBuildContainer renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home