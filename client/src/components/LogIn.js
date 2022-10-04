import React, { useState } from "react";
import '../styles/Login.css'
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

function LogIn(){
    const [signUpClick, setSignUpClick] = useState(false)
    const [showUserCreatedMessage, setShowUserCreatedMessage] = useState(false)

    return (
        <div>
            <h1 className="Login-h1"> Projectcar Garage </h1>
            <div className="Login-div">
                { signUpClick ? <SignUpForm setSignUpClick={setSignUpClick} setShowUserCreatedMessage={setShowUserCreatedMessage} /> : <LogInForm setSignUpClick={setSignUpClick} setShowUserCreatedMessage={setShowUserCreatedMessage} showUserCreatedMessage={showUserCreatedMessage} /> }
                <button className="LogIn-signUpButton" onClick={(e) => setSignUpClick(true)}> Create an Account </button>
            </div>
        </div>
    )
}

export default LogIn