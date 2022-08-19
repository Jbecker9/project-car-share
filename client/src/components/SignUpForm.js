import React, { useState } from "react";

function SignUpForm({ renderLogInForm }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
        .then(renderLogInForm())
    }

    return(
        <div>
            <form onSubmit={(e) => handleSignUpSubmit(e)} >
                <label>
                    Username:
                    <input 
                    onChange={ (e) => setUsername(e.target.value) }
                    type = "text"
                    value = { username }
                    />
                </label>
                <label>
                    Password:
                    <input 
                    onChange={ (e) => setPassword(e.target.value) }
                    type = "password"
                    value = { password } 
                    />
                </label>
                <label>
                    Confirm Password:
                    <input 
                    onChange={ (e) => setPasswordConfirmation(e.target.value) }
                    type = "password"
                    value = {passwordConfirmation}
                    />
                </label>
                <button type = "submit" > Create an Account </button>
            </form>
        </div>
    )
}

export default SignUpForm