import React from 'react';
import { UserProvider } from '../context/user';
import '../styles/App.css';
import UserCheck from './UserCheck';
// import LogInSignUpPage from './LogInSignUpPage';


function App() {
 
return(
  <UserProvider>
    <UserCheck />
  </UserProvider>
)
}

export default App;
