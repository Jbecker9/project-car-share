import React from "react";

function UserFound({ setUser }){

    function handleLogOut(){
        fetch("/logout",{
            method: "DELETE",
        }).then(()=> setUser(null))
    }

    return(
        <div>
            <button onClick={handleLogOut}> Log Out </button>
        </div>
    )
}

export default UserFound