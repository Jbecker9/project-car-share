import React, { useState } from "react";
import UserBuildContainer from "./UserBuildContainer";
import BuildCreatedConfirmed from "./BuildCreatedConfirmed";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";
import NewBuildForm from "./NewBuildForm"
import NewMakeFormExistingMakeContainer from "./NewMakeFormExistingMakeContainer";

function Home({ existingMakesForNewBuild, renderNewMake, renderNewBuild, user, makes, renderUpdateBuild, renderRemovedBuild }){
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [buildFormClickMake, setBuildFormClickMake] = useState(null)
    const [newBuildObject, setNewBuildObject] = useState(null)

    return(
        <div>
            { newBuildObject ? <BuildCreatedConfirmed setNewBuildObject={setNewBuildObject} newBuildObject={newBuildObject}/> : null }
            { buildFormClickMake ? <NewBuildForm setNewBuildObject={setNewBuildObject} renderNewBuild={renderNewBuild} setBuildFormClickMake={setBuildFormClickMake} buildFormClickMake={buildFormClickMake}/> : <NewMakeFormExistingMakeContainer setBuildFormClickMake={setBuildFormClickMake} existingMakesForNewBuild={existingMakesForNewBuild}/> }
            { makeFormClick ? <NewMakeForm makes={makes} setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>{setMakeFormClick(true); setBuildFormClickMake(null)}} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { user.makes.map((make) => <UserBuildContainer setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} renderNewBuild={renderNewBuild} renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home