import React, { useState } from "react";
import '../styles/LogInForm.css'

function LogInForm({ setUser }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            .then((user) => setUser(user))
    }

    return(
        <div className="LogInForm-div">
            <form onSubmit={(e) => handleLogInSubmit(e)}>
                <label>
                    Username:
                    <input 
                    type = 'text'
                    value = { username }
                    onChange = { (e) => setUsername(e.target.value) }
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type = 'password'
                    value = { password }
                    onChange = { (e) => setPassword(e.target.value) }
                    />
                </label>
                <button type = "submit"> Log In </button>
            </form>
        </div>
    )
}

export default LogInForm