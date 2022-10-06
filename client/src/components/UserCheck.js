import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import LogIn from './LogIn';
import NavRoutes from './NavRoutes';

function UserCheck() {
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

    if (!userState) {
        return <LogIn />
    } else {
        return <NavRoutes userState={userState} setUserState={setUserState} />
    }
}

export default UserCheck;