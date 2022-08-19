import React from "react";
import '../styles/LogInSignUpButton.css'

function LogInSignUpButton({ renderLogInForm, renderSignUpForm }){

    return(
        <div>
            <button className='LogInSignUpButton-button' onClick={renderLogInForm}>
                Login
            </button>
            <button className='LogInSignUpButton-button' onClick={renderSignUpForm} >
                Create an Account
            </button>
        </div>
    )
}

export default LogInSignUpButton