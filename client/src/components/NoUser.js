import React, { useState } from "react";
import LogInForm from "./LogInForm";
import LogInSignUpButton from "./LogInSignUpButtons";
import SignUpForm from "./SignUpForm";
import "../styles/NoUser.css"

function NoUser({ setUser }){
    const [logInClick, setLogInClick] = useState(false)
    const [signUpClick, setSignUpClick] = useState(false)
    const [logInSignUpButton, setLogInSignUpButton] = useState(true)
  
    function renderLogInForm(){
      setLogInClick(true)
      setSignUpClick(false)
      setLogInSignUpButton(false)
    }
  
    function renderSignUpForm(){
      setSignUpClick(true)
      setLogInClick(false)
      setLogInSignUpButton(false)
    }

    function closeForms(){
        setLogInClick(false)
        setSignUpClick(false)
        setLogInSignUpButton(true)
    }

    return(
    <div className="NoUser-div">
      <div className='NoUser-buttonDiv'>
        { !logInSignUpButton ? <button className="NoUser-button" onClick={() => closeForms()}> X </button> : null}
        { logInSignUpButton ? <LogInSignUpButton renderLogInForm={renderLogInForm} renderSignUpForm={renderSignUpForm} /> : null }
        { logInClick ? <LogInForm setUser={setUser} /> : null }
        { signUpClick ? <SignUpForm renderLogInForm={renderLogInForm} /> : null }
      </div>
    </div>
    )
}

export default NoUser