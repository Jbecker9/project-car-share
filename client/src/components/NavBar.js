import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user";
import "../styles/NavBar.css"

function NavBar(){
    const { setUserState, userState, setCommunityNavRef } = useContext(UserContext)

    function handleLogOut(){
        fetch("/logout",{
            method: "DELETE",
        }).then(()=> setUserState(null))
    }

    function renderFeaturedMakes(){
        fetch("/featured_make")
            .then((response)=>response.json())
            .then((sampleData)=>
                setCommunityNavRef(sampleData))
    }

    const activeLinkStyle = "NavBar-NavLinksActive"
    const linkStyle = "NavBar-NavLinks"

    return(
        <div className="NavBar-div">
            <h1 className="NavBar-h1"> Projectcar Garage </h1>
            <ul>
            <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
                activestyle={{backGround:"#2ecc71"}}
            >
                User Garage
            </NavLink>
            </ul>
            <ul>
            <NavLink
                to="/makes"
                className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
                onClick={()=>renderFeaturedMakes()}
            >
                Community Makes
            </NavLink>
            </ul>
            <ul>
            <NavLink
                to="/builds"
                className={({ isActive }) => 
                    isActive ? activeLinkStyle : linkStyle
                }
                activestyle={{backGround:"#2ecc71"}}
            >
                Commuity Builds
            </NavLink>
            </ul>
            <ul>
            <button className="NavBar-logOut" onClick={() => handleLogOut()}> Log Out {userState.username} </button>
            </ul>
        </div>
    )
}

export default NavBar