import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }){
    const [userState, setUserState] = useState(null)
    const [makeRef, setMakeRef] = useState(null)
    const [communityNavRef, setCommunityNavRef] = useState(null)
    const [openGarageBuilds, setOpenGarageBuilds] = useState(null)  


    useEffect(()=>{
      fetch("/me")
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((userData) => setUserState(userData))
          }
        })
    }, [])

    function getUserBuildData(){
      fetch(`/users/${userState.id}/builds`)
      .then((r)=>r.json())
      .then((userBuildData)=>{
          setOpenGarageBuilds(userBuildData);
      })
    }

    return(
        <UserContext.Provider value={{ setOpenGarageBuilds, openGarageBuilds, getUserBuildData, communityNavRef, setCommunityNavRef, makeRef, setMakeRef, userState, setUserState}}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }