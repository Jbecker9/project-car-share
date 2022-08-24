import React, { useState } from "react";
import '../styles/Login.css'
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

function LogIn({ setUser }){
    const [signUpClick, setSignUpClick] = useState(false)

    return (
        <div>
            { signUpClick ? <SignUpForm setSignUpClick={setSignUpClick}/> : <LogInForm setSignUpClick={setSignUpClick} setUser={setUser} /> }
            <button className="LogIn-signUpButton" onClick={(e) => setSignUpClick(true)}> Create an Account </button>
        </div>
    )
}

export default LogIn