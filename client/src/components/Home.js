import React, { useState } from "react";
import UserBuildContainer from "./UserBuildContainer";
import "../styles/Home.css"
import NewMakeForm from "./NewMakeForm";

function Home({ renderNewMake, renderNewBuild, user, makes, renderUpdateBuild, renderRemovedBuild }){
    const [makeFormClick, setMakeFormClick] = useState(false)
    const [newBuildObj, setNewBuildObject] = useState(null)

    return(
        <div>
            { makeFormClick ? <NewMakeForm setMakeFormClick={setMakeFormClick} /> : <button onClick={()=>setMakeFormClick(true)} className="Home-renderCreateBuildFormButton">Add a New Make</button> }
            { user.makes.map((make) => <UserBuildContainer newBuildObject={newBuildObj} setNewBuildObject={setNewBuildObject} renderNewMake={renderNewMake} renderNewBuild={renderNewBuild} renderRemovedBuild={renderRemovedBuild} renderUpdateBuild={renderUpdateBuild} makes={makes} make={make} key={make.id} /> )}
        </div>
    )
}

export default Home