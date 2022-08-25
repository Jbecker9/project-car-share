import React, { useState } from "react";
import '../styles/Login.css'
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

function LogIn({ setUser }){
    const [signUpClick, setSignUpClick] = useState(false)
    const [showUserCreatedMessage, setShowUserCreatedMessage] = useState(false)

    return (
        <div className="Login-div">
            { signUpClick ? <SignUpForm setSignUpClick={setSignUpClick} setShowUserCreatedMessage={setShowUserCreatedMessage} /> : <LogInForm setSignUpClick={setSignUpClick} setUser={setUser} setShowUserCreatedMessage={setShowUserCreatedMessage} showUserCreatedMessage={showUserCreatedMessage} /> }
            <button className="LogIn-signUpButton" onClick={(e) => setSignUpClick(true)}> Create an Account </button>
        </div>
    )
}

export default LogIn