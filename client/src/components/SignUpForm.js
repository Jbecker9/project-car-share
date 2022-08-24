import React, { useState } from "react";
import "../styles/SignUpForm.css"

function SignUpForm({ setSignUpClick, setShowUserCreatedMessage }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [signUpErrors, setSignUpErrors] = useState(null)

    function handleSignUpSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        })
        .then((response) => response.json())
        .then((user) => handleSignUpErrors(user))
    }

    function handleSignUpErrors(userArg){
        if (userArg.errors){
            setSignUpErrors(userArg.errors.join(" "))
        } else {
            setSignUpErrors(null)
            setSignUpClick(false)
            setShowUserCreatedMessage(true)
        }
    }

    

    return(
        <div className="SignUpForm-div">
            <button className="SignUp-backToLoginButton" onClick={() => setSignUpClick(false)}> X </button>
            <h1 className="SignUp-h1"> Sign Up </h1>
            <form onSubmit={(e) => handleSignUpSubmit(e)} >
                <input 
                    className="SignUpForm-input"
                    onChange={ (e) => setUsername(e.target.value) }
                    type = "text"
                    value = { username }
                    placeholder="Username..."
                    />
                <input 
                    className="SignUpForm-input"
                    onChange={ (e) => setPassword(e.target.value) }
                    type = "password"
                    value = { password } 
                    placeholder="Password..."
                    />
                <input 
                    className="SignUpForm-input"
                    onChange={ (e) => setPasswordConfirmation(e.target.value) }
                    type = "password"
                    value = {passwordConfirmation}
                    placeholder="Confirm Password..."
                    />
                <button className="SignUp-submitButton" type = "submit" > Create an Account </button>
            </form>
            <h3 className="SignUp-h3"> {signUpErrors} </h3>
        </div>
    )
}

export default SignUpForm