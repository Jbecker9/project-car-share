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

// TO DO:
//  - Render Delete and Update Build on frontend
//  - Add a 3rd NavBar Route
//    - Most Horsepower
//    - Most Recent Builds
//    - Highest/Lowest Budget
//    - By Year
