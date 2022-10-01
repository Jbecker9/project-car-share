import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }){
    const [userState, setUserState] = useState(null)

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
        <UserContext.Provider value={{userState, setUserState}}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }