import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"

function NavBar({ setUser }){

    function handleLogOut(){
        fetch("/logout",{
            method: "DELETE",
        }).then(()=> setUser(null))
    }

    const activeLinkStyle = "NavBar-NavLinksActive"
    const linkStyle = "NavBar-NavLinks"

    return(
        <div className="NavBar-div">
            <ul>
            <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
                activestyle={{backGround:"#2ecc71"}}
            >
                Home
            </NavLink>
            </ul>
            <ul>
            <NavLink
                to="/search"
                className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
            >
                All Builds
            </NavLink>
            </ul>
            <ul>
            <NavLink
            to="/Create"
            className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
            >
                Create 
            </NavLink>
            </ul>
            <ul>
            <button className="NavBar-logOut" onClick={() => handleLogOut()}> Log Out </button>
            </ul>
        </div>
    )
}

export default NavBar