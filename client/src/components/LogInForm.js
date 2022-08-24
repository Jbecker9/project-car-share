import React, { useState } from "react";
import '../styles/Login.css'

function LogInForm({ setUser, setSignUpClick, setShowUserCreatedMessage, showUserCreatedMessage }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logInError, setLogInError] = useState(null)

    function handleLogInSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((user) => handleLogInError(user))
    }

    function handleLogInError(user){
        if(user.errors){
            setLogInError(user.errors)
        } else {
            setLogInError(null)
            setShowUserCreatedMessage(false)
            setUser(user)
        }
    }

    return(
        <div>
            <h1 className="LogIn-h1"> Login </h1>
            { showUserCreatedMessage ? <h3 className="UserCreated-h3"> User Created! </h3> : null }
            { logInError ? <h3 className="LogIn-h3">{logInError}</h3> : null }
            <form onSubmit={(e) => handleLogInSubmit(e)}>
                <input 
                    className="LogIn-input" 
                    type = 'text'
                    value = { username }
                    placeholder="Username..."
                    onChange = { (e) => setUsername(e.target.value) }
                />
                <input 
                    className="LogIn-input"
                    type = 'password'
                    value = { password }
                    placeholder="Password..."
                    onChange = { (e) => setPassword(e.target.value) }
                />
                <button className="LogIn-submitButton" type = "submit"> Log In </button>
            </form>
            <button className="LogIn-signUpButton" onClick={(e) => setSignUpClick(true)}> Create an Account </button>
        </div>
    )
}

export default LogInForm