import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }){
    const [userState, setUserState] = useState(null)
    const [makeRef, setMakeRef] = useState(null)
    const [communityNavRef, setCommunityNavRef] = useState(null)

    useEffect(()=>{
      fetch("/me")
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((userData) => setUserState(userData))
          }
        })
    }, [])

    return(
        <UserContext.Provider value={{communityNavRef, setCommunityNavRef, makeRef, setMakeRef, userState, setUserState}}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }